// import Typed from "react-typed";
//import DownloadConceptButton from "./ui/DownloadConceptButton";
import Image from "next/image";
import Link from "next/link";
import hero from "../public/OliyMichi_hero.jpg";
import heroMobile from "../public/OliyMichi_hero_mobile.jpg";
const Hero = () => {
  //console.log(process.env.NODE_ENV);
  return (
    <div className="">
      <div className="absolute pt-24 md:pt-56 md:pl-12 z-10 text-center">
        <div className="bg-white/40 p-4 rounded-lg flex flex-col items-center justify-center gap-y-4">
          <h1 className="text-5xl font-bold">
            Willkommen zu <span className="text-bm-main">Bachata & More</span>
          </h1>
          <p className="text-3xl">Das Eventkonzept mit Bachata und Fitness</p>

          <Link href="#kontakt">
            <button className="btn btn-wide">Jetzt anfragen</button>
          </Link>
        </div>
      </div>
      <div className="relative min-h-screen overflow-hidden">
        <Image
          src={hero}
          alt="Bachata and More - Background Image"
          quality={100}
          fill
          priority
          sizes="100vw"
          className="object-cover hidden md:block"
        />
        <Image
          src={heroMobile}
          alt="Bachata and More - Background Image"
          quality={100}
          fill
          priority
          sizes="100vw"
          className="object-cover block md:hidden"
        />
      </div>
    </div>
  );
};

export default Hero;
