import Home from "../components/home/Home";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Services from "../components/services/Services";
import Work from "../components/work/Work";
import Qualification from "../components/qualification/Qualification";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";

export default function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Services />
      <Work seeAll={false} />
      <Qualification />
      <Testimonials />
      <Contact />
    </>
  );
}
