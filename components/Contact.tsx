"use client";
import React, { useEffect, useRef, useState } from "react";
import { useFormStatus, useFormState } from "react-dom";
import Image from "next/image";

import { sendEmail } from "@/lib/actions";

import contact from "../public/OliyMichi_contact.webp";
import clsx from "clsx";
function Contact() {
  const [formState, formAction] = useFormState(sendEmail, {
    success: false,
    message: "",
  });

  const formRef = useRef<any>();
  const [showToast, setShowToast] = useState<boolean>(false);

  useEffect(() => {
    if (formState.message !== "" && !formState.errors) {
      setShowToast(true);
      const wait = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (formState.success) {
          formRef.current.reset();
        }
        setIsMathCorrect(false);
        setShowToast(false);
      };
      wait();
    }
  }, [formState]);

  // Spam protection
  const mathAnswerRef = useRef<HTMLInputElement>(null);
  const [isMathCorrect, setIsMathCorrect] = useState(false);

  const [mathQuestion, setMathQuestion] = useState({
    num1: 0,
    num2: 0,
    answer: 0,
  });
  useEffect(() => {
    // Generate a simple math question
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setMathQuestion({ num1, num2, answer: num1 + num2 });
  }, []);
  const handleMathAnswerChange = () => {
    const userAnswer = parseInt(mathAnswerRef?.current?.value ?? "0", 10);
    console.log(userAnswer);
    setIsMathCorrect(userAnswer === mathQuestion.answer);
  };

  return (
    <div className="py-16 bg-black " id="kontakt">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-bm-main font-bold">Kontakt</h2>
        <p className="text-white py-5 text-2xl">
          Wir freuen uns auf Deine Anfrage!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 w-full justify-between ">
          <div className="relative h-full">
            <Image
              className="rounded-lg object-cover"
              src={contact}
              fill
              alt="Bachata Sensual - Oliver und Michaela"
            />
          </div>
          <form ref={formRef} action={formAction}>
            <div className="flex flex-col gap-y-6">
              <label className="form-control w-full  max-w-lg">
                <div className="label pt-0">
                  <span className="text-lg text-white">Name</span>
                </div>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered text-white w-full max-w-lg"
                />
                {formState?.errors && (
                  <p className="label text-sm text-red-400">
                    {formState.errors.name}
                  </p>
                )}
              </label>

              <label className="form-control  w-full max-w-lg">
                <div className="label">
                  <span className="text-lg text-white">Email</span>
                </div>
                <input
                  type="text"
                  name="email"
                  className="input input-bordered text-white w-full max-w-lg"
                />
                {formState?.errors && (
                  <p className="label text-sm text-red-400">
                    {formState.errors.email}
                  </p>
                )}
              </label>
              <label className="form-control  w-full max-w-lg">
                <div className="label">
                  <span className="text-lg text-white">Nachricht</span>
                </div>
                <textarea
                  className="textarea textarea-bordered text-white h-24"
                  name="message"
                  placeholder="Nachricht"
                ></textarea>
                {formState?.errors && (
                  <p className="label text-sm text-red-400">
                    {formState.errors.message}
                  </p>
                )}
              </label>
              <p className=" max-w-lg  text-sm text-white">
                Mit der Nutzung dieses Kontaktformulars stimmst du unserer{" "}
                <a href="/datenschutz" className="text-bm-main">
                  Datenschutzerklärung
                </a>{" "}
                zu. Wir nutzen deine Daten ausschließlich zur Beantwortung
                deiner Anfrage.
              </p>
              <label className="form-control  w-full max-w-lg">
                <div className="label">
                  <span className="text-sm text-white">
                    Was ist {mathQuestion.num1} + {mathQuestion.num2}?
                  </span>
                </div>
                <input
                  type="text"
                  name="mathAnswer"
                  ref={mathAnswerRef}
                  onChange={handleMathAnswerChange}
                  className="input input-bordered text-sm text-white w-20"
                />
              </label>
              <SubmitButton spamProtection={isMathCorrect} />
            </div>
          </form>
          {showToast && (
            <div className="toast z-[10000]">
              <div
                className={clsx(
                  "alert",
                  formState.success ? "alert-success" : "alert-error"
                )}
              >
                <span>{formState.message}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;

const SubmitButton = ({ spamProtection }: { spamProtection: boolean }) => {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      className="btn disabled:bg-gray-800 max-w-lg mt-2"
      disabled={status.pending || !spamProtection}
    >
      {status.pending && <span className="loading loading-spinner" />}
      Abschicken
    </button>
  );
};
