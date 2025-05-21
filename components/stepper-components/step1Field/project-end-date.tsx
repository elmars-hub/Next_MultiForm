import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { format } from "date-fns";

function getNextDay() {
  const today = new Date();
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);

  nextDay.setHours(0, 0, 0, 0); // Set time to midnight
  return nextDay;
}

export default function ProjectEndDate() {
  const [startDate, setStartDate] = useState<Date | undefined>(getNextDay());

  const isDateDisabled = (date: Date) => {
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleSelectDate = (date: Date | undefined) => {
    if (date) {
      setStartDate(date);
    }
  };

  return (
    <div className="">
      <Label className="text-gray-500">Start Date</Label>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal h-12 mt-1"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {startDate ? (
              format(startDate, "PPP")
            ) : (
              <span>Pick a start date</span>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0 poppins">
          <Calendar
            className="w-full"
            mode="single"
            selected={startDate}
            disabled={isDateDisabled}
            onSelect={handleSelectDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
