import "./app.scss"
import Navbar from "./components/navbar/Navbar"


export default function App() {
  return (
    <div className=" overflow-hidden">
      <section id="Homepage">
        <Navbar />
      </section>
      <section>Parallax</section>
      <section id="Services">Services</section>
      <section >Parallax</section>
      <section id="Portfolio">Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
      <section id="About">About</section>
    </div>
  )
}