import About from "../components/About";
import KeyInfo from "../components/KeyInfo";
import Resumee from "../components/Resumee";
import Showcase from "../components/Showcase";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Nav from "../components/Nav";

export default function Page() {
  return (
    <>
      <Nav />
      <div className="flex min-h-screen flex-col items-center justify-center hero">
        <Header />
        <KeyInfo />
        <Resumee />
      </div>
      <About />
      <Showcase />
      <Contact />
    </>
  );
}
