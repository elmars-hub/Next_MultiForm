import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ClientName() {
  return (
    <div className="mt-[66px]">
      <Label>Client Name (Optional)</Label>

      <Input
        id="clientName"
        className="mt-[5px] h-[52px]"
        placeholder="Enter client name"
      />
    </div>
  );
}
