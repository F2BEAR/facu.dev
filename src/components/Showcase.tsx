import ShowcaseItem from './ShowcaseItem';

export default function Showcase() {
	return (
		<section className="mt-6 text-center">
			<h1 className="text-3xl px-8">Showcase</h1>
			<div className="mt-3 flex w-full flex-wrap items-center justify-center gap-2">
				<ShowcaseItem
					title="nSeed"
					desc="A CLI Tool for database seeding with auto-generated data."
					url="https://www.npmjs.com/package/nseed"
					type="npm"
				/>
				<ShowcaseItem
					title="EasyQR"
					desc="A QR code generator web app"
					url="https://easy-qr-dusky.vercel.app"
				/>
				<ShowcaseItem
					title="Passwordy"
					desc="A simple CLI for secure password generation."
					url="https://www.npmjs.com/package/passwordy"
					type="npm"
				/>
				<ShowcaseItem
					title="Alertín"
					desc="Discord Bot to get alerts from your server through HTTP."
					url="https://github.com/F2BEAR/Alertin"
					type="github"
				/>
				<ShowcaseItem
					title="Dot-Logs"
					desc="A winston implementation to make logs easy"
					url="https://www.npmjs.com/package/dot-logs"
					type="npm"
				/>
				<ShowcaseItem
					title="Base64IMG"
					desc="A image to Base64 string converter"
					url="https://base64-img-mu.vercel.app"
				/>
				<ShowcaseItem
					title="TS-Syslog"
					desc="Fully typed NodeJS Syslog Server for ESM, CJS and Typescript."
					url="https://www.npmjs.com/package/ts-syslog"
					type="npm"
				/>
				<ShowcaseItem
					title="agust.sh"
					desc="A web portfolio, showcasing a Agustnín's great skills and creativity."
					url="https://agust.sh"
				/>
			</div>
		</section>
	);
}
