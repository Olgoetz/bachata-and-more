// import Typed from "react-typed";
//import DownloadConceptButton from "./ui/DownloadConceptButton";
import Image from "next/image";
import Link from "next/link";
// import hero from "../public/OliyMichi_hero.jpg";
// import heroMobile from "../public/OliyMichi_hero_mobile.jpg";
import BackgroundVideo from "./BackgroundVideo";
const Hero = () => {
  return (
    <div className="">
      <div className="absolute w-full md:w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10 text-center">
        <div className="bg-white/40 p-4 rounded-lg flex flex-col items-center justify-center gap-y-4">
          <h1 className="text-5xl font-bold leading-normal">
            Willkommen zu <br />
            <span className="text-bm-main">Bachata & More</span>
          </h1>
          <p className="text-3xl">Das Eventkonzept mit Bachata und Fitness</p>

          <Link href="#kontakt">
            <button className="btn btn-wide">Jetzt anfragen</button>
          </Link>
        </div>
      </div>
      <BackgroundVideo />
      {/* <div className="relative min-h-screen overflow-hidden">
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
          priority
          fill
          sizes="80vw"
          className="object-cover block md:hidden"
        />
      </div> */}
    </div>
  );
};

export default Hero;
