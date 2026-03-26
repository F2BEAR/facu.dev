import { z } from "zod/v4";

const schema = z.object({
  email: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.email({ error: "Email is required." }),
  ),
  name: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.string({ error: "Name is required" }),
  ),
  company: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.string({ error: "Company is required." }).max(50),
  ),
  message: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z
      .string({ error: "Message is required." })
      .min(10, "Message is too short.")
      .max(500, "Message is too long."),
  ),
});

export default schema;
