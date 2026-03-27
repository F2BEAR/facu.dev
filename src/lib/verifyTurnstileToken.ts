interface TurnstileVeryfyResponse {
  success: boolean;
  error_codes?: string[];
}

export default async function VerifyTurnstileToken(
  token: string,
): Promise<boolean> {
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    },
  );

  const data: TurnstileVeryfyResponse = await res.json();
  return data.success;
}
