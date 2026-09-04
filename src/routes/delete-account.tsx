import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "./index";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title: "Delete Account | DOOR" },
      {
        name: "description",
        content: "Learn how to request deletion of your DOOR account and associated data.",
      },
    ],
  }),
  component: DeleteAccountPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12 border-t border-border pt-8 first:mt-0 first:border-0 first:pt-0">
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-muted-foreground">{children}</div>
    </section>
  );
}

function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <article className="px-6 pb-28 pt-32 md:px-10 md:pb-36 md:pt-40">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Account &amp; privacy</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">Delete your account</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              If you would like to delete your DOOR account and associated data, please follow the steps below.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card/60 p-6 shadow-sm md:p-10">
            <Section title="How to request account deletion">
              <ol className="ml-5 list-decimal space-y-3 pl-2 marker:font-semibold marker:text-foreground">
                <li>Log in to your DOOR account.</li>
                <li>Go to Menu.</li>
                <li>Select Delete Account.</li>
                <li>Confirm your request.</li>
              </ol>
              <p>
                If you are unable to access your account, you can submit a deletion request by contacting us at{" "}
                <a className="font-medium text-primary underline-offset-4 hover:underline" href="mailto:Admin@doorplatforms.com">
                  Admin@doorplatforms.com
                </a>
                .
              </p>
            </Section>

            <Section title="Data that will be deleted">
              <ul className="ml-5 list-disc space-y-3 pl-2 marker:text-primary">
                <li>Your account/profile information</li>
                <li>Personal information associated with your account</li>
                <li>User-generated content and documents associated with your account</li>
                <li>App activity and other data directly associated with your account</li>
              </ul>
            </Section>

            <Section title="Data that may be retained">
              <p>
                Certain information may be retained where required for legal, security, fraud-prevention, accounting, or regulatory purposes.
              </p>
            </Section>

            <Section title="Retention period">
              <p>
                Data that is required to be retained will be kept only for the period necessary to satisfy the applicable legal or regulatory requirements and will be securely deleted thereafter.
              </p>
            </Section>

            <Section title="After your request is processed">
              <p>Once your deletion request has been processed, your account and eligible associated data will no longer be accessible.</p>
            </Section>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

export default DeleteAccountPage;
