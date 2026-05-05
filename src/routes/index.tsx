import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Sparkles, Clapperboard, Mail, Instagram, Twitter } from "lucide-react";
import { KnockHero } from "@/components/door/KnockHero";
import { Toaster } from "@/components/ui/sonner";
import logo from "@/assets/door-logo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Door — Open doors to extraordinary stories" },
      {
        name: "description",
        content:
          "Door connects filmmakers with unique shooting locations. Discover curated spaces or list your property for film, ads and photoshoots.",
      },
      { property: "og:title", content: "Door — Locations for filmmakers" },
      {
        property: "og:description",
        content: "Knock. Discover. Shoot. Door is the marketplace for film locations.",
      },
    ],
  }),
  component: Index,
});

type Stage = "knock" | "whos-there" | "filmmaker" | "host" | "success";

function Index() {
  const [stage, setStage] = useState<Stage>("knock");

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Toaster />

      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Door" className="h-9 w-9 rounded-full object-cover" />
          <span className="text-lg font-semibold tracking-tight">Door</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#how" className="hover:text-foreground transition-colors duration-200">How it works</a>
          <a href="#contact" className="hover:text-foreground transition-colors duration-200">Contact</a>
        </nav>
      </header>

      <KnockHero
        stage={stage}
        onKnock={() => setStage("whos-there")}
        onChoose={(c) => setStage(c)}
        onBack={() => setStage("whos-there")}
        onSuccess={() => setStage("success")}
        onReset={() => setStage("knock")}
      />

      <Tagline />
      <Benefits />
      <Footer />
    </main>
  );
}

function Tagline() {
  return (
    <section id="how" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-primary"
        >
          The Door manifesto
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-balance text-4xl md:text-6xl font-bold tracking-tight"
        >
          Open doors to{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-warm)" }}
          >
            extraordinary stories.
          </span>
        </motion.h2>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      icon: Compass,
      title: "Curated locations",
      copy: "Every space is hand-picked for cinematic potential — not just square footage.",
    },
    {
      icon: Sparkles,
      title: "Easy discovery",
      copy: "Search by mood, light, era or vibe. Find the room your script has been waiting for.",
    },
    {
      icon: Clapperboard,
      title: "Built for filmmakers",
      copy: "Permits, parking, power. Door speaks the language of production.",
    },
  ];
  return (
    <section className="relative px-6 pb-32">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div
              className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground"
              style={{ background: "var(--gradient-warm)" }}
            >
              <it.icon className="h-6 w-6" strokeWidth={1.8} />
            </div>
            <h3 className="text-xl font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Door" className="h-8 w-8 rounded-full" />
          <span className="font-semibold tracking-tight">Door</span>
        </div>
        <a
          href="mailto:hello@door.studio"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <Mail className="h-4 w-4" />
          <span>hello@door.studio</span>
        </a>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-5 w-5" /></a>
          <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter className="h-5 w-5" /></a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Door. Open doors to extraordinary stories.
      </p>
    </footer>
  );
}

