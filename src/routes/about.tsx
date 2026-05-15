import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "./index";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About , DOOR" },
      { name: "description", content: "DOOR is a platform built for filmmakers, creators, photographers, production teams, and brands to discover spaces designed for stories." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="px-6 pt-20 pb-28 md:px-10 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">About <span className="text-primary">DOOR</span></h1>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>DOOR is a platform built for filmmakers, creators, photographers, production teams, and brands to discover spaces designed for stories.</p>
            <p>From homes and cafés to studios, commercial spaces, and unique environments, DOOR helps simplify the process of finding and accessing locations for creative productions.</p>
            <p>We believe great stories often begin with the right space.</p>
            <p>DOOR is designed to make location discovery more accessible, organized, and creator-friendly while enabling property owners to showcase spaces with creative potential.</p>
            <p>As the creative industry evolves, DOOR aims to build tools and systems that better connect creators, spaces, and production experiences.</p>
          </div>
          <div className="mt-12 border-t border-border/60 pt-8 text-sm text-muted-foreground">
            <p>DOOR is operated by <span className="font-semibold text-foreground">DOOR Platforms Private Limited</span></p>
            <p className="mt-1">Registered in India.</p>
            <p className="mt-3">Contact: <a href="mailto:knock@doorplatforms.com" className="text-primary hover:underline">knock@doorplatforms.com</a></p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
