"use client";

import { pushEvent } from "../lib/gtm";

export default function Download() {
  const handleClick = () => {
    pushEvent({
      event: "cv_download",
      category: "engagement",
    });
  };

  return (
    <section className="mt-8 flex w-full animate-fadeIn flex-row items-center justify-center text-center">
      <a
        href="./Resume Facundo Carbonel.pdf"
        download="Facundo-Carbonel-CV"
        className="rounded-3xl bg-cyan py-4 px-16 font-mono text-lg text-slate-800 hover:drop-shadow-sm"
        data-gtm-event="cv_download"
        onClick={handleClick}
      >
        Download my CV
      </a>
    </section>
  );
}
