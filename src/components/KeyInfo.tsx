export default function KeyInfo() {
  return (
    <section className="mt-6 flex animate-fadeIn flex-row gap-4 px-8">
      <div>
        <h1 className="text-sm text-cyan md:text-xl font-bold">Languages</h1>
        <p className="text-xs md:text-base">Spanish / English</p>
      </div>
      <div>
        <h1 className="text-sm text-cyan md:text-xl font-bold">Location</h1>
        <p className="text-xs md:text-base">Montevideo, Uruguay</p>
      </div>
      <div>
        <h1 className="text-sm text-cyan md:text-xl font-bold">Time Zone</h1>
        <p className="text-xs md:text-base">GMT-3</p>
      </div>
    </section>
  );
}
