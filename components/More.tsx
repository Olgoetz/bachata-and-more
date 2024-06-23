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
    description:
      "Ein funktionelles Ganzkörpertraining. Es ist ein Konzept, das Bewegungen aus verschiedenen Körpergewichtstrainingsdisziplinen miteinander kombiniert und in einem übersichtlich strukturiertem System organisiert. Das Training findet ohne jegliche Hilfsmittel auf dem Boden statt. Der Fokus liegt auf einfache Bewegungen.",
  },
  {
    label: "BAM",
    description:
      "Body Atletic Moves - Athletische Cardio- und Kraftübungen werden sinnvoll in eine Übungsabfolge integriert.",
  },
  {
    label: "365",
    description:
      "3 steht für 3 Runden, 6 für 6 Übungen, 5 für 5 Atemzüge Pause - Ob Functional Training Konzepte, Yoga jeglicher Art, DEEPWORK, HII-Training, Combat Training, Dance Exercises, Pilates oder Strength Training, diese Formel garantiert ein einfaches, kraftvolles und herausragendes Kursformat, das sofort zum Erfolg führen kann.",
  },
  {
    label: "HOT IRON®",
    description:
      "Das Langhantel-System für die richtigen Formen an den richtigen Stellen. HOT IRON® ist für jeden geeignet, der seinen Körper formen, straffen und schützen möchte. HOT IRON® formt Deine Muskeln an all den richtigen Stellen. Nutze den Kurs als „Booty-Builder“, als „Back-Protector“ oder für andere individuelle Ziele! 3 unterschiedliche Ganzkörper-Kurse mit unterschiedlichen, synergistischen Trainingsreizen geben Deinem Körper und Geist dabei die benötigte Abwechslung, um mit Spaß und Motivation in die beste Form Deines Lebens zu kommen.",
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
    description:
      "Bei Motto Dance wird zu klassischer Musik bspw. aus den 80er oder 90er getanzt. Mit einfachen Schritten entsteht eine ganze Choreographie, die für jeden leicht zu erlernen ist. Kostüme sind herzlich willkommen.",
  },
];
const courseBM = [
  {
    label: "Yoga",
    description:
      "Hier erlebst Du fließende und dynamische Asanas und Bewegungen, die zugleich kräftigend und entspannend wirken. Das Ganze zu passender Musik.",
  },
  {
    label: "Yoga meets Animal Flow",
    description:
      "In diesem konditionell sowie koordinativ anspruchsvollen Kurs werden Elemente aus dem Yoga und Animal Flow verbunden. Die Übungen werden Schritt für Schritt erarbeitet, wiederholt und schlussendlich kombiniert. Das Ergebnis ist ein harmonischer Flow zu passender Musik, welcher zwei Konzepte vereint.",
  },
  {
    label: "DAYO",
    description:
      "Dance Yoga ist für den Geist und die Seele - Vermischung von Yoga Asanas und einfachen Tanzschritten zu einer wunderschönen Choreographie.",
  },
];
function More() {
  return (
    <div id="bachata" className="py-16 bg-black">
      <div className="container px-4 mx-auto">
        <h2 className="text-5xl text-bm-main font-bold">More</h2>

        <div className="leading-10 py-10">
          <p className="text-white">
            Mit &quot;More&quot; decken wir Kurse aus den bekannten
            Groupfitnessbereichen <strong>Workout, Dance, Body & Mind </strong>{" "}
            ab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
          {/* <figure className="px-10 pt-10">
              <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
              />
              </figure> */}
          {moreOffer.map((e) => (
            <div key={e.label} className="card w-full  bg-slate-200 shadow-xl">
              <Image src={e.img} alt={e.alt} />
              <div className="card-body items-center text-center">
                <h2 className="card-title">{e.label}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-14 ">
          <div className="space-y-4">
            <h3 className="text-white text-4xl uppercase mb-6">Workout</h3>
            {courseDetailsWorkout.map((e) => (
              <div
                key={e.label}
                className="collapse collapse-plus bg-slate-200"
              >
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  {e.label}
                </div>
                <div className="collapse-content">
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
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  {e.label}
                </div>
                <div className="collapse-content">
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
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  {e.label}
                </div>
                <div className="collapse-content">
                  <p>{e.description}</p>
                </div>
              </div>
            ))}
          </div>
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

export default More;
