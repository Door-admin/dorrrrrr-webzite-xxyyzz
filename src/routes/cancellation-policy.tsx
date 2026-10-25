import { createFileRoute } from "@tanstack/react-router";
import { Footer, Header } from "./index";

export const Route = createFileRoute("/cancellation-policy")({
  head: () => ({
    meta: [
      { title: "Cancellation Policy | DOOR" },
      {
        name: "description",
        content:
          "DOOR's policy for cancelling and rescheduling confirmed shoots and handling refunds.",
      },
    ],
  }),
  component: CancellationPolicyPage,
});

const sections = [
  [
    "1 Scope and time calculation",
    `This policy applies to confirmed shoots through DOOR and must be accessible before payment with the approved scope, property rules and related terms. Confirmation requires Host approval, Creator acceptance, successful payment and DOOR confirmation. Host or DOOR failure is assessed separately from voluntary Creator cancellation.

Cancellation and rescheduling deadlines, including the before-start and after-start financial bands, use the scheduled start in the confirmation, not actual entry or the reduction of available time. An approved date or time change supplies a new scheduled start. Count exact hours in the property's local time zone (Indian Standard Time for India). The arrival buffer in section 10 does not change these deadlines.`,
  ],
  [
    "2 Requesting a cancellation",
    `Send a clear cancellation request through DOOR support or knock@doorplatforms.com with the shoot reference. The receipt time counts, not the agent's reply time. If the app fails, retain evidence and email promptly. Asking about rescheduling does not cancel a confirmed shoot.`,
  ],
  [
    "3 Creator cancellation schedule",
    `3.1 If you cancel at least 72 hours before the scheduled start, you get the full location charge back. Exactly 72 hours qualifies. An approved Creator-requested reschedule is an exception: later cancellation follows the 50% rule in section 6, even with 72 hours or more remaining.

3.2 If you cancel with less than 72 hours left, but before the scheduled start, you get at least half the location charge back. Up to the other half may be retained for reasonable cancellation loss.

3.3 If you neither cancel nor turn up, up to the full location charge may be retained under section 10. This requires the Host to have kept the agreed space available throughout the applicable slot defined in section 10. Account for avoided costs and replacement shoots.

3.4 If you choose to cancel at or after the scheduled start while the agreed access remains available, up to the full location charge may be retained. Supplied access and reasonable cancellation loss together cannot exceed that charge. Host failure or unusable access follows sections 7 to 9.

The location or access charge excludes taxes, Creator fees, deposits and separately priced extras. Retention amounts are maximums, subject to reasonable compensation, avoided costs and adjustments for replacement income. DOOR explains deductions and prevents double recovery. Section 4 governs fees, deposits and extras separately.

A location confirmed within 72 hours of the scheduled start immediately enters the relevant cancellation band; disclose this before payment. An unconfirmed request carries no cancellation charge.`,
  ],
  [
    "4 What is refunded separately",
    `For a cancelled shoot or qualifying no-show where no access was used, DOOR refunds the entire 5% Creator platform fee. For a partial cancellation, refund the fee attributable to cancelled sessions or unusable access. No payment-gateway deduction or undisclosed administration fee is added to the cancellation calculation.

Apply the Host commission rate disclosed for that confirmed shoot only to the access charge legitimately retained after cancellation adjustments. The balance goes to the Host. Commission is not calculated on refunded access charges and is not an extra Creator deduction. Category rates belong in the separate fee schedule. Any later reduction in the retained charge also reduces DOOR commission and the Host payout. DOOR initiates the undisputed Host share within 24 hours after the scheduled end if cancellation occurs before both verified first entry and the arrival-buffer deadline; otherwise, use the recorded effective end. For no-shows, use the effective end under section 10. Approved paid extensions count; free clearing permission does not move this deadline. Settled amounts may be paid earlier.

For Creator cancellations, refund unused extras unless an unavoidable third-party cost was disclosed and accepted before it was incurred. Separately requested services already supplied may be charged. Itemize deductions and credit supplier recoveries. This exception does not reduce unused-extras refunds for Host or DOOR failure. Deposits apply only where requested by the Host, approved by DOOR and disclosed before collection with the location confirmation payment. Return the refundable deposit unless a separately evidenced valid claim supports a deduction; cancellation alone does not forfeit it. Make appropriate tax adjustments and provide refund records.`,
  ],
  [
    "5 One reschedule without a change fee",
    `A Creator may request one change of date or start time without a rescheduling fee when DOOR receives the request at least 48 hours before the original scheduled start. Exactly 48 hours qualifies. Approval depends on Host agreement and availability; the revised shoot details must be accepted by both parties.

The original shoot stays confirmed until DOOR confirms the change after Host approval, Creator acceptance of the revised details and settlement of any price adjustment. A request alone does not release the original slot or confirm another date. DOOR must communicate whether the request has been approved or declined.

A fee-free change may still change the location price. Show the revised access charge, Creator fee, taxes and any difference before acceptance. Credit payments already made, collect any shortfall or refund an overpayment, and issue an updated confirmation recording the fee-free change.`,
  ],
  [
    "6 Cancelling after an approved reschedule",
    `6.1 Once a Creator-requested reschedule is confirmed, a later Creator cancellation before the revised start carries a cancellation charge of 50% of the revised location charge, subject to the reasonable-compensation and reduction rules in section 3. This applies even if the revised start is at least 72 hours away. Show this exception before the Creator accepts the change.

6.2 Do not add separate cancellation charges for both the old and new dates. Cancellation at or after the revised start, or a qualifying no-show, follows the up-to-100% rule. Creator fees, deposits and extras still follow section 4.

6.3 A pending or declined request leaves the original shoot confirmed. The Creator may separately cancel it, using the original start and the actual cancellation receipt time. A replacement date requires agreement and availability; there is no guaranteed new date or automatic approval. DOOR must communicate the request's status promptly. Requests within 48 hours or for a second change are considered individually with any terms disclosed before agreement. A change caused by the Host or DOOR does not use the Creator's fee-free change.`,
  ],
  [
    "7 Host cancellation and unavailable access",
    `7.1 Before any access is used, if the Host cancels or cannot provide the agreed access, and an established Creator breach did not cause the problem, the Creator gets the full location charge, 5% Creator platform fee, security deposit and unused extras back. DOOR processes this refund without waiting to recover money from the Host.

7.2 The Host keeps none of the cancelled location charge. DOOR keeps no Host commission or Creator platform fee on that refunded amount. Separately requested services already supplied are assessed separately. If part of the shoot has already taken place, refund the unusable or undelivered access and its related fees and unused extras. Return the deposit separately, subject to any valid evidenced claim under section 4.

7.3 DOOR handles support and helps look for another location, subject to availability. The Creator can choose a refund instead of a replacement, new date or platform credit. Host failure includes conflicting commitments for the same access time, missing authority, refusing agreed access and material restrictions that were not disclosed before payment.

7.4 This policy imposes no automatic Host cash penalty. DOOR reviews the reason and evidence and may restrict or suspend new shoot confirmations for repeated or serious avoidable cancellations. Genuine emergencies receive separate consideration when deciding account consequences. Hosts must report problems promptly and cooperate with refunds. These rules do not waive valid legal claims against the Host or DOOR.`,
  ],
  [
    "8 DOOR cancellation and applicable remedies",
    `If DOOR cancels a confirmed shoot, refund undelivered access, associated Creator fees, unused extras and refundable deposits. A system error discovered after confirmation is assessed as a cancellation, not retrospectively as a location request that was never confirmed.

Where applicable law requires DOOR to bear cancellation charges or provide other compensation, DOOR will meet that obligation. Rule 4(8) of the Consumer Protection (E-Commerce) Rules, 2020 requires similar cancellation charges to be borne by the platform when it unilaterally cancels if it charges consumers for cancelling. Returning the Creator's own payment is separate from compensation. A voucher cannot be imposed instead of a money refund or other payment due. Describing a cancellation as Host-caused does not itself settle DOOR's legal duties.`,
  ],
  [
    "9 Permissions and interrupted shoots",
    `A location confirmation supplies no government or police permission. Creators obtain external approvals required for their activity; Hosts remain responsible for their own authority and property-side obligations. Review missing permissions or material Creator breach using evidence and the actual cause. Do not automatically label these events no-shows. Unsafe or unlawful activity must stop.

If Host or DOOR failure makes access unusable during the shoot, refund affected undelivered access and related fees and extras. Do not charge unusable time as delivered access. Intervention by police, a neighbour or another person does not by itself establish fault.

Personal illness, travel problems or changes in production plans do not automatically waive ordinary Creator cancellation charges while the agreed access remains available. If a closure, flooding or other event not caused by established Creator breach makes that access unavailable, unlawful or unsafe, offer an optional reschedule; otherwise refund unused access and related fees and extras. Charge usable access already supplied proportionately. Refundable deposits remain subject to section 4. This does not promise compensation for wider production losses.

DOOR considers both accounts, explains the outcome and releases undisputed refunds promptly. Any mandatory compensation or other remedy remains available. This policy gives no automatic promise to reimburse an entire production budget.`,
  ],
  [
    "10 No-shows, early departures and partial changes",
    `Every confirmed shoot has a guaranteed 30-minute arrival buffer. The Host reserves access from the scheduled start through that start plus 30 minutes plus the purchased duration. Verified first entry within the buffer sets the effective end at entry plus the purchased duration. Without entry by the deadline, the end is fixed at the deadline plus that duration and available time reduces automatically. This does not check anyone in or record a shoot start. Later entry receives only the remaining time; it never resets the end.

Without verified entry at the buffer deadline, the status remains “Not checked in” and contact attempts should begin; it is not a final no-show. A qualifying no-show requires no cancellation, attendance or access use throughout the applicable slot, with lawful access available from the scheduled start to the effective end. Host refusal or unavailable access is not a Creator no-show.

QR records must reflect actual entry and checkout. A delayed or missing scan does not earn extra time or alone prove a no-show or overtime; use reliable evidence to correct the record. Early access needs agreement. The buffer end shift is neither paid overtime nor a reschedule. Host-caused delays follow sections 7 to 9; never charge unavailable access as delivered. Voluntary early departure creates no automatic refund. After-scheduled-start cancellation follows section 3.4.

Only the Host may expressly allow free packing, clearing and departure directly, with no filming. No fixed free period is guaranteed, and no in-app grace request is required. The allowed free period is not overtime; DOOR support may verify Host confirmation and remove any related charge. Record actual departure; free clearing does not change the paid effective end. Further occupation follows the disclosed approval and overtime rules.

If access is released or confirmed for another shoot, account for replacement income and avoided costs. For separately priced dates or sessions, calculate partial cancellation using each session and its scheduled start. Disclose a fair package-price allocation, avoid double charging, and record any agreed reduction in hours or scope. Disclosed minimum durations still apply.`,
  ],
  [
    "11 Payment errors and refund handling",
    `For a location request that was never confirmed, refund all captured payments without a cancellation deduction. Return duplicate payments in full. A Host-caused or DOOR-caused cancellation after confirmation follows section 7 or 8, including confirmation or system errors. A pending or failed payment is not proof of a confirmed location; DOOR will reconcile it with the payment provider.

DOOR initiates an undisputed refund within two working days of receiving the cancellation notice or becoming aware of the event giving rise to the refund entitlement. Working days mean Monday to Friday, excluding public holidays in Tamil Nadu. A dispute must not delay the undisputed portion; any further refund is initiated within two working days after that dispute is resolved. Provide the calculation and refund reference, using the original payment method where possible. Exception: after the shoot, initiate the undisputed deposit refund as soon as checkout clears and no later than 24 elapsed hours after the recorded effective end, including approved paid extensions. Host-approved free clearing does not change the effective end or restart the 24-hour deadline. Hold only the amount supported by evidence of a claim.

Payment-provider credit times vary. Give the Creator the provider's expected timeline when initiating the refund and help trace a delayed credit; do not promise an unsupported bank-credit date. A different refund method requires the Creator's agreement and appropriate verification. Compulsory wallet credit is not a substitute for a money refund.`,
  ],
  [
    "12 Support, evidence and complaints",
    `Contact knock@doorplatforms.com with the shoot reference, requested outcome and relevant records. DOOR records a support reference and communicates reasons. Consumer complaints are acknowledged within 48 hours and addressed within one month, subject to shorter applicable requirements. The existing policy names Shara Shanth K as Grievance Officer at the same email; confirm these details remain current before adoption.

Each party should reduce avoidable loss and may provide evidence or question a deduction. Personal circumstances do not create an automatic exception to the cancellation rules. DOOR's decision does not replace independent legal remedies. Refunds and compensation must avoid double recovery.`,
  ],
  [
    "13 Acceptance and policy versions",
    `Show the applicable schedule, fees and material exceptions before payment, obtain affirmative acceptance and retain the accepted version with the shoot record. Send it with the location confirmation and make it available in the app. An email sent only after payment is not the first disclosure. No undisclosed deduction or later policy change applies retrospectively.

Once adopted, this policy applies only to confirmed shoots for which it has been accepted. Existing confirmed shoots remain subject to their accepted terms and applicable law. Property rules cannot remove these refund rights. Read this policy consistently with the Shoot Access and External Permissions Policy; mandatory law prevails. Except for direct Host permission for free clearing under section 10, any lawful, expressly agreed variation must be recorded before it takes effect.`,
  ],
];

function CancellationPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <article className="px-6 pb-28 pt-20 md:px-10 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">
            Draft 0.7 · 12 October 2026
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Cancellation Policy
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            This policy explains how DOOR handles cancellation, date changes and refunds for
            confirmed shoots with time-limited location access. DOOR means Door Platforms Private
            Limited; Host means the person offering the space; Creator means the person or
            production entity confirming the location.
          </p>
          <p className="mt-4 rounded-lg border border-primary/30 bg-primary/5 p-4 leading-7">
            Working draft: reflects the agreed cancellation rules, guaranteed 30-minute arrival
            buffer and refund timing. This review version is not yet a live website policy.
            Mandatory legal rights remain applicable.
          </p>
          {sections.map(([title, text]) => (
            <section key={title} className="mt-10">
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
              <p className="mt-4 whitespace-pre-line leading-7 text-muted-foreground">{text}</p>
            </section>
          ))}
          <p className="mt-12 border-t pt-6 text-sm text-muted-foreground">
            Door Platforms Private Limited · Questions:{" "}
            <a className="text-primary hover:underline" href="mailto:knock@doorplatforms.com">
              knock@doorplatforms.com
            </a>
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
