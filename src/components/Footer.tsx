import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-b from-[#10131a] via-black to-black py-16">
      <div className="px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <section className="flex flex-col items-center gap-2">
          <Image src="/assets/svg/logo.svg" alt="logo" width={70} height={7} />
          <p className="font['Inter'] text-[10px] tracking-[0.2em] uppercase text-[#e0e2ec]/40">
            Facundo Carbonel | 2026
          </p>
        </section>
        <section className="flex gap-12">
          <Link
            className="text-[#e0e2ec]/40 hover:text-cyan transition-colors font-['Inter'] text-xs tracking-[0.2em] uppercase"
            href="https://github.com/F2BEAR/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            className="text-[#e0e2ec]/40 hover:text-cyan transition-colors font-['Inter'] text-xs tracking-[0.2em] uppercase"
            href="https://linkedin.com/in/facundo-carbonel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            className="text-[#e0e2ec]/40 hover:text-cyan transition-colors font-['Inter'] text-xs tracking-[0.2em] uppercase"
            href="https://github.com/F2BEAR/facu.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </Link>
        </section>
        <p className="text-[#e0e2ec]/40 font-['Inter'] text-xs tracking-[0.2em] uppercase">
          {"Made with love <3"}
        </p>
      </div>
    </footer>
  );
}
