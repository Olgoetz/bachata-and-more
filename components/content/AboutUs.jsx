import AboutsUsImg from "../../public/images/MichiyOli_aboutus.webp";
import Image from "next/image";
const AboutUs = () => {
  return (
    <>
      <div id="aboutus" className="w-full bg-white py-16 px-4">
        <div className="max-w-[1024px] py-8 mx-auto grid md:grid-cols-2 md:gap-x-4">
          <div className="flex flex-col justify-center">
            <p className="text-xl uppercase font-bold text-orange-400">
              About Us
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Michi & Oli
            </h1>
            <div className="text-justify leading-8">
              <p>
                <span className="font-bold">Michi & Oli </span>
                got to know each other in 2018 in the ROBINSON Club Soma Bay.
                From there on they held a couple of event in different ROBINSON
                clubs. Since ever Michi is a passionate dance, Oli discovered
                his passion with{" "}
                <span className="font-bold text-orange-400">
                  Bachata Sensual
                </span>
                .
              </p>
              <p>
                Both attend Bachata workshops in Europe such as Spain, Croatia,
                Switzerland, Italy, Netherlands and Poland with international
                Bachata stars. They significantly improved their technique,
                musicality and their teaching style was inspired and influenced
                as well. Michi & Oli&apos;s dance classes stand for: Simplicity, fun,
                passion, success.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto mx-auto my-4"
              src={AboutsUsImg}
              alt="/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
