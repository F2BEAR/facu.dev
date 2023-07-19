export default function Download() {
	return (
		<section className="mt-8 flex w-full flex-row items-center justify-center text-center">
			<a
				href="./FacundoCarbonel-CV.pdf"
				download="Facundo-Carbonel-CV"
				className="rounded-3xl bg-cyan py-4 px-16 font-mono text-lg text-black hover:drop-shadow-sm"
			>
				Download my CV
			</a>
		</section>
	);
}
