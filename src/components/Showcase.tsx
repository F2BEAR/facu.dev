import ShowcaseItem from "./ShowcaseItem";

export default function Showcase() {
  return (
    <section
      className="w-full py-24 flex flex-col justify-center items-center"
      id="showcase"
    >
      <div className="lg:w-5xl px-8">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">Showcase</h2>
            <p className="mt-2">
              Curated list of my Open Source tools and applications.
            </p>
          </div>
          <div className="hidden lg:block h-0.5 grow mx-12 bg-white/5"></div>
        </div>

        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-6">
          <ShowcaseItem
            title="nSeed"
            desc="A CLI Tool for database seeding with auto-generated data."
            url="https://www.npmjs.com/package/nseed"
            type="npm"
          />
          <ShowcaseItem
            title="Passwordy"
            desc="A simple CLI for secure password generation."
            url="https://www.npmjs.com/package/passwordy"
            type="npm"
          />
          <ShowcaseItem
            title="JWTier"
            desc="A CLI tool to generate JWTs on the fly"
            url="https://www.npmjs.com/package/jwtier"
            type="npm"
          />
          <ShowcaseItem
            title="TS-Syslog"
            desc="Fully typed NodeJS Syslog Server for ESM, CJS and Typescript."
            url="https://www.npmjs.com/package/ts-syslog"
            type="npm"
          />
          <ShowcaseItem
            title="EasyQR"
            desc="A QR code generator web app"
            url="https://easy-qr-dusky.vercel.app"
          />
          <ShowcaseItem
            title="Alertín"
            desc="Discord Bot to get alerts from your server through HTTP."
            url="https://github.com/F2BEAR/Alertin"
            type="github"
          />
          <ShowcaseItem
            title="Curlier"
            desc="A minimal, extensible, and flexible CLI tool to execute saved requests using curl."
            url="https://github.com/F2BEAR/curlier"
            type="github"
          />
          <ShowcaseItem
            title="BWEM"
            desc="Load environment variables from Bitwarden secure notes."
            url="https://github.com/F2BEAR/bwem"
            type="github"
          />
        </div>
      </div>
    </section>
  );
}
