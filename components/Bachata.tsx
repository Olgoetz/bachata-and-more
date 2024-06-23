import React from "react";
import Image from "next/image";
import Teaser from "@/components/Teaser";
import bachata from "../public/OliyMichi_bachata.webp";
import bachata2 from "../public/OliyMichi_bachata2.jpg";
import bachata3 from "../public/OliyMichi_bachata3.jpg";
import bachata4 from "../public/OliyMichi_bachata4.jpg";

const bachataOffer = [
  {
    image: bachata2,
    label: "Kurs",
    content: `Möchtest Du die Leidenschaft und das Feuer des Bachata tanzen lernen? Dann bist Du bei uns genau richtig! In unserem Kurs tauchst Du ein in die Welt des Bachata und lernst erstmal die grundlegenden Schritte und Techniken dieses sinnlichen Tanzes. Wir beginnen mit den Basics – Schrittfolgen, Rhythmusgefühl und einfache Figuren. Ergänze Deine Schritte mit stilvollen Bewegungen und Techniken, um Deinen Tanz einzigartig zu machen. Egal, ob Du Anfänger bist oder schon Vorkenntnisse hast, unser Kurs bietet für jedes Niveau passende Herausforderungen. 
    Du brauchst keinen festen Tanzpartner mitzubringen – wir wechseln regelmäßig die Partner, damit Du verschiedene Tanzstile und Techniken kennenlernst. Tanzen macht am meisten Spaß in einer freundlichen und unterstützenden Umgebung. 
    
    Bei uns findest Du beides!`,
  },
  {
    image: bachata3,
    label: "Sensual Nigth/Evening",
    content: `Sensual Evenings sind Übungsabende, in denen erlernte Schritte und Figuren angwendet werden. Den Abschluss des Events bildet eine Sensual Night zu den besten Bachata Beats. Jetzt wird es Zeit die Bachata Skills auf die Tanzfläche zu bringen. 
      
    Partnerwechsel ist selbstverständlich möglich und auch gewollt.`,
  },
  {
    image: bachata4,
    label: "Privat/Workshop",
    content: `Möchtest Du Deine Bachata-Fähigkeiten gezielt und intensiv verbessern? Dann ist unsere private 1:1 Betreuungsstunde genau das Richtige für Dich! Hier gehen wir individuell auf Deine Bedürfnisse und Wünsche ein. Egal, ob Du an Deiner Technik arbeiten, neue Figuren lernen oder Dein Styling verbessern möchtest – wir richten uns ganz nach Deinen Zielen.
      
    Tanzen soll vor allem Spaß machen! Unsere privaten Stunden sind entspannt und motivierend, damit Du Dich wohlfühlst und Freude am Lernen hast.`,
  },
];
function Bachata() {
  return (
    <div id="bachata" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-5xl text-bm-main font-bold">Bachata</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
          <div className="leading-10">
            <p className="">
              Nichts ist derzeit mehr im Trend als Bachata. Bachata stammt
              ursprünglich aus der Dominikanischen Republik und hat mittlerweile
              eine sehr große Community in Europa. Es gibt verschiedene Formen
              des Bachatas. Wir fokussieren uns auf den Stil{" "}
              <strong>&quot;Bachata Sensual&quot;</strong>. Dieser ist geprägt
              von tendenziell langsamerer Musik und somit einfach zu Erlernen.
            </p>
            <p>
              Wir möchten unsere große Leidenschaft unbedingt an euch
              weitergeben und zeigen wieviel Spaß und Freude dieser Tanz bringt.
              Erlebe die Faszination der Bachata mit uns. Egal, ob Du Anfänger
              bist oder bereits erste Schritte kennst, unser Kurs bietet Dir die
              perfekte Gelegenheit, Deine Tanzfähigkeiten zu verbessern und vor
              allem Spaß in einer Komplett ungezwungenen Atmosphäre zu haben.
              Komm vorbei und lass Dich von der Musik und den Bewegungen
              mitreißen. Wir freuen uns darauf, gemeinsam mit Dir zu tanzen!
            </p>
          </div>
          <div className="hidden md:block relative h-full">
            <Image
              className="rounded-lg object-cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              src={bachata}
              alt="Bachata Sensual - Oliver und Michaela"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-around">
          {bachataOffer.map((e) => (
            <div
              key={e.label}
              className="card card-compact w-full bg-slate-50 shadow-xl"
            >
              <Image
                src={e.image}
                alt="Bachata Sensual - Oliver und Michaela"
              />
              <div className="card-body">
                <h2 className="card-title">{e.label}</h2>
                <p className="whitespace-pre-line">{e.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="space-y-3">
          <div className="collapse collapse-plus bg-slate-50">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">Kurs</div>
            <div className="collapse-content">
              <p></p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-slate-50">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Sensual Night/Evening
            </div>
            <div className="collapse-content">
              <p>
                Sensual Evenings sind Übungsabende, in denen erlernte Schritte
                und Figuren angwendet werden. Den Abschluss des Events bildet
                eine 3-stündige Sensual Night zu den besten Bachata Beats. Jetzt
                wird es Zeit die Bachata Skills auf die Tanzfläche zu bringen.
                Partnerwechsel ist selbstverständlich möglich.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-slate-50">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Privat/Workshop
            </div>
            <div className="collapse-content">
              <p>
                In einer Privatstunde betreuen wir euch 1 zu 1. Sie geben euch
                wertvolle Tipps zur Technik, Haltung sowie zur Verbesserung
                eurer Musikalität. Desweiteren zeigen wir euch die oder andere
                etwas fortgeschrittenere Figur.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Bachata;
