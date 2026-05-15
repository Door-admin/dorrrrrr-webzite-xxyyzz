import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/sonner";
import { FilmmakerForm } from "@/components/door/FilmmakerForm";
import { HostForm } from "@/components/door/HostForm";
import logo from "@/assets/door-logo.jpg";
import heroImg from "@/assets/hero-rooftop.jpg";
import villaImg from "@/assets/loc-villa.jpg";
import warehouseImg from "@/assets/loc-warehouse.jpg";
import cafeImg from "@/assets/loc-cafe.jpg";
import studioImg from "@/assets/loc-studio.jpg";
import heritageImg from "@/assets/loc-heritage.jpg";
import apartmentImg from "@/assets/loc-apartment.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DOOR , Discover Shoot Locations" },
      {
        name: "description",
        content:
          "Where stories find their space. Discover homes, cafés, studios, and unique locations for films, ads, and creative productions.",
      },
    ],
  }),
  component: Index,
});

type DialogMode = null | "filmmaker" | "host";

function Index() {
  const [dialog, setDialog] = useState<DialogMode>(null);
  const [submitted, setSubmitted] = useState(false);
  const openFilmmaker = () => { setSubmitted(false); setDialog("filmmaker"); };
  const openHost = () => { setSubmitted(false); setDialog("host"); };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Toaster />
      <Header />
      <Hero />
      <About />
      <Gallery />
      <FinalCTA onFilmmaker={openFilmmaker} onHost={openHost} />
      <Footer />

      <Dialog open={dialog !== null} onOpenChange={(o) => !o && setDialog(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold tracking-tight">
              {dialog === "filmmaker" ? "Start exploring" : "List your space"}
            </DialogTitle>
            <DialogDescription>
              {dialog === "filmmaker"
                ? "Tell us about your shoot , we'll match you with the right space."
                : "Share your space with filmmakers, photographers, and production teams."}
            </DialogDescription>
          </DialogHeader>
          {submitted ? (
            <div className="py-10 text-center">
              <h4 className="text-2xl font-semibold">We'll be in touch.</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Thanks for reaching out , a member of the DOOR team will follow up shortly.
              </p>
            </div>
          ) : dialog === "filmmaker" ? (
            <FilmmakerForm onSuccess={() => setSubmitted(true)} />
          ) : dialog === "host" ? (
            <HostForm onSuccess={() => setSubmitted(true)} />
          ) : null}
        </DialogContent>
      </Dialog>
    </main>
  );
}

/* ---------------- Header (shared) ---------------- */
export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/explore", label: "Explore" },
    { to: "/list-your-space", label: "List Space" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;
  return (
    <header className="absolute inset-x-0 top-0 z-40 px-4 pt-4 md:px-8 md:pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="DOOR" className="h-8 w-8 rounded-full object-cover ring-1 ring-black/10" />
          <span className="hidden text-sm font-semibold tracking-wide text-foreground md:inline">DOOR.</span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-black/10 bg-white/70 px-2 py-1.5 text-[13px] font-medium text-foreground/70 backdrop-blur-xl md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-1.5 transition-all hover:bg-black/5 hover:text-foreground"
              activeProps={{ className: "bg-foreground text-background hover:bg-foreground hover:text-background" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/list-your-space"
            className="group inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-white/70 px-4 py-2 text-[13px] font-medium text-foreground backdrop-blur-xl transition-all hover:border-primary/60 hover:bg-primary/10"
          >
            Get Started
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link to="/contact" className="text-[13px] font-medium text-foreground/70 transition-colors hover:text-foreground">
            Login
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-black/15 bg-white/70 p-2 text-foreground backdrop-blur md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-black/10 bg-white/90 px-5 py-4 text-foreground backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-foreground/80">
                {l.label}
              </Link>
            ))}
            <Link to="/list-your-space" onClick={() => setOpen(false)} className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-black/15 bg-white px-4 py-2">
              Get Started <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-white text-foreground"
    >
      {/* Subtle atmospheric background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% 10%, oklch(0.7 0.21 38 / 0.06), transparent 60%), radial-gradient(900px 500px at 90% 90%, oklch(0.7 0.21 38 / 0.08), transparent 65%), #ffffff",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(black_1px,transparent_1px),linear-gradient(90deg,black_1px,transparent_1px)] [background-size:60px_60px]"
      />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 gap-12 px-6 pb-32 pt-32 md:grid-cols-12 md:items-center md:gap-8 md:px-10 md:pb-40 md:pt-36">
        {/* LEFT: Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-6"
        >
          <h1 className="mt-7 text-[2.75rem] font-extrabold leading-[0.95] tracking-tight md:text-[4.5rem] lg:text-[5.75rem]">
            Where Stories
            <br />
            Find Their{" "}
            <span className="italic text-primary">Space.</span>
          </h1>
          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-muted-foreground md:text-base">
            DOOR is a curated platform for filmmakers, photographers, and brands to
            discover spaces designed for stories , homes, cafés, studios, and beyond.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm font-medium">
            <Link
              to="/explore"
              className="group inline-flex items-center gap-2 rounded-full border border-black/15 bg-white py-2 pl-5 pr-2 text-foreground backdrop-blur transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_40px_-10px_oklch(0.7_0.21_38/0.5)]"
            >
              Explore Locations
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              to="/list-your-space"
              className="rounded-full border border-black/15 px-5 py-2.5 text-foreground/80 transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              List Your Space
            </Link>
          </div>
        </motion.div>

        {/* RIGHT: Tilted device mockups */}
        <div className="relative md:col-span-6">
          <div
            className="relative mx-auto aspect-[4/5] w-full max-w-xl"
            style={{ perspective: "1400px" }}
          >
            {/* Soft glow under devices */}
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 rounded-[3rem] opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 70% 50%, oklch(0.7 0.21 38 / 0.35), transparent 60%)",
              }}
            />

            {/* Desktop mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: 10, rotateY: -16 }}
              animate={{ opacity: 1, y: [0, -8, 0], rotateX: 6, rotateY: -14 }}
              transition={{
                opacity: { duration: 1, delay: 0.2 },
                rotateX: { duration: 1, delay: 0.2 },
                rotateY: { duration: 1, delay: 0.2 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="absolute left-0 top-4 w-[88%] origin-center"
            >
              <div className="rounded-2xl border border-black/10 bg-white p-2 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.25)]">
                <div className="mb-2 flex items-center gap-1.5 px-2">
                  <span className="h-2 w-2 rounded-full bg-black/15" />
                  <span className="h-2 w-2 rounded-full bg-black/15" />
                  <span className="h-2 w-2 rounded-full bg-black/15" />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={heroImg}
                    alt="A cinematic shoot location"
                    className="h-[44vh] w-full object-cover md:h-[52vh]"
                    loading="eager"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating mobile mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateY: 18 }}
              animate={{ opacity: 1, y: [0, 10, 0], rotateY: 14 }}
              transition={{
                opacity: { duration: 1, delay: 0.5 },
                rotateY: { duration: 1, delay: 0.5 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="absolute -bottom-2 right-0 w-[38%]"
            >
              <div className="rounded-[1.6rem] border border-black/10 bg-white p-1.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)]">
                <div className="overflow-hidden rounded-[1.3rem]">
                  <img
                    src={villaImg}
                    alt="A featured shoot space"
                    className="aspect-[9/16] w-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
              {/* Brand dot accent */}
              <span className="absolute -left-3 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_24px_4px_oklch(0.7_0.21_38/0.55)]" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee strip overlapping bottom */}
      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = ["SHOOT", "FILM SHOOT", "CREATORS", "LOCATION SCOUT"];
  const row = [...items, ...items];
  return (
    <div className="absolute inset-x-0 bottom-0 z-10">
      <div className="border-y border-black/10 bg-white py-5">
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
          {row.map((label, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/85 md:text-base">
                {label}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_2px_oklch(0.7_0.21_38/0.5)]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



function About() {
  return (
    <section className="border-t border-border/60 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          A platform built for <span className="text-primary/80">stories</span>.
        </h2>
        <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
          DOOR is a platform built for filmmakers, creators, photographers, production teams, and brands to discover spaces designed for stories.
        </p>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          From homes and cafés to studios, commercial spaces, and unique environments, DOOR helps simplify the process of finding and accessing locations for creative productions.
        </p>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          We believe great stories often begin with the right space.
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [studioImg, heritageImg, apartmentImg, villaImg, warehouseImg, cafeImg];
  return (
    <section className="border-t border-border/60 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
          Spaces made for <span className="text-primary/80">cinematic moments</span>.
        </h2>
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {imgs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`DOOR location ${i + 1}`}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onFilmmaker, onHost }: { onFilmmaker: () => void; onHost: () => void }) {
  return (
    <section className="border-t border-border/60 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Open the door to your <span className="text-primary/80">next story</span>.
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
          <button onClick={onFilmmaker} className="rounded-full bg-foreground px-6 py-3 text-background hover:opacity-90">
            Start Exploring
          </button>
          <button onClick={onHost} className="rounded-full border border-foreground/20 px-6 py-3 hover:border-primary hover:text-primary">
            List Your Space
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer (shared) ---------------- */
export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-14 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="DOOR" className="h-8 w-8 rounded-full object-cover ring-1 ring-black/10" />
            <span className="text-sm font-semibold tracking-wide text-foreground">DOOR.</span>
          </div>
          <p className="text-sm italic text-muted-foreground">Where stories find their space.</p>
        </div>
        <nav className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link to="/explore" className="hover:text-primary">Explore</Link>
          <Link to="/about" className="hover:text-primary">About</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
          <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary">Terms &amp; Conditions</Link>
          
        </nav>
        <p className="mt-8 text-xs text-muted-foreground">© {new Date().getFullYear()} DOOR Platforms Private Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}
