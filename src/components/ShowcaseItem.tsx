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
			className="h-64 w-64 rounded-3xl bg-black text-justify hover:drop-shadow-sm"
		>
			<div className="flex h-full flex-col items-center justify-around gap-2 p-8">
				<div className="flex flex-row items-center gap-2">
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

				<p className="text-left">{props.desc}</p>
			</div>
		</a>
	);
}
