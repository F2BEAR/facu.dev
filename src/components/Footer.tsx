import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-center bg-linear-to-b from-transparent via-black to-black py-4">
      <section className="grid grid-rows-3 gap-2">
        <Image
          className="row-start-2"
          src="/assets/svg/logo.svg"
          alt="logo"
          width={176}
          height={70}
        />
        <p className="row-start-3 self-center">Facundo Carbonel | 2026</p>
      </section>
    </footer>
  );
}
