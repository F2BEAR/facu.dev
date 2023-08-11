import Image from 'next/image';

interface Props {
	title: string;
	desc: string;
	url: string;
	type?: 'npm' | 'github';
}

export default function ShowcaseItem(props: Props) {
	return (
		<a
			href={props.url}
			rel="noopener noreferrer"
			target="_blank"
			className="flex h-32 w-full flex-col items-center justify-around rounded-3xl bg-black p-8 text-start hover:drop-shadow-sm md:h-52 md:w-52 lg:text-justify "
		>
			<div className="flex w-full flex-row items-center justify-start gap-2 md:justify-center">
				<h1 className="text-2xl font-bold">{props.title}</h1>
				{props.type === 'npm' ? (
					<Image
						src="/assets/svg/npm.svg"
						alt="NPM Logo"
						width={40}
						height={40}
					/>
				) : props.type === 'github' ? (
					<Image
						src="/assets/svg/github.svg"
						alt="Github Logo"
						width={24}
						height={24}
					/>
				) : (
					<Image
						src="/assets/svg/web.svg"
						alt="Web SVG"
						width={24}
						height={24}
					/>
				)}
			</div>
			<p className="w-full text-left">{props.desc}</p>
		</a>
	);
}
