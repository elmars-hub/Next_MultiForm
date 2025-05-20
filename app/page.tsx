"use client";

import { FaArrowLeft } from "react-icons/fa";
import { Button } from "../components/ui/button"; // Fixed import path
import { steps } from "../components/StepperData"; // Fixed import path
import React, { useState } from "react";
import Stepper from "@/components/Stepper/stepper";

const BUTTON_LABELS = {
  BACK: "Back",
  NEXT: "Next",
  SUBMIT: "Launch Project",
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep < steps.length - 1;

  function handleNext() {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  }

  function handleBack() {
    if (currentStep >= 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  return (
    <div className="poppins px-20">
      <Stepper steps={steps} currentStep={currentStep} />

      <div className="step-content">{steps[currentStep].content}</div>

      <div className="flex items-center justify-end p-4 gap-4">
        <Button
          disabled={isFirstStep}
          variant={"ghost"}
          className="p-2 cursor-pointer"
          onClick={handleBack}
        >
          <FaArrowLeft />
          <span>{BUTTON_LABELS.BACK}</span>
        </Button>

        {isLastStep ? (
          <Button className="p-7 cursor-pointer" onClick={handleNext}>
            {BUTTON_LABELS.NEXT}
          </Button>
        ) : (
          <Button
            className="p-7 cursor-pointer"
            onClick={() => alert("Project Launched!")}
          >
            {BUTTON_LABELS.SUBMIT}
          </Button>
        )}
      </div>
    </div>
  );
}
