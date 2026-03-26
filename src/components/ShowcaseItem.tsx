import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  desc: string;
  url: string;
  type?: "npm" | "github";
}

export default function ShowcaseItem(props: Props) {
  return (
    <Link
      href={props.url}
      rel="noopener noreferrer"
      target="_blank"
      className="flex flex-col rounded-3xl min-h-56 border border-white/5 bg-[#191c23] p-4 lg:p-8 hover:drop-shadow-sm"
    >
      <div className="flex flex-row items-center gap-2 justify-start">
        <h1 className="text-2xl font-bold mb-2">{props.title}</h1>
        {props.type === "npm" ? (
          <Image
            src="/assets/svg/npm.svg"
            alt="NPM Logo"
            width={40}
            height={40}
          />
        ) : props.type === "github" ? (
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
      <p className="w-full text-left text-sm">{props.desc}</p>
    </Link>
  );
}
