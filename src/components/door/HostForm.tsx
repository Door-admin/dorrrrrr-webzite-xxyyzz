import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(1, "Phone required").max(30),
  propertyType: z.string().min(1, "Select a property type"),
  location: z.string().trim().min(1, "Location required").max(200),
  description: z.string().trim().min(1, "Describe your space").max(1000),
});

export function HostForm({ onSuccess }: { onSuccess: () => void }) {
  const [propertyType, setPropertyType] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      propertyType,
      location: String(fd.get("location") || ""),
      description: String(fd.get("description") || ""),
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-2">
        <Label htmlFor="hname">Name</Label>
        <Input id="hname" name="name" maxLength={100} required />
      </div>
      <div className="grid gap-2 md:grid-cols-2 md:gap-5">
        <div className="grid gap-2">
          <Label htmlFor="hemail">Email</Label>
          <Input id="hemail" name="email" type="email" maxLength={255} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hphone">Phone</Label>
          <Input id="hphone" name="phone" type="tel" maxLength={30} required />
        </div>
      </div>
      <div className="grid gap-2 md:grid-cols-2 md:gap-5">
        <div className="grid gap-2">
          <Label>Property type</Label>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger>
              <SelectValue placeholder="Select one" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="warehouse">Warehouse / Studio</SelectItem>
              <SelectItem value="commercial">Commercial space</SelectItem>
              <SelectItem value="outdoor">Outdoor / Land</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hlocation">Location</Label>
          <Input id="hlocation" name="location" maxLength={200} required />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="himages">Upload images (optional)</Label>
        <Input id="himages" name="images" type="file" accept="image/*" multiple />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="hdesc">Description of the space</Label>
        <Textarea id="hdesc" name="description" maxLength={1000} rows={4} required />
      </div>
      <Button type="submit" variant="hero" size="lg" disabled={submitting}>
        {submitting ? "Sending…" : "Submit"}
      </Button>
    </form>
  );
}
