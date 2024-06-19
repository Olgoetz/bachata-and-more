import Hero from "@/components/Hero";
import Bachata from "@/components/Bachata";
import Teaser from "@/components/Teaser";
import More from "@/components/More";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <main>
      <Hero />
      <Bachata />
      <Teaser />
      <More />
      <Events />
      {/* <Testimonials /> */}
      <Contact />
      <AboutUs />
    </main>
  );
}
