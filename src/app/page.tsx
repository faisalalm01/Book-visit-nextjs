/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from "react";
import Experience from "./Experience/page";
import VisitorDetail from "./VisitorDetail/page";
import Verification from "./Verification/page";
import Image from "next/image";
import RedirectPage from "./Redirect/page";

export default function Home() {
  const [step, setStep] = useState<number>(1);

  const handleNextStep = () => {
    if (step <= 3) {
      setStep(step + 1);
    }
  };

  let stepContent;
  if (step === 1) {
    stepContent = <VisitorDetail onNextStep={handleNextStep} />;
  } else if (step === 2) {
    stepContent = <Experience onNextStep={handleNextStep} />;
  } else if (step === 3) {
    stepContent = <Verification onNextStep={handleNextStep} />;
  } else {
    stepContent = <RedirectPage />;
  }

  return (
    <main className="relative overflow-hidden font-inter">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("/Sky.png")' }}
      ></div>
      <div
        className="absolute inset-0 z-10 bg-cover"
        style={{ backgroundImage: 'url("/surf hero 1.png")' }}
      ></div>
      <div className="z-20 relative items-center justify-center flex mt-10">
        <Image src={"Logo.svg"} alt="SVG Icon" width={100} height={100} />
      </div>
      <div className="relative flex h-fit z-20 bottom-10 container mx-auto">
        <div className="flex my-16 border-2 shadow-2xl w-full mx-5 lg:mx-36">
          <div className="md:w-5/12 hidden md:inline-block">
            <img src="Frame 15.png" alt="" className="h-full" />
          </div>
          <div className="lg:w-7/12 w-full bg-black">
            <div className="lg:h-full px-10 lg:px-12 py-10 lg:py-12 justify-center items-center">
              {step > 3 ? (
                <>
                  <h1 className="font-thin text-white text-3xl lg:text-5xl my-5 font-bodoni-moda">
                    Thank you. Name
                  </h1>
                </>
              ) : (
                <>
                  <h1 className="text-white font-semibold text-2xl lg:text-5xl lg:my-5 font-bodoni-moda">
                    Book Your Visit
                  </h1>
                  <p className="uppercase text-xs text-white mb-5 lg:mb-5">
                    {step}/3: visitor detail
                  </p>
                </>
              )}
              {stepContent}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
