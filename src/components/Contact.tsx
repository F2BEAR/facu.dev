"use client";

import { useState } from "react";
import Download from "./Download";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("./ContactForm"), { ssr: false });

export default function Contact() {
  const [isOpen, toggle] = useState<boolean>(false);

  return (
    <>
      <div
        className="py-12 px-6 md:py-40 md:px-24 w-full animate-fadeIn flex justify-center"
        id="contact"
      >
        <div className="rounded-xl lg:w-6xl min-h-96 relative overflow-hidden py-24 px-24 border border-white/5 bg-[#191c23]">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan/5 blur-3xl rounded-full"></div>
          <h2 className="text-4xl md:text-6xl font-bold">Like what you see?</h2>
          <p className="mb-8 mt-4">I'm allways looking for a new challenge.</p>
          <div className="relative flex flex-col md:flex-row gap-4 z-10">
            <button
              className="md:min-w-72 rounded-3xl bg-cyan py-4 px-8 md:px-16 font-bold text-lg uppercase text-slate-800 hover:drop-shadow-sm"
              onClick={() => toggle(!isOpen)}
            >
              Contact Me
            </button>
            <Download />
          </div>
        </div>
      </div>
      <ContactForm isOpen={isOpen} toggle={toggle} />
    </>
  );
}
