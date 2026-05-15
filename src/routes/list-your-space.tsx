import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header, Footer } from "./index";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { HostForm } from "@/components/door/HostForm";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/list-your-space")({
  head: () => ({
    meta: [
      { title: "List Your Space , DOOR" },
      { name: "description", content: "Turn your space into a story-ready location for filmmakers, photographers, brands, and production teams." },
    ],
  }),
  component: ListPage,
});

function ListPage() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Toaster />
      <Header />
      <section className="px-6 pt-20 pb-28 md:px-10 md:pt-28">
        <div className="mx-auto max-w-4xl">
          <div className="border-l-4 border-primary pl-6 md:pl-8">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Turn your space into a <span className="text-primary/80">story-ready location</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Homes, cafés, studios, offices, rooftops, and unique properties can become creative spaces for filmmakers, photographers, brands, and production teams.
            </p>
          </div>
          <p className="mt-12 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            DOOR helps property owners showcase spaces with creative potential and connect with verified creative requirements.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm font-medium">
            <button onClick={() => { setSubmitted(false); setOpen(true); }} className="rounded-full bg-foreground px-6 py-3 text-background hover:opacity-90">
              List Your Space
            </button>
            <button onClick={() => { setSubmitted(false); setOpen(true); }} className="rounded-full border border-foreground/20 px-6 py-3 hover:border-primary hover:text-primary">
              Join the Waitlist
            </button>
          </div>
        </div>
      </section>
      <Footer />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold tracking-tight">List your space</DialogTitle>
            <DialogDescription>Share your space with filmmakers, photographers, and production teams.</DialogDescription>
          </DialogHeader>
          {submitted ? (
            <div className="py-10 text-center">
              <h4 className="text-2xl font-semibold">We'll be in touch.</h4>
              <p className="mt-2 text-sm text-muted-foreground">A member of the DOOR team will follow up shortly.</p>
            </div>
          ) : (
            <HostForm onSuccess={() => setSubmitted(true)} />
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
