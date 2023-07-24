import MichiYOli from "../../public/images/MichiyOli_bachata.webp";
import React from "react";
import Image from "next/legacy/image";

import Accordion from "../ui/Accordion";
const Bachata = ({ bachata }) => {
  return (
    <>
      <div id="bachata" className="w-full bg-white py-16 px-4">
        <div className="max-w-[1024px] pt-10 mx-auto ">
          <div className="grid md:grid-cols-2 md:gap-x-3">
            <div className="flex flex-col justify-center">
              <p className="text-xl uppercase font-bold text-[#FFC08E]">
                BACHATA
              </p>
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                Bachata Sensual
              </h1>

              <p className="text-justify">
                Nichts ist derzeit mehr im Trend als Bachata. Bachata stammt
                ursprünglich aus der Dominikanischen Republik und hat
                mittlerweile eine sehr große Community in Europa. Es gibt
                verschiedene Formen des Bachatas. Wir fokussieren uns auf den
                Stil &quot;Bachata Sensual&quot;. Dieser ist geprägt von
                tendenziell langsamerer Musik und somit einfach zu Erlernen.
                Sinnlichkeit und Figuren wie Bodywaves oder Headrolls sind
                charakteristisch und betonen die Körperlichkeit von Mann und
                Frau. Wir möchten unsere Leidenschaft an euch weitergeben. Wir
                bieten Bachatakurse inklusive täglicher Übungungsabende sowie
                einen fulminanten 3-stündigen Abschlussabend an.
              </p>
            </div>
            <div className="flex flex-col justify-center my-4">
              <Image
                className="mx-auto my-4"
                src={MichiYOli}
                alt="Michi-und-Oli_BachataSensual"
              />
            </div>
          </div>

          <div className="text-justify mx-auto grid gap-y-1 md:grid-cols-3 md:gap-x-3 my-3">
            {bachata.map((b) => (
              <Accordion
                key={b.id}
                title={b.name}
                content={b.description}
                styling="bg-gray-100 rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bachata;
