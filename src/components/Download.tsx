export default function Download() {
  return (
    <section className="mt-8 flex w-full animate-fadeIn flex-row items-center justify-center text-center">
      <a
        href="./Resume Facundo Carbonel.pdf"
        download="Facundo-Carbonel-CV"
        className="rounded-3xl bg-cyan py-4 px-16 font-mono text-lg text-slate-800 hover:drop-shadow-sm"
      >
        Download my CV
      </a>
    </section>
  );
}
