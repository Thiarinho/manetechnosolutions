import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";

export default function About() {
  return (
    <div className="min-h-screen bg-[#060B12] text-white">
      <Navbar />
      <main>
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}
