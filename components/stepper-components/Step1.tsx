import ClientName from "./step1Field/client-name";
import ProjectCategory from "./step1Field/project-category";
import ProjectDescription from "./step1Field/project-description";
import ProjectEndDate from "./step1Field/project-end-date";
import ProjectName from "./step1Field/project-name";
import ProjectStartDate from "./step1Field/project-start-date";

interface Step1Props {
  purpose: string;
  subtext: string;
}

const Step1 = ({ purpose, subtext }: Step1Props) => {
  return (
    <div className="mt-10">
      <h3 className="font-bold text-xl">{purpose}</h3>
      <p className="text-sm text-gray-500">{subtext}</p>
      <div className="grid grid-cols-2 mt-5 gap-8">
        <div className="mt-4">
          <ProjectName />
          <ProjectDescription />
          <ProjectCategory />
        </div>
        <div className="mt-4">
          <ProjectStartDate />
          <ProjectEndDate />
          <ClientName />
        </div>
      </div>
    </div>
  );
};

export default Step1;
