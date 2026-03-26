export default function About() {
  return (
    <div
      className="py-12 px-6 lg:py-40 lg:px-24 flex justify-center"
      id="about"
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan/20 to-transparent blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
        <section className="lg:w-6xl relative overflow-hidden p-8 md:p-16 rounded-lg border border-white/5 bg-[#191c23]/3 backdrop-blur-2xl">
          <div className="absolute -top-24 -right-14 w-96 h-96 bg-cyan/5 blur-3xl rounded-full"></div>
          <article className="py-28 flex flex-col lg:flex-row justify-around gap-4 w-full space-y-8">
            <div className="md:col-span-4">
              <h2 className="text-4xl font-bold text-white italic">
                Hi there!
              </h2>
              <div className="w-12 h-1 bg-cyan mt-4"></div>
            </div>
            <div className="text-xl leading-relaxed max-w-2xl">
              <p>
                I'm a Full-stack TypeScript developer with 5+ years of
                experience building and maintaining production-grade systems.
              </p>
              <br />
              <p>
                Focused on Node.js, Next.js, and cloud infrastructure, with
                hands-on experience developing AI-powered tools and
                microservices, and a habit of owning the full lifecycle, from
                architecture to deployment.
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
