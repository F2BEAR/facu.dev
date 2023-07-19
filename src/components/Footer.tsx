import Image from 'next/image';

export default function Footer() {
	return (
		<footer className="flex w-full items-center justify-center bg-gradient-to-b from-transparent via-black to-black py-8 md:py-24">
			<section className="gap-2 self-center text-center">
				<Image
					src="/assets/svg/logo.svg"
					alt="logo"
					width={176}
					height={70}
				/>
				<p>Facundo Carbonel | 2022</p>
			</section>
		</footer>
	);
}
