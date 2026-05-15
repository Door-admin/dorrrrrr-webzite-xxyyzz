import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "./index";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions , DOOR" },
      { name: "description", content: "The terms and conditions that govern your use of the DOOR platform." },
    ],
  }),
  component: TermsPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-muted-foreground">{children}</div>
    </section>
  );
}

function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <article className="px-6 pt-20 pb-28 md:px-10 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">Last Updated: May 2026</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">Terms &amp; Conditions</h1>
          <p className="mt-8 text-muted-foreground">
            Welcome to DOOR, operated by DOOR Platforms Private Limited ("DOOR", "we", "our", or "us").
          </p>
          <p className="mt-4 text-muted-foreground">
            By accessing or using our website and platform, you agree to comply with these Terms &amp; Conditions.
          </p>

          <Section title="Platform Services">
            <p>DOOR provides a platform that enables users to discover, inquire about, and connect regarding creative and spaces.</p>
            <p>DOOR may facilitate communication, booking coordination, and related services between users and space owners.</p>
          </Section>

          <Section title="User Responsibilities">
            <p>Users agree to:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Provide accurate information</li>
              <li>Use the platform lawfully</li>
              <li>Respect properties and locations</li>
              <li>Avoid harmful, unsafe, or unauthorized activities</li>
              <li>Comply with applicable local laws and permissions</li>
            </ul>
          </Section>

          <Section title="Listings and Availability">
            <p>DOOR does not guarantee the availability, suitability, or condition of listed spaces at all times.</p>
            <p>Space owners are responsible for maintaining accurate listing information.</p>
          </Section>

          <Section title="Payments and Bookings">
            <p>Booking terms, pricing, cancellations, and payment conditions may vary depending on the listing or agreement between parties.</p>
            <p>DOOR reserves the right to modify or refuse bookings that violate platform policies or applicable laws.</p>
          </Section>

          <Section title="Intellectual Property">
            <p>All platform content, branding, text, graphics, and materials associated with DOOR are owned by or licensed to DOOR Platforms Private Limited and may not be copied or used without permission.</p>
          </Section>

          <Section title="Limitation of Liability">
            <p>DOOR acts as a platform facilitating discovery and communication between users and property owners.</p>
            <p>DOOR shall not be held responsible for indirect damages, losses, disputes, or incidents arising from the use of locations, third-party interactions, or user conduct.</p>
          </Section>

          <Section title="Account Suspension">
            <p>We reserve the right to suspend or terminate accounts that violate platform policies, misuse services, or engage in harmful activities.</p>
          </Section>

          <Section title="Changes to Terms">
            <p>DOOR may update these Terms &amp; Conditions from time to time. Continued use of the platform after changes constitutes acceptance of the revised terms.</p>
          </Section>

          <Section title="Contact">
            <p>DOOR Platforms Private Limited<br />Chennai, India</p>
            <p>Email: <a href="mailto:knock@doorplatforms.com" className="text-primary hover:underline">knock@doorplatforms.com</a></p>
          </Section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
