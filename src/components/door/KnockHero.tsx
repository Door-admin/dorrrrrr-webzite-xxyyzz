import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowLeft, Clapperboard, Home, type LucideIcon } from "lucide-react";
import { DoorKnobIcon } from "./DoorKnobIcon";
import { FilmmakerForm } from "./FilmmakerForm";
import { HostForm } from "./HostForm";
import { HeroBackground } from "./HeroBackground";

type Stage = "knock" | "whos-there" | "filmmaker" | "host" | "success";

interface KnockHeroProps {
  stage: Stage;
  onKnock: () => void;
  onChoose: (choice: "filmmaker" | "host") => void;
  onBack: () => void;
  onSuccess: () => void;
  onReset: () => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

// Word-by-word reveal — inspired by countdown.substraterx.com
const wordContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const wordChild: Variants = {
  hidden: { opacity: 0, y: "0.5em", filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.7, ease },
  },
};

function RevealWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      variants={wordContainer}
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: delay }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden="true"
        >
          <motion.span variants={wordChild} className="inline-block">
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

const stepTransition = { duration: 0.7, ease };

// Zoom-in / zoom-out step variants — like SubstrateRx countdown.
const stepVariants: Variants = {
  initial: { opacity: 0, scale: 0.92, filter: "blur(8px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 1.08, filter: "blur(8px)" },
};

export function KnockHero({
  stage,
  onKnock,
  onChoose,
  onBack,
  onSuccess,
  onReset,
}: KnockHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-6 py-24">
      <HeroBackground />

      <AnimatePresence mode="wait">
        {stage === "knock" && (
          <motion.div
            key="knock"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={stepTransition}
            className="flex flex-col items-center text-center"
          >
            <motion.button
              onClick={onKnock}
              aria-label="Knock on the door"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex flex-col items-center outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-2xl px-4 py-2"
            >
              <h1 className="font-knock text-6xl md:text-8xl text-foreground leading-[0.95]">
                <RevealWords text="Knock knock..." delay={0.1} />
              </h1>
            </motion.button>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.55 }}
              className="mt-6 text-sm uppercase tracking-[0.3em] text-muted-foreground"
            >
              Tap to enter
            </motion.p>
          </motion.div>
        )}

        {stage === "whos-there" && (
          <motion.div
            key="whos"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={stepTransition}
            className="flex w-full max-w-5xl flex-col items-center text-center"
          >
            <motion.button
              onClick={onReset}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease, delay: 0.1 }}
              className="mb-8 inline-flex items-center gap-2 self-start text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </motion.button>
            <h2 className="font-knock text-5xl md:text-7xl text-foreground leading-[0.95]">
              <RevealWords text="Who's there?" delay={0.1} />
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.45 }}
              className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl text-balance"
            >
              Tell us what brings you to Door — we'll open the right one.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12, delayChildren: 0.6 },
                },
              }}
              className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2"
            >
              <ChoiceCard
                Icon={Clapperboard}
                title="I'm looking for locations"
                subtitle="Discover spaces ready for your next shoot"
                onClick={() => onChoose("filmmaker")}
              />
              <ChoiceCard
                Icon={Home}
                title="I want to list my property"
                subtitle="Open your doors to filmmakers and creators"
                onClick={() => onChoose("host")}
              />
            </motion.div>
          </motion.div>
        )}

        {(stage === "filmmaker" || stage === "host") && (
          <motion.div
            key={stage}
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={stepTransition}
            className="w-full max-w-2xl"
          >
            <button
              onClick={onBack}
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.05 }}
              className="rounded-3xl border border-border bg-card p-8 md:p-10"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Door</p>
              <h3 className="mt-2 font-knock text-3xl md:text-4xl tracking-tight">
                <RevealWords
                  text={
                    stage === "filmmaker"
                      ? "Looking for a location"
                      : "List your property"
                  }
                  delay={0.15}
                />
              </h3>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.5 }}
                className="mt-2 text-sm text-muted-foreground"
              >
                {stage === "filmmaker"
                  ? "Tell us about your shoot — we'll match you with the right space."
                  : "Share your space with filmmakers and creators around the world."}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.65 }}
                className="mt-8"
              >
                {stage === "filmmaker" ? (
                  <FilmmakerForm onSuccess={onSuccess} />
                ) : (
                  <HostForm onSuccess={onSuccess} />
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {stage === "success" && (
          <motion.div
            key="success"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={stepTransition}
            className="flex w-full max-w-xl flex-col items-center text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease, delay: 0.05 }}
              className="mb-6 flex h-16 w-16 items-center justify-center rounded-full text-primary-foreground"
              style={{ background: "var(--gradient-warm)" }}
            >
              <DoorKnobIcon className="h-8 w-8" />
            </motion.div>
            <h3 className="font-knock text-4xl md:text-5xl tracking-tight">
              <RevealWords text="We'll get back to you soon." delay={0.15} />
            </h3>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.7 }}
              className="mt-3 max-w-md text-sm text-muted-foreground"
            >
              Thanks for knocking. A member of the Door team will reach out shortly.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.85 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onReset}
              className="mt-8 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground"
              style={{ background: "var(--gradient-warm)" }}
            >
              Back to home
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease },
  },
};

function ChoiceCard({
  Icon,
  title,
  subtitle,
  onClick,
}: {
  Icon: LucideIcon;
  title: string;
  subtitle: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      variants={cardVariants}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease }}
      onClick={onClick}
      className="group relative flex flex-col items-start gap-4 overflow-hidden rounded-3xl border border-border bg-card p-8 text-left transition-colors duration-300 hover:border-primary hover:shadow-[0_10px_40px_-15px_oklch(0.72_0.205_45_/_0.35)]"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border text-primary transition-colors duration-200 group-hover:border-primary group-hover:bg-primary/5">
        <Icon className="h-6 w-6" strokeWidth={1.6} />
      </span>
      <div>
        <h3 className="text-2xl font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-1">
        Continue →
      </span>
    </motion.button>
  );
}
