import About from "../components/About";
import Download from "../components/Download";
import KeyInfo from "../components/KeyInfo";
import Resumee from "../components/Resumee";
import Showcase from "../components/Showcase";
import Header from "../components/Header";

export default function Page() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Header />
        <KeyInfo />
        <Resumee />
        <Download />
      </div>
      <About />
      <Showcase />
    </>
  );
}
