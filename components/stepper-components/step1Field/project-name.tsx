import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdError } from "react-icons/md";

export default function ProjectName() {
  return (
    <div className="mb-4">
      <Label htmlFor="project-name" className="text-gray-600">
        Project Name
      </Label>

      <Input
        className="h-12 mt-1"
        placeholder="Enter project name"
        id="projectName"
      />

      <div className="text-red-500 text-sm mt-1 flex item-center gap-2 mt-2">
        <MdError />
        <span>error</span>
      </div>
    </div>
  );
}
