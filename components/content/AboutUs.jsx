import AboutsUsImg from "../../public/images/MichiyOli_aboutus.webp";
import Image from "next/image";
const AboutUs = () => {
  return (
    <>
      <div id="aboutus" className="w-full bg-white py-16 px-4">
        <div className="max-w-[1024px] py-10 mx-auto grid md:grid-cols-2 md:gap-x-4">
          <div className="flex flex-col justify-center">
            <p className="text-xl uppercase font-bold text-[#FFC08E]">
              Über uns
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Michi & Oli
            </h1>
            <div className="text-justify">
              <p>
                <span className="font-bold">Michi</span> unterrichtet gut 20
                Jahre schon erfolgreich verschiedenste Kurse im Group Fitness
                Bereich in namhaften Fitness Studios in München und ist als
                Personaltrainerin tätig (
                <a
                  className="italic hover:underline"
                  href="https://www.michaela-suessbauer.de"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.michaela-suessbauer.de
                </a>
                ). Seit 15 Jahren entwickelt Michi Fitnessvideos. Früher als
                DVDs, heute für eine Onlineplattform (
                <a
                  className="italic hover:underline"
                  href="https://www.fitnessraum.de"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.fitnessraum.de
                </a>
                ). Zudem ist sie Referentin und Ausbilderin für die IFAA.
              </p>
              <p className="py-1">
                <span className="font-bold"> Oli</span> ist über 10 Jahre im
                Fitness Bereich tätig, absolvierte zahlreiche Ausbildungen (z.B.
                HOT IRON®, Indoor Cycling, Deepwork, Animal Flow, Step &
                Aerobic) und bildet regelmäßig für IFHIAS aus.
              </p>
              <p>
                <span className="font-bold">Michi & Oli</span> lernten sich 2018
                im ROBINSON Club Soma Bay kennen. Nach dieser Zeit waren sie in
                diversen Clubanlagen mit Events aktiv. Michi ist schon immer
                eine leidenschaftliche Tänzerin, Oli entdeckte seine mit Bachata
                &quot;Sensual&quot;. 2021 boten sie zum ersten Mal, anfangs als
                Experiment gedacht, einen Bachata Basic Kurs an. Der Kurs war
                dermaßen erfolgreich, dass noch weitere folgten. Dies war die
                Geburtsstunde von
                <span className="font-bold text-[#FFC08E]"> Bachata&More</span>.
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
