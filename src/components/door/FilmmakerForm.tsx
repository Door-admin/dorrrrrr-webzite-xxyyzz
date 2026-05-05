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
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  shootType: z.string().min(1, "Select a shoot type"),
  location: z.string().trim().min(1, "Location required").max(200),
  dates: z.string().trim().max(100).optional().or(z.literal("")),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});

export function FilmmakerForm({ onSuccess }: { onSuccess: () => void }) {
  const [shootType, setShootType] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      shootType,
      location: String(fd.get("location") || ""),
      dates: String(fd.get("dates") || ""),
      notes: String(fd.get("notes") || ""),
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
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" maxLength={100} required />
      </div>
      <div className="grid gap-2 md:grid-cols-2 md:gap-5">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" maxLength={255} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" name="phone" type="tel" maxLength={30} />
        </div>
      </div>
      <div className="grid gap-2">
        <Label>Type of shoot</Label>
        <Select value={shootType} onValueChange={setShootType}>
          <SelectTrigger>
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="film">Film</SelectItem>
            <SelectItem value="ad">Ad</SelectItem>
            <SelectItem value="photoshoot">Photoshoot</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2 md:grid-cols-2 md:gap-5">
        <div className="grid gap-2">
          <Label htmlFor="location">Location preference</Label>
          <Input id="location" name="location" maxLength={200} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dates">Shoot dates</Label>
          <Input id="dates" name="dates" placeholder="e.g. June 12–15" maxLength={100} />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="notes">Additional notes</Label>
        <Textarea id="notes" name="notes" maxLength={1000} rows={4} />
      </div>
      <Button type="submit" variant="hero" size="lg" disabled={submitting}>
        {submitting ? "Sending…" : "Submit"}
      </Button>
    </form>
  );
}
