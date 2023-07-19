import Image from 'next/image';

export default function Header() {
	return (
		<header className="mt-8 flex w-full flex-row items-center gap-4 px-8 md:mt-24 md:px-0 lg:w-3/5">
			<Image
				src="/assets/images/profile.jpg"
				alt="Profile Image"
				className="rounded-full"
				width={148}
				height={148}
			/>
			<div className="flex w-full flex-col items-center justify-between gap-4 text-justify md:flex-row">
				<div>
					<h1 className="text-xl font-bold md:text-3xl">Facundo Carbonel</h1>
					<h3 className="font-mono text-xs md:text-base">
						Full-Stack Web Developer
					</h3>
					<hr className="my-3 hidden md:block" />
				</div>
				<nav className="flex gap-4 w-full md:w-auto justify-around px-3">
					<a
						href="https://github.com/F2BEAR"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:drop-shadow-sm"
					>
						<Image
							src="/assets/svg/github.svg"
							alt="github"
							width={24}
							height={24}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/facundo-carbonel/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:drop-shadow-sm"
					>
						<Image
							src="/assets/svg/linkedin.svg"
							alt="linkedin"
							width={24}
							height={24}
						/>
					</a>
					<a href="mailto:contacto@facu.dev" className="hover:drop-shadow-sm">
						<Image
							src="/assets/svg/email.svg"
							alt="email"
							width={24}
							height={24}
						/>
					</a>
				</nav>
			</div>
		</header>
	);
}
