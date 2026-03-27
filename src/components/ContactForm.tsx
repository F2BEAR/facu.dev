"use client";

import Form from "next/form";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod/v4";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import {
  Dispatch,
  SetStateAction,
  useActionState,
  useEffect,
  useState,
} from "react";
import TurnstileWidget from "./TurnstileWidget";
import { submit } from "../lib/submit";
import schema from "../lib/schema";

function Spinner() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-spin"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="rounded-3xl bg-cyan py-4 px-8 md:px-16 font-bold text-lg uppercase flex justify-center text-slate-800 hover:drop-shadow-sm"
      type="submit"
      disabled={pending}
    >
      {pending ? <Spinner /> : "Submit"}
    </button>
  );
}

export default function ContactForm({
  isOpen = false,
  toggle,
}: {
  isOpen: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}) {
  const [lastResult, action] = useActionState(submit, undefined);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const [form, { email, name, company, message, website }] = useForm({
    lastResult: lastResult?.result,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema,
      });
    },
    shouldValidate: "onSubmit",
    shouldRevalidate: "onInput",
  });

  useEffect(() => {
    if (!lastResult) return;
    if (lastResult.status === "success") {
      toast.success("Message sent!");
      setTimeout(() => toggle(!isOpen), 2000);
    }
    if (lastResult.status === "error")
      toast.error("There was a problem sending the message.");
  }, [lastResult]);

  return (
    <div
      className={`${!isOpen ? "hidden" : "fixed inset-0"} flex items-center justify-center backdrop-blur-sm z-50`}
      onClick={() => toggle(!isOpen)}
    >
      <div className="relative overflow-hidden flex flex-col items-center gap-x-4 gap-y-6 w-full max-w-2xl rounded-3xl bg-[#191c23] p-8">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-cyan"></div>
        <div className="w-full flex flex-col">
          <div className="w-full flex justify-end">
            <button
              className="text-slate-400 hover:text-white"
              onClick={() => toggle(false)}
            >
              ✕
            </button>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-cyan rounded-full animate-pulse"></span>
            <span className="font-label text-[10px] tracking-[0.2em] uppercase text-cyan">
              Network_Status: Awaiting_Input
            </span>
          </div>
        </div>
        <Form
          className="flex flex-col gap-x-4 gap-y-6 w-full "
          id={form.id}
          action={action}
          onSubmit={form.onSubmit}
          onClick={(e) => e.stopPropagation()}
          noValidate
        >
          <div className="mb-8">
            <h2 className="text-4xl tracking-tight mb-3 font-bold uppercase">
              Get in touch!
            </h2>
            <p>
              Drop a line for architectural inquiries, technical collaborations,
              or system audits.
            </p>
          </div>
          <section className="grid grid-rows-[auto_1fr] gap-4">
            <div className="flex flex-row gap-4">
              <div className="w-1/2">
                <label htmlFor="name" className="text-xs">
                  Name
                </label>
                <input
                  type="text"
                  key={name.key}
                  name={name.name}
                  id="name"
                  className={`rounded-lg bg-[#2D3038] w-full ${
                    name.errors ? "border border-red-500" : ""
                  } p-2 mt-2`}
                  placeholder="IDENTITY_STRING"
                />
                <p className="text-red-500 text-xs mt-1">{name.errors}</p>
              </div>

              <div className="w-1/2">
                <label htmlFor="company" className="text-xs">
                  Company
                </label>
                <input
                  type="text"
                  key={company.key}
                  name={company.name}
                  id="company"
                  className={`rounded-lg bg-[#2D3038] w-full ${
                    company.errors ? "border border-red-500" : ""
                  } p-2 mt-2`}
                  placeholder="ORG_ENTITY"
                />
                <p className="text-red-500 text-xs mt-1">{company.errors}</p>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-xs">
                Email
              </label>
              <input
                type="email"
                key={email.key}
                name={email.name}
                id="email"
                className={`rounded-lg bg-[#2D3038] w-full ${
                  email.errors ? "border border-red-500" : ""
                } p-2 mt-2`}
                placeholder="IDENTITY@ENDPOINT.EXT"
              />
              <p className="text-red-500 text-xs mt-1">{email.errors}</p>
            </div>

            <div>
              <label htmlFor="message" className="text-xs">
                Message
              </label>
              <textarea
                key={message.key}
                name={message.name}
                id="message"
                className={`rounded-lg bg-[#2D3038] ${
                  message.errors ? "border border-red-500" : ""
                } w-full p-2 mt-2`}
                placeholder="TRANSMIT_DATA_HERE..."
              />
              <p className="text-red-500 text-xs mt-1">{message.errors}</p>
            </div>
          </section>

          <input
            type="hidden"
            name="turnstileToken"
            value={turnstileToken ?? ""}
          />
          <TurnstileWidget onSuccess={setTurnstileToken} />

          <input
            className="hidden"
            key={website.key}
            name={website.name}
            placeholder="example.com"
          />

          <SubmitButton />
        </Form>
      </div>
    </div>
  );
}
