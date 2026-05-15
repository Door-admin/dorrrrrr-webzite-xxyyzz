import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "./index";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy , DOOR" },
      { name: "description", content: "How DOOR Platforms collects, uses, and safeguards your information." },
    ],
  }),
  component: PrivacyPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-muted-foreground">{children}</div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <article className="px-6 pt-20 pb-28 md:px-10 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">Last Updated: May 2026</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">Privacy Policy</h1>
          <p className="mt-8 text-muted-foreground">
            <span className="italic">DOOR Platforms Private Limited</span> ("DOOR", "we", "our", or "us") respects your privacy and is committed to protecting your personal information.
          </p>
          <p className="mt-4 text-muted-foreground">
            <span className="italic">This Privacy Policy</span> explains how we collect, use, and safeguard information when you access or use our website, platform, and related services.
          </p>

          <Section title="Information We Collect">
            <p>We may collect information including:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Account and login details</li>
              <li>Booking and inquiry information</li>
              <li>Device and browser information</li>
              <li>Usage activity and analytics data</li>
            </ul>
          </Section>

          <Section title="How We Use Information">
            <p>We use collected information to:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Provide and improve platform services</li>
              <li>Enable communication between users</li>
              <li>Manage inquiries and bookings</li>
              <li>Verify listings and user accounts</li>
              <li>Improve platform experience and safety</li>
              <li>Respond to support requests and feedback</li>
            </ul>
          </Section>

          <Section title="Cookies and Analytics">
            <p>DOOR may use cookies and analytics tools to improve website functionality, understand usage patterns, and enhance user experience.</p>
            <p>Users may choose to disable cookies through browser settings, though certain platform features may be affected.</p>
          </Section>

          <Section title="Data Security">
            <p>We take reasonable technical and organizational measures to protect user information from unauthorized access, misuse, loss, or disclosure.</p>
            <p>However, no method of digital transmission or storage is completely secure, and DOOR cannot guarantee absolute security.</p>
          </Section>

          <Section title="Sharing of Information">
            <p>DOOR does not sell personal information to third parties.</p>
            <p>Information may be shared only when necessary to:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Facilitate communication or bookings</li>
              <li>Comply with legal obligations</li>
              <li>Protect the safety, integrity, and rights of users and the platform</li>
            </ul>
          </Section>

          <Section title="Third-Party Services">
            <p>Our platform may contain links or integrations with third-party services or websites. DOOR is not responsible for the privacy practices or content of external platforms.</p>
          </Section>

          <Section title="User Rights">
            <p>Users may request access, correction, or deletion of their personal information by contacting us directly.</p>
          </Section>

          <Section title="Updates to This Policy">
            <p>DOOR may update this Privacy Policy periodically. Continued use of the platform after updates constitutes acceptance of the revised policy.</p>
          </Section>

          <Section title="Contact Us">
            <p>DOOR Platforms Private Limited<br />Chennai, India</p>
            <p>Email: <a href="mailto:knock@doorplatforms.com" className="text-primary hover:underline">knock@doorplatforms.com</a></p>
          </Section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
