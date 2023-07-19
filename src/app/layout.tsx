import { Roboto, Roboto_Mono } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Layout = {
	children: ReactNode;
};

const roboto = Roboto({
	weight: ['400', '700'],
	display: 'swap',
	subsets: ['latin'],
	variable: '--base-font',
});

const robotoMono = Roboto_Mono({
	weight: ['400', '700'],
	display: 'swap',
	subsets: ['latin'],
	variable: '--mono-font',
});

export const metadata: Metadata = {
	metadataBase: new URL("https://facu.dev/"),
	title: 'Facundo Carbonel | Web Development',
	description: `My name is Facundo Carbonel, I'm a Full-Stack JavaScript Developer and this is my web-portfolio`,
	icons: {
		icon: '/favicon.ico',
		apple: '/assets/images/logo192.png',
	},
	manifest: '/manifest.json',
	keywords: ['Facundo Carbonel', 'Facundo', 'Carbonel', 'Dev', 'Web Dev'],
	creator: 'F2BEAR',
	authors: [{ name: 'F2BEAR', url: 'https://github.com/F2BEAR' }],
	openGraph: {
		type: 'website',
		title: 'Facundo Carbonel | Web Development',
		description: `I'm a Full-Stack JavaScript Developer 🔥`,
		siteName: 'facu.dev',
		url: 'https://facu.dev/',
		images: [
			{
				url: 'https://facu.dev/assets/images/logo192.png',
				width: 192,
				height: 192,
				alt: 'Logo',
			},
			{
				url: 'https://facu.dev/assets/images/logo512.png',
				width: 512,
				height: 512,
				alt: 'Logo',
			},
		],
		locale: 'en_US',
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
	},
	twitter: {
		card: 'summary',
		title: 'Facundo Carbonel | Web Development',
		description: `I'm a Full-Stack JavaScript Developer 🔥`,
		creator: '@F2BEAR',
		images: ['https://facu.dev/assets/images/logo512.png'],
	},
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1,
	},
};

export default function RootLayout({ children }: Layout) {
	return (
		<html lang="en">
			<body
				className={`${roboto.variable} ${robotoMono.variable} flex flex-col items-center justify-center font-base text-white`}
			>
				<Header />
				<main className="mx-8 md:m-0 lg:w-3/5">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
