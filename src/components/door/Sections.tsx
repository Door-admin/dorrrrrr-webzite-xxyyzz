import { motion } from "framer-motion";
import {
  Film,
  Megaphone,
  Music,
  Camera,
  Search,
  MessageCircle,
  Clapperboard,
  Upload,
  Eye,
  DoorOpen,
  ShieldCheck,
  Sparkles,
  Coins,
  CalendarClock,
  Users,
  type LucideIcon,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="text-xs uppercase tracking-[0.4em] text-primary"
    >
      {children}
    </motion.p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mt-5 font-knock text-4xl md:text-6xl tracking-tight text-balance leading-[1.05]"
    >
      {children}
    </motion.h2>
  );
}

/* ---------------- 1. What is Door ---------------- */
export function WhatIsDoor() {
  const types = [
    { icon: Film, label: "Films" },
    { icon: Megaphone, label: "Ads" },
    { icon: Music, label: "Music videos" },
    { icon: Camera, label: "Photoshoots" },
  ];
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <SectionLabel>What is Door</SectionLabel>
        <SectionTitle>
          Locations for the stories <br className="hidden md:block" />
          worth telling.
        </SectionTitle>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-balance"
        >
          Door connects filmmakers with unique shooting locations , making it
          easier to discover, book, and list cinematic spaces.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
          className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4"
        >
          {types.map((t) => (
            <motion.div
              key={t.label}
              variants={fadeUp}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card px-5 py-7"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <t.icon className="h-6 w-6 text-primary" strokeWidth={1.6} />
              <span className="text-sm font-medium text-foreground">
                {t.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- 2. Problem ---------------- */
export function Problem() {
  const pains = [
    "Endless WhatsApp groups & cold contacts",
    "Unverified owners and unreliable spaces",
    "The same five locations in every shoot",
    "Slow scouting that burns the budget",
  ];
  return (
    <section className="relative px-6 py-24 md:py-32 bg-secondary/40 border-y border-border">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionLabel>The problem</SectionLabel>
          <SectionTitle>
            Finding film locations <br />
            is still broken.
          </SectionTitle>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-6 max-w-md text-base text-muted-foreground"
          >
            Scouting a great space shouldn't require a hundred phone calls
            and a week of group chats. Yet that's how most shoots still begin.
          </motion.p>
        </div>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="space-y-4 self-center"
        >
          {pains.map((p) => (
            <motion.li
              key={p}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card px-5 py-5"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
              <span className="text-base text-foreground">{p}</span>
            </motion.li>
          ))}
          <motion.li
            variants={fadeUp}
            className="pt-2 text-sm uppercase tracking-[0.3em] text-primary"
          >
            Door changes that.
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
}

/* ---------------- 3. How it works ---------------- */
function StepCard({
  index,
  Icon,
  title,
  copy,
}: {
  index: number;
  Icon: LucideIcon;
  title: string;
  copy: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary/5">
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </span>
        <span className="font-knock text-3xl text-muted-foreground/40">
          0{index}
        </span>
      </div>
      <h4 className="mt-6 text-xl font-semibold text-foreground">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
    </motion.div>
  );
}

export function HowItWorks() {
  const filmmaker = [
    { Icon: Search, title: "Discover locations", copy: "Search by mood, light, era or vibe , find the room your script has been waiting for." },
    { Icon: MessageCircle, title: "Connect with owners", copy: "Talk directly to verified hosts. No middlemen, no chasing." },
    { Icon: Clapperboard, title: "Shoot your story", copy: "Lock the date, roll camera, make the scene unforgettable." },
  ];
  const host = [
    { Icon: Upload, title: "List your space", copy: "A few photos, a few details , your space goes live in minutes." },
    { Icon: Eye, title: "Get discovered", copy: "Reach filmmakers, agencies and creators actively scouting." },
    { Icon: DoorOpen, title: "Host productions", copy: "Open your doors on your terms , and earn from creative work." },
  ];

  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionLabel>How it works</SectionLabel>
          <SectionTitle>Three steps. One door.</SectionTitle>
        </div>

        <div className="mt-16 space-y-16">
          {[
            { title: "For filmmakers", steps: filmmaker },
            { title: "For property owners", steps: host },
          ].map((group) => (
            <div key={group.title}>
              <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">
                {group.title}
              </p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.12 } },
                }}
                className="grid gap-5 md:grid-cols-3"
              >
                {group.steps.map((s, i) => (
                  <StepCard key={s.title} index={i + 1} {...s} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 4. Trust blocks ---------------- */
export function TrustBlocks() {
  const filmmakers = [
    { Icon: Sparkles, title: "Curated spaces", copy: "Every location is hand-picked for cinematic potential." },
    { Icon: Search, title: "Faster scouting", copy: "Discover, shortlist and reach out , all in one place." },
    { Icon: ShieldCheck, title: "Verified listings", copy: "Real owners. Real spaces. Real production-ready." },
  ];
  const hosts = [
    { Icon: Coins, title: "Earn from your space", copy: "Turn unused rooms, rooftops and homes into income." },
    { Icon: CalendarClock, title: "Flexible availability", copy: "You decide when, who, and how often." },
    { Icon: Users, title: "Creative collaborations", copy: "Be part of the next iconic film, ad or music video." },
  ];

  return (
    <section className="relative px-6 py-24 md:py-32 bg-secondary/40 border-y border-border">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        {[
          { label: "For filmmakers", title: "Built for production.", items: filmmakers },
          { label: "For property owners", title: "Built around you.", items: hosts },
        ].map((block) => (
          <div key={block.label} className="rounded-3xl border border-border bg-card p-8 md:p-10" style={{ boxShadow: "var(--shadow-soft)" }}>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">{block.label}</p>
            <h3 className="mt-3 font-knock text-3xl md:text-4xl">{block.title}</h3>
            <ul className="mt-8 space-y-6">
              {block.items.map(({ Icon, title, copy }) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{copy}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- 5. Vision ---------------- */
export function Vision() {
  return (
    <section className="relative px-6 py-32 md:py-44">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>Our vision</SectionLabel>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 font-knock text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance"
        >
          Every unforgettable scene{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-warm)" }}
          >
            begins somewhere.
          </span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground text-balance"
        >
          Door exists to help filmmakers discover the spaces that bring their
          stories to life , and to help the people behind those spaces become
          part of the story.
        </motion.p>
      </div>
    </section>
  );
}

/* ---------------- 6. Final CTA ---------------- */
export function FinalCTA({
  onFilmmaker,
  onHost,
}: {
  onFilmmaker: () => void;
  onHost: () => void;
}) {
  return (
    <section className="relative px-6 pb-32">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-card px-8 py-16 md:px-16 md:py-20 text-center" style={{ boxShadow: "var(--shadow-knock)" }}>
        <SectionLabel>Join Door</SectionLabel>
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-5 font-knock text-4xl md:text-6xl tracking-tight"
        >
          Ready to open the door?
        </motion.h3>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-4 max-w-lg text-muted-foreground"
        >
          Be part of the early Door community , whether you're shooting the
          next big thing or hosting it.
        </motion.p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onFilmmaker}
            className="rounded-full px-7 py-3 text-sm font-medium text-primary-foreground"
            style={{ background: "var(--gradient-warm)" }}
          >
            Explore locations
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onHost}
            className="rounded-full border border-border bg-background px-7 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            List your property
          </motion.button>
        </div>
      </div>
    </section>
  );
}
