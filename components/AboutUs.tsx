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
              <span className="font-bold">Michi</span> ist seit über 20 Jahren
              in der Fitnessbranche tätig und teilt seither ihre Leidenschaft in
              Group Fitnesskursen und im Personaltraining (
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
              ). Zudem ist sie Referentin und Ausbilderin für die IFAA. Sie ist
              als Top-Expertin für ROBINSON Clubs unterwegs und organisiert auch
              Ihre eigene Events und Camps für Fitness/Yoga in Verbindung mit
              Kitesurfen oder Wandern und Klettern. Ihr Ziel ist es, Menschen zu
              motivieren, Sportarten, Aktivitäten oder Kurse auszuprobieren, die
              sie sich vielleicht nie zugetraut hätten. Mit Michi an Deiner
              Seite kannst Du sicher sein, dass Sie dich motiviert die
              Mundwinkel nach oben zu ziehen und Du eine tolle Zeit haben wirst
            </p>
            <p>
              <span className="font-bold"> Oli</span> hat einen Masterabschluss
              in Wirtschaftsinformatik von Universtitä zu Kölnt und
              Bachelorabschluss in Sportmanagement von der Deutschen
              Sporthochschule. Er ist über 10 Jahre im Fitness Bereich tätig,
              absolvierte zahlreiche Ausbildungen (z.B. HOT IRON®, Indoor
              Cycling, DEEPWORK, 365, Animal Flow, Step & Aerobic) und bildet
              regelmäßig für IFHIAS (
              <a
                className="italic hover:underline"
                href="https://experts-united.world/de/institut/referenten/oliver-goetz.html"
                target="_blank"
                rel="noreferrer"
              >
                www.experts-united.world
              </a>
              ) aus. Seit Jahren ist er als Top-Experte für ROBINSON Clubs
              unterwegs und bildet auch Mitarbeiter vor Ort aus.
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
