import React from "react";
import Image from "next/image";
import aboutus from "@/public/OliyMichi_aboutus.jpg";
function AboutUs() {
  return (
    <div id="ueber-uns" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-5xl text-bm-main font-bold">Über Uns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
          <div className="leading-10">
            <p className="">
              <span className="font-bold">Michi</span> unterrichtet gut 20 Jahre
              schon erfolgreich verschiedenste Kurse im Group Fitness Bereich in
              namhaften Fitness Studios in München und ist als Personaltrainerin
              tätig (
              <a
                className="italic hover:underline"
                href="https://www.michaela-suessbauer.de"
                target="_blank"
                rel="noreferrer"
              >
                www.michaela-suessbauer.de
              </a>
              ). Seit 15 Jahren entwickelt Michi Fitnessvideos. Früher als DVDs,
              heute für eine Onlineplattform (
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
            <p>
              <span className="font-bold"> Oli</span> ist über 10 Jahre im
              Fitness Bereich tätig, absolvierte zahlreiche Ausbildungen (z.B.
              HOT IRON®, Indoor Cycling, DEEPWORK, 365, Animal Flow, Step &
              Aerobic) und bildet regelmäßig für IFHIAS aus.
            </p>
            <p>
              <span className="font-bold">Michi & Oli</span> lernten sich 2018
              im ROBINSON Club Soma Bay kennen. Nach dieser Zeit waren sie in
              diversen Clubanlagen mit Events aktiv. Michi ist schon immer eine
              leidenschaftliche Tänzerin, Oli entdeckte seine mit Bachata
              &quot;Sensual&quot;. 2021 boten sie zum ersten Mal, anfangs als
              Experiment gedacht, einen Bachata Basic Kurs an. Der Kurs war
              dermaßen erfolgreich, dass noch weitere folgten. Dies war die
              Geburtsstunde von
              <span className="font-bold text-bg-main"> Bachata & More</span>.
            </p>
          </div>
          <div className="order-first md:order-none h-72 relative md:h-full">
            <Image
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              src={aboutus}
              fill
              alt="Bachata Sensual - Oliver und Michaela"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
