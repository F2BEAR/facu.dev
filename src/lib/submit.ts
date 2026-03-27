"use server";

import { Resend } from "resend";
import { parseWithZod } from "@conform-to/zod/v4";
import type { SubmissionResult } from "@conform-to/react";
import { headers } from "next/headers";
import ratelimit from "./ratelimit";
import schema from "./schema";
import isSpam from "./honeyPot";
import VerifyTurnstileToken from "./verifyTurnstileToken";

const resend = new Resend(process.env.RESEND_API_KEY);

type SubmitResult =
  | { status: "success"; result: SubmissionResult }
  | { status: "error"; result: SubmissionResult };

export async function submit(
  _prevState: unknown,
  formData: FormData,
): Promise<SubmitResult> {
  const submission = parseWithZod(formData, { schema });

  if (submission.status !== "success") {
    return { status: "error" as const, result: submission.reply() };
  }

  const ip = (await headers()).get("x-forwarded-for") ?? "anonymous";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return { status: "error", result: submission.reply() };
  }

  if (isSpam(submission.value)) {
    console.warn("They took the honey, it's a spam");
    return { status: "success" as const, result: submission.reply() };
  }

  const isHuman = await VerifyTurnstileToken(submission.value.turnstileToken);

  if (!isHuman) {
    return { status: "error", result: submission.reply() };
  }

  const { email, name, company, message } = submission.value;

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Form Contact <contacto@facu.dev>",
      to: "contacto@facu.dev",
      replyTo: email,
      subject: `A new form contact from ${name} - ${company}`,
      text: message.toString(),
    });

    if (error) {
      console.error(
        "There was an error while sending the email: ",
        error.message,
      );
      return {
        status: "error" as const,
        result: submission.reply({ formErrors: [error.message] }),
      };
    }

    return {
      status: "success" as const,
      result: submission.reply({ resetForm: true }),
    };
  } catch (err) {
    console.error(`There was an unexpected error: ${err}`);
    return {
      status: "error" as const,
      result: submission.reply({
        formErrors: ["There was a problem sending the message."],
      }),
    };
  }
}
