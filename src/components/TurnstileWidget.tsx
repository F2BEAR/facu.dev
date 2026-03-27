"use client";

import { Turnstile } from "@marsidev/react-turnstile";

interface Props {
  onSuccess: (token: string) => void;
  onError?: () => void;
}

export default function TurnstileWidget({ onSuccess, onError }: Props) {
  return (
    <Turnstile
      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
      onSuccess={onSuccess}
      onError={onError}
    />
  );
}
