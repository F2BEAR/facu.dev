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
    <a
      href="./Resume Facundo Carbonel.pdf"
      download="Facundo-Carbonel-CV"
      className="rounded-3xl border text-gray-200 border-cyan py-4 px-8 md:px-16 font-bold text-center text-lg uppercase hover:bg-white/5"
      data-gtm-event="cv_download"
      onClick={handleClick}
    >
      Download resume
    </a>
  );
}
