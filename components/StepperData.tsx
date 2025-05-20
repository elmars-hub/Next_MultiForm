import { FaMoneyBillWave, FaProjectDiagram } from "react-icons/fa";
import Step1 from "./stepper-components/Step1";
import Step2 from "./stepper-components/Step2";
import Step3 from "./stepper-components/Step3";
import Step4 from "./stepper-components/Step4";
import Step5 from "./stepper-components/Step5";
import { RiSpaceShipFill, RiTeamFill } from "react-icons/ri";
import { LuMilestone } from "react-icons/lu";
import { Step } from "./Stepper/stepper";

export const steps: Step[] = [
  {
    icon: FaProjectDiagram,
    label: "Project Overview",
    content: <Step1 />,
  },
  {
    icon: RiTeamFill,
    label: "Team & Roles",
    content: <Step2 />,
  },
  {
    icon: LuMilestone,
    label: "Task & Milestones",
    content: <Step3 />,
  },
  {
    icon: FaMoneyBillWave,
    label: "Project Overview",
    content: <Step4 />,
  },
  {
    icon: RiSpaceShipFill,
    label: "Lunch Project",
    content: <Step5 />,
  },
];
