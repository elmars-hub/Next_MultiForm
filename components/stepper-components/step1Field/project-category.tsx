import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { IconType } from "react-icons";
import {
  FaChartLine,
  FaCode,
  FaHardHat,
  FaGraduationCap,
  FaHeart,
} from "react-icons/fa";

type Category =
  | "Marketing"
  | "Software Development"
  | "Construction"
  | "Education"
  | "Healthcare";

type SelectedItemType = {
  label: Category;
  icon: IconType;
};

export const selectedItems: SelectedItemType[] = [
  { label: "Marketing", icon: FaChartLine },
  { label: "Software Development", icon: FaCode },
  { label: "Construction", icon: FaHardHat },
  { label: "Education", icon: FaGraduationCap },
  { label: "Healthcare", icon: FaHeart },
];

export default function ProjectCategory() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    "Software Development"
  );

  function onValueChange(value: string) {
    const selectedItem = selectedItems.find((item) => item.label === value);
    if (selectedItem) {
      setSelectedCategory(selectedItem.label);
    }
  }
  return (
    <div className="">
      <Label htmlFor="project-category" className="text-gray-600 mb-2">
        Project Category
      </Label>

      <Select value={selectedCategory} onValueChange={onValueChange}>
        <SelectTrigger className="w-full h-14 mt-1">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>

        <SelectContent className="poppins">
          {selectedItems.map((item) => (
            <SelectItem key={item.label} value={item.label}>
              <div className="flex items-center gap-2">
                {/* Icon */}
                <div className="bg-primary/10 size-8 rounded-md flex items-center justify-center">
                  <item.icon className="text-primary/45" />
                </div>
                {/* label */}
                <span className="">{item.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
