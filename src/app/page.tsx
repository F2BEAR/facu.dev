import About from '../components/About';
import Download from '../components/Download';
import KeyInfo from '../components/KeyInfo';
import Resumee from '../components/Resumee';
import Showcase from '../components/Showcase';

export default function Page() {
	return (
		<>
			<KeyInfo />
			<Resumee />
			<Download />
			<About />
			<Showcase />
		</>
	);
}
