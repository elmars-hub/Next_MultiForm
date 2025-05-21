import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { MdError } from "react-icons/md";

export default function ProjectDescription() {
  const [description, setDescription] = useState("");
  const maxLength = 135;

  return (
    <div className="mb-6 mt-4">
      <Label htmlFor="project-description" className="text-gray-600">
        Project Description
      </Label>

      <Textarea
        value={description}
        id="projectDescription"
        placeholder="Enter your project description"
        className="h-12 mt-2 resize-none"
      />

      <div className="flex justify-between mt-1">
        <div className="text-red-500 text-sm flex items-center gap-2">
          <MdError />
          <span>error</span>
        </div>

        <div className="text-gray-500 text-sm mt-1">
          {description.length}/{maxLength} characters
        </div>
      </div>
    </div>
  );
}
