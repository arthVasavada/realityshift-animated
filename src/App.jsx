import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <div className="overflow-y-scroll h-screen snap-y snap-mandatory scrollbar-hide">
      <section id="Home" className="container h-screen snap-start">
        <Navbar />
        <Hero />
      </section>
      <section className="h-screen snap-start">Parallax</section>
      <section id="Services" className="h-screen snap-start">Services</section>
      <section className="h-screen snap-start">Parallax</section>
      <section id="Portfolio" className="h-screen snap-start">Portfolio1</section>
      <section className="h-screen snap-start">Portfolio2</section>
      <section className="h-screen snap-start">Portfolio3</section>
      <section id="Contact" className="h-screen snap-start">Contact</section>
      <section id="About" className="h-screen snap-start">About</section>
    </div>
  );
}
