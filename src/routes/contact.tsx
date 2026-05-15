import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "./index";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact , DOOR" },
      { name: "description", content: "Get in touch with DOOR Platforms for partnerships, listings, collaborations, support, or general inquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="px-6 pt-20 pb-28 md:px-10 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">Contact Us</h1>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>For partnerships, listings, collaborations, support, or general inquiries, feel free to reach out to us.</p>
          </div>
          <div className="mt-12 rounded-2xl border border-border/60 p-8">
            <p className="text-base font-semibold text-foreground">DOOR Platforms Private Limited</p>
            <p className="mt-1 text-muted-foreground">Chennai, India</p>
            <p className="mt-4 text-muted-foreground">
              Email: <a href="mailto:knock@doorplatforms.com" className="text-primary hover:underline">knock@doorplatforms.com</a>
            </p>
            <p className="mt-6 text-sm text-muted-foreground">We typically respond within 24–48 hours.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
