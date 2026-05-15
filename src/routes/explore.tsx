import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header, Footer } from "./index";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FilmmakerForm } from "@/components/door/FilmmakerForm";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore Spaces , DOOR" },
      { name: "description", content: "Explore homes, cafés, studios, workspaces, and unique locations for films, ads, photography, and creative productions." },
    ],
  }),
  component: ExplorePage,
});

function ExplorePage() {
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
              Explore spaces made for <span className="text-primary/80">stories</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Discover homes, cafés, studios, workspaces, and unique locations for films, ads, photography, and creative productions.
            </p>
          </div>
          <p className="mt-12 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            DOOR helps creators and production teams find spaces that match the mood, scale, and setting of their story.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm font-medium">
            <button onClick={() => { setSubmitted(false); setOpen(true); }} className="rounded-full bg-foreground px-6 py-3 text-background hover:opacity-90">
              Start Exploring
            </button>
            <span className="rounded-full border border-foreground/15 px-6 py-3 text-muted-foreground">
              Coming Soon
            </span>
          </div>
        </div>
      </section>
      <Footer />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold tracking-tight">Start exploring</DialogTitle>
            <DialogDescription>Tell us about your shoot , we'll match you with the right space.</DialogDescription>
          </DialogHeader>
          {submitted ? (
            <div className="py-10 text-center">
              <h4 className="text-2xl font-semibold">We'll be in touch.</h4>
              <p className="mt-2 text-sm text-muted-foreground">A member of the DOOR team will follow up shortly.</p>
            </div>
          ) : (
            <FilmmakerForm onSuccess={() => setSubmitted(true)} />
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
