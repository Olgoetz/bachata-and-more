import React from "react";
import Image from "next/image";

import workout from "../public/workout.png";
import dance from "../public/dance.jpg";
import bm from "../public/bm.png";

const moreOffer = [
  {
    label: "Workout",
    img: workout,
    alt: "Bachata and More - Workout",
  },
  {
    label: "Dance",
    img: dance,
    alt: "Bachata and More - Dance",
  },
  {
    label: "Body & Mind",
    img: bm,
    alt: "Bachata and More - Body & Mind",
  },
];

const courseDetailsWorkout = [
  {
    label: "Animal Flow",
    description: `Animal Flow is funktionelles, bodengebundenes Ganzköpertraining, das Spaß macht, herausfordernd und effektiv ist. Dieses System wurde entwickelt, um Kraft, Leistung, Flexibilität, Mobilität und Koordination für alle Fitnessbegeisterten zu verbessern.
    Ganz gleich, ob Du alleine trainieren, mit einem Profi trainieren oder an Gruppenkursen teilnehmen möchtest, Animal Flow bietet etwas für jeden Körper!`,
  },
  {
    label: "BAM",
    description: `Entdecke BAM - Body Athletic Move, das ultimative Workout für Kraftausdauer, Cardio und Mobilität! Abwechslungsreiche funktionale Kräftigungs- und Ausdauerübungen im Stand und am Boden garantieren nicht nur ein intensives Training, sondern auch jede Menge Spaß. Begleitet von energiegeladener Musik führt dich Michaela, durch dieses dynamische Workout. Die Übungen werden zu einer FUNctional Choreografie zusammengesetzt, die nicht nur deinen Körper, sondern auch Dein Hirn trainiert. 
      Erlebe den ultimativen Kick von BAM – Fitness war noch nie so mitreißend und gleichzeitig geistig anregend!`,
  },
  {
    label: "365",
    description:
      "3 steht für 3 Runden, 6 für 6 Übungen, 5 für 5 Atemzüge Pause - Ob Functional Training Konzepte, Yoga jeglicher Art, DEEPWORK, HII-Training, Combat Training, Dance Exercises, Pilates oder Strength Training, diese Formel garantiert ein einfaches, kraftvolles und herausragendes Kursformat, das sofort zum Erfolg führen kann.",
  },
  {
    label: "HOT IRON®",
    description: `Das Langhantel-System für die richtigen Formen an den richtigen Stellen - HOT IRON® ist für jeden geeignet, der seinen Körper formen, straffen und schützen möchte. HOT IRON® formt Deine Muskeln an all den richtigen Stellen. 
    Nutze den Kurs als „Booty-Builder“, als „Back-Protector“ oder für andere individuelle Ziele!
      
      3 unterschiedliche Ganzkörper-Kurse mit unterschiedlichen, synergistischen Trainingsreizen geben Deinem Körper und Geist dabei die benötigte Abwechslung, um mit Spaß und Motivation in die beste Form Deines Lebens zu kommen.`,
  },
  {
    label: "Mobility meets HIIT",
    description:
      "High-Intensity-Intervall-Training (HIIT) ist eine Form des Trainings zur maximalen Ausbelastung der Muskulatur, um größtmöglichen Trainingseffekt zu schaffen und vom Nachbrenneffekt zu profitieren. Losgelegt wird mit einer Aktivierung sowie Mobilisierung sämtlicher Gelenke. Im Anschluss folgen Übungen bzw. Übungsabfolgen, mit und ohne Hilfsmittel, welche durch kurze, intensive Belastungsphasen und lohnender Pause gekennzeichnet sind.",
  },
];

const courseDetailsDance = [
  {
    label: "Dance Session",
    description:
      "In diesem Kurs verbinden sich die klassischen Schritte des Aerobic mit verschiedenen Tanzstilen, wie Jazz, House und Hip-Hop und verschmelzen so zu einer genial fließenden Choreographie, die dank ihres durchdachten Aufbaus für jeden leicht zu erlernen ist.",
  },
  {
    label: "Motto Dance",
    description: `Motto Dance Partys - 80er, 90er, Latin - egal welche Musik diese Stunde begleitet, hier steht der Spaß im Vordergrund!
Einfache Schrittkombinationen und verschiedene Level sorgen dafür, dass vom Anfänger bis zum Fortgeschrittenen jeder Freude am Tanzen hat. Mundwinkel nach oben und let’s shake it!`,
  },
];
const courseDetailsBM = [
  {
    label: "Feelgood Yoga/Mobility Flow",
    description: `Genieße eine belebende Yoga-Mobility- Session, die Körper und Geist entspannt aber auch gleichzeitig stärkt. Ein harmonischer Flow, der Deine Energien freisetzt und ein wohliges Gefühl der Ausgeglichenheit hinterlässt.
      Für jedes Level auch absolute Yoga Beginner sind herzlich willkommen`,
  },
  {
    label: "Yoga meets Animal Flow",
    description:
      "In diesem konditionell sowie koordinativ anspruchsvollen Kurs werden Elemente aus dem Yoga und Animal Flow verbunden. Die Übungen werden Schritt für Schritt erarbeitet, wiederholt und schlussendlich kombiniert. Das Ergebnis ist ein harmonischer Flow zu passender Musik, welcher zwei Konzepte vereint.",
  },
  {
    label: "DAYO",
    description: `Kopf aus Herz an! Ruhige fliessende Bewegungen, die dich zum fühlen zurück bringen. Perfektion weg, Leistungsdruck weg und fühlen was das Zeug hält, vor allem sich (gut) fühlen. Einfach mal machen - könnte ja gut werden!
Für diese Stunde brauchst Du weder Vorkenntnisse im Yoga noch im Tanz, hier kann jeder folgen!`,
  },
  {
    label: "Happy Hips",
    description: `Eine gut ausgeprägte Hüftmobilität bzw. -beweglichkeit ist essentiell für das perfekte Durchführen z. B. Kniebeugen. Leider trägt die typische Schreibtisch-Sitzposition nicht positiv zu einer Hüftmobilität. Bei sitzender Tätigkeit verkümmert der Hüftbeuger, die Gesäßmuskulatur erschlafft und die eigentliche Funktion der Hüfte wird “deaktiviert”. 
    In dieser Einheit werden diverse Übungen, um die Beweglichkeit sowie Mobilität in der Hüfte nachhaltig zu verbessern, ausgeführt. Die Übungen werden sukzessive erarbeitet und zu einem kleinen Flow zusammengestellt.`,
  },
];
function More() {
  return (
    <div id="more" className="py-16 bg-black">
      <div className="container px-4 mx-auto">
        <h2 className="text-5xl text-bm-main font-bold">More</h2>

        <div className="leading-10 py-10">
          <p className="text-white">
            Mit &quot;More&quot; decken wir Kurse aus den bekannten
            Groupfitnessbereichen <strong>Workout, Dance, Body & Mind </strong>{" "}
            ab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center ">
          <div className="card  bg-slate-200 shadow-xl">
            <Image src={workout} alt="Bachata and More - Workout Angebot" />
            <div className="card-body items-center text-center">
              <h2 className="card-title">Workout</h2>
            </div>
          </div>
          <div className="flex flex-col justify-start h-full  gap-y-2">
            {courseDetailsWorkout.map((e) => (
              <div
                key={e.label}
                className="collapse collapse-plus bg-slate-200"
              >
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                  {e.label}
                </div>
                <div className="collapse-content whitespace-pre-line">
                  <p>{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider divider-neutral"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          <div className="card w-full  bg-slate-200 shadow-xl">
            <Image src={dance} alt="Bachata and More - Dance Angebot" />
            <div className="card-body items-center text-center">
              <h2 className="card-title">Dance</h2>
            </div>
          </div>
          <div className="flex flex-col justify-start h-full gap-y-2">
            {courseDetailsDance.map((e) => (
              <div
                key={e.label}
                className="collapse collapse-plus bg-slate-200"
              >
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                  {e.label}
                </div>
                <div className="collapse-content whitespace-pre-line">
                  <p>{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider divider-neutral"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          <div className="card w-full  bg-slate-200 shadow-xl">
            {/* {moreOffer.map((e) => (
              <div
                key={e.label}
                className="card w-full  bg-slate-200 shadow-xl"
              >
                <Image src={e.img} alt={e.alt} />
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{e.label}</h2>
                </div>
              </div>
            ))} */}

            <Image src={bm} alt="Bachata and More - Body and Mind Angebot" />
            <div className="card-body items-center text-center">
              <h2 className="card-title">Body & Mind</h2>
            </div>
          </div>
          <div className="flex flex-col justify-start h-full gap-y-2">
            {courseDetailsBM.map((e) => (
              <div
                key={e.label}
                className="collapse collapse-plus bg-slate-200"
              >
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                  {e.label}
                </div>
                <div className="collapse-content whitespace-pre-line">
                  <p>{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="pt-14 ">
          <div className="space-y-4">
            <h3 className="text-white text-4xl uppercase mb-6">Workout</h3>
            {courseDetailsWorkout.map((e) => (
              <div
                key={e.label}
                className="collapse collapse-plus bg-slate-200"
              >
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                  {e.label}
                </div>
                <div className="collapse-content whitespace-pre-line">
                  <p>{e.description}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="my-10" />

          <div className="space-y-4">
            <h3 className="text-white text-4xl uppercase mb-6">Dance</h3>
            {courseDetailsDance.map((e) => (
              <div
                key={e.label}
                className="collapse collapse-plus bg-slate-200"
              >
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                  {e.label}
                </div>
                <div className="collapse-content whitespace-pre-line">
                  <p>{e.description}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="my-10" />

          <div className="space-y-4">
            <h3 className="text-white text-4xl uppercase mb-6">Body & Mind</h3>
            {courseBM.map((e) => (
              <div
                key={e.label}
                className="collapse collapse-plus bg-slate-200"
              >
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                  {e.label}
                </div>
                <div className="collapse-content whitespace-pre-line">
                  <p>{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
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

export default More;
