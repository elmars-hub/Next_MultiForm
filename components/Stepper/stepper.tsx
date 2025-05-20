"use client";

import { IconType } from "react-icons";

export type Step = {
  icon: IconType;
  label: string;
  content: React.ReactNode;
  purpose?: string;
  subtext?: string;
};

const Stepper = ({
  steps,
  currentStep,
}: {
  steps: Step[];
  currentStep: number;
}) => {
  console.log(steps, currentStep);
  return (
    <div className="flex items-center justify-center p-3">
      <div className="border rounded-lg flex justify-center items-center p-2">
        {steps.map((step, index) => (
          <div className="flex items-center p-3 gap-2" key={index}>
            <StepIndicator icon={step.icon} isActive={currentStep === index} />

            {currentStep === index && (
              <StepLabel label={step.label} stepNumber={index + 1} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;

function StepLabel({
  label,
  stepNumber,
}: {
  label: string;
  stepNumber: number;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-[13px] font-medium text-primary">
        STEP {stepNumber}
      </span>
      <span className="font-bold">{label}</span>
    </div>
  );
}

function StepIndicator({
  icon: Icon,
  isActive,
}: {
  icon: IconType;
  isActive: boolean;
}) {
  return (
    <div
      className={`p-3 rounded-full  ${
        isActive ? "bg-primary/10" : "border-gray-100"
      }`}
    >
      <Icon className={`${isActive ? "text-primary" : "text-gray-400"}`} />
    </div>
  );
}
