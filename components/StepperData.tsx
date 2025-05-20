import { FaMoneyBillWave, FaProjectDiagram } from "react-icons/fa";
import Step1 from "./stepper-components/Step1";
import Step2 from "./stepper-components/Step2";
import Step3 from "./stepper-components/Step3";
import Step4 from "./stepper-components/Step4";
import Step5 from "./stepper-components/Step5";
import { RiSpaceShipFill, RiTeamFill } from "react-icons/ri";
import { LuMilestone } from "react-icons/lu";
import { Step } from "./Stepper/stepper";

export const stepData = {
  step1: {
    purpose: "Define the purpose of your project.",
    subtext: "Please provide a brief description of your project.",
  },
  step2: {
    purpose: "Assign roles and responsibilities.",
    subtext: "Add team members and assign roles to each member.",
  },
  step3: {
    purpose: "Define tasks and milestones.",
    subtext: "Add tasks and milestones to your project.",
  },
  step4: {
    purpose: "Define the budget and resources.",
    subtext: "Add the budget and resources for your project.",
  },
  step5: {
    purpose: "Launch your project.",
    subtext: "Review and launch your project.",
  },
};

export const steps: Step[] = [
  {
    purpose: stepData.step1.purpose,
    subtext: stepData.step1.subtext,
    icon: FaProjectDiagram,
    label: "Project Overview",
    content: (
      <Step1
        purpose={stepData.step1.purpose}
        subtext={stepData.step1.subtext}
      />
    ),
  },
  {
    purpose: stepData.step2.purpose,
    subtext: stepData.step2.subtext,
    icon: RiTeamFill,
    label: "Team & Roles",
    content: (
      <Step2
        purpose={stepData.step2.purpose}
        subtext={stepData.step2.subtext}
      />
    ),
  },
  {
    purpose: stepData.step3.purpose,
    subtext: stepData.step3.subtext,
    icon: LuMilestone,
    label: "Task & Milestones",
    content: (
      <Step3
        purpose={stepData.step3.purpose}
        subtext={stepData.step3.subtext}
      />
    ),
  },
  {
    purpose: stepData.step4.purpose,
    subtext: stepData.step4.subtext,
    icon: FaMoneyBillWave,
    label: "Project Overview",
    content: (
      <Step4
        purpose={stepData.step4.purpose}
        subtext={stepData.step4.subtext}
      />
    ),
  },
  {
    purpose: stepData.step5.purpose,
    subtext: stepData.step5.subtext,
    icon: RiSpaceShipFill,
    label: "Lunch Project",
    content: (
      <Step5
        purpose={stepData.step5.purpose}
        subtext={stepData.step5.subtext}
      />
    ),
  },
];
