interface FormPayload {
  name: string;
  email: string;
  company: string;
  message: string;
  website?: string | null;
}

export default function isSpam(payload: FormPayload): boolean {
  return !!payload.website && payload.website.trim().length > 0;
}
