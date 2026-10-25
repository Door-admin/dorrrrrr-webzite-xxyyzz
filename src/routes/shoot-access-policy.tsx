import { createFileRoute } from "@tanstack/react-router";
import { Footer, Header } from "./index";

export const Route = createFileRoute("/shoot-access-policy")({
  head: () => ({
    meta: [
      { title: "Shoot Access and External Permissions Policy | DOOR" },
      {
        name: "description",
        content:
          "DOOR's policy for shoot access, external permissions, approvals and interruptions.",
      },
    ],
  }),
  component: ShootAccessPolicyPage,
});

const sections = [
  [
    "1 Purpose and parties",
    `Door Platforms Private Limited operates the DOOR marketplace. The Host is the owner or person or entity authorized to provide the listed space. The Creator is the person or production entity named in the location confirmation and responsible for the shoot. A person acting for an entity must have authority to accept these terms on its behalf. A location confirmation records the agreed shoot access, scope, charges and applicable rights.

The Host grants property access directly to the Creator. DOOR facilitates discovery, approval, payment and location confirmation. DOOR does not become the property owner, tenant, production company or issuing authority by facilitating a confirmed shoot. Each party remains responsible for its own obligations and representations.`,
  ],
  [
    "2 Nature and limits of access",
    `The parties intend a limited contractual licence to enter and use only the approved areas for the agreed shoot, date and hours, subject to the arrival, extension and clearing rules below. No ownership, tenancy, continuing possession, residence or right to sublet or transfer access is granted. Physical access ends at the effective end defined below, including approved paid extensions, or on lawful termination, except for limited clearing expressly allowed under section 8. The Host retains control of the property, subject to the agreed access and privacy.

The approved location and shoot details must identify the property and included areas, date, scheduled start, duration, permitted activity, crew limit, equipment and material restrictions. Rooms, common areas, rooftops, parking, facilities and utilities are included only as stated. Loading, setup, filming, pack-down and restoration must fit within paid time, except for clearing expressly allowed under section 8.

Each confirmed shoot includes a 30-minute arrival buffer. The Host must be ready at the scheduled start and reserve the space through the scheduled start plus 30 minutes plus the paid duration. Verified first entry within those 30 minutes starts the full paid duration; the effective end is that entry time plus the duration. For a 10 a.m. two-hour shoot, entry at 10:20 a.m. means access ends at 12:20 p.m.

If no verified first entry occurs by the 30-minute deadline, available paid time reduces automatically from that deadline. DOOR does not automatically check anyone in or record a shoot start. The effective end is the deadline plus the confirmed duration; late entry gives only the remaining time. For the same shoot, the end is 12:30 p.m.; arrival at 10:45 a.m. leaves 1 hour 45 minutes.

At the deadline the status is “Not checked in”; DOOR should attempt contact. A no-show is assessed only if, without cancellation, no one attends or uses access throughout the applicable slot while the Host keeps the agreed access available. The Entry QR records actual first entry, not filming start. A delayed scan cannot create extra time; a failed scan must use verified fallback evidence. Early access needs approval. Host-caused delay must not consume the Creator’s paid duration and is handled under section 10.

The arrival buffer is included without overtime and is not a reschedule. Cancellation and rescheduling deadlines and financial bands remain tied to the scheduled start, regardless of check-in. The recorded effective end, including approved paid extensions, starts the 24-hour Host payout and post-shoot deposit-refund initiation windows. Host-approved free clearing does not change that end or restart those windows. Bank credit may take longer.`,
  ],
  [
    "3 Location confirmation and changes",
    `A Knock is a request. Host approval alone does not reserve the space unless a hold is expressly confirmed. The location is confirmed when the Host has approved the scope, the Creator has accepted the applicable terms, the required payment has succeeded and DOOR has issued confirmation. Where approved requests compete for the same availability, priority is determined by the first successful payment recorded by DOOR. DOOR must issue confirmation only for the priority request. An unsuccessful or duplicate request must not be treated as confirmed; any captured payment for access that cannot be supplied must be refunded.

Changes to paid hours, areas, activity, crew or equipment need the Host’s recorded approval. Any additional price or restriction must be accepted before the change takes effect and recorded by DOOR. Free clearing is governed by section 8. The arrival buffer in section 2 applies automatically; late entry does not extend the effective end. Payment for extra time does not replace required approval.`,
  ],
  [
    "4 Host authority and property obligations",
    `The Host must have authority to grant the specific access offered and obtain any necessary owner, landlord, co-owner, association or institutional consent within its responsibility. The Host must not list areas it cannot authorize. Institutional shoots require an appropriately authorized representative. A listing checkbox does not replace missing authority or a legally required property-side approval.

Before payment, the Host must accurately disclose relevant access restrictions, known hazards, permitted uses and any known property-related condition that may prevent the agreed shoot. The Host must provide the agreed access, keep access routes reasonably safe and cooperate with reasonable requests for property information needed for applicable approvals. A later restriction must be reported promptly; it cannot silently replace the agreed location and shoot details.`,
  ],
  [
    "5 External permissions and approvals",
    `Host approval, DOOR listing, payment, a location confirmation or an Entry QR is not a government, police, municipal or other regulatory permit or NOC. The Creator must identify, obtain and comply with approvals applicable to its production and activities before carrying out those activities, including any applicable conditions about filming, public spaces, traffic, noise, drones or special effects. Requirements depend on the location and activity. A small crew, mobile phone or camera does not by itself establish an exemption.

The Creator should raise approval questions through DOOR before payment and allow sufficient time for applications. Where assessment needs withheld location details, DOOR must arrange controlled sharing with the Host’s agreement or record an express permission contingency and its cancellation and refund conditions before payment. The Host must disclose known requirements and reasonably assist with information it is entitled to provide. Where an approval must legally be obtained by the Host or another specified applicant, that obligation remains with that applicant; it cannot be transferred merely by this policy. No party is required or authorized to proceed unlawfully.

Government charges, approval services and specialist coordination are outside the confirmed access arrangement unless expressly itemized and accepted. No such service or successful approval is promised by this policy. Each party must provide relevant evidence of an approval when reasonably needed for the shoot. If a required approval is absent, refused or withdrawn, the affected activity must not begin or continue; section 10 governs the consequences for the shoot.`,
  ],
  [
    "6 Creator conduct and safety",
    `The Creator must provide accurate shoot information, brief its crew and visitors, observe the approved limits and follow lawful safety directions. Stunts, weapons or replicas, smoke, fire, drones, generators, vehicle action, structural changes and other restricted activities require specific Host approval and any applicable external clearance. The Creator must protect the premises, avoid unauthorized entry or disturbance, keep exits clear and restore moved items. The Host may stop an immediate hazard; other breaches should be explained and, where safe and practical, an opportunity given to correct them.

If crew exceeds the approved limit, the Host may require additional people to leave or pause the shoot until safe, approved limits are restored. An approved increase into a higher crew tier changes the rate only for the affected hours. An excess crew does not by itself authorize automatic forfeiture of the entire amount paid.`,
  ],
  [
    "7 Filming rights and privacy",
    `The Host’s consent covers recording the agreed areas and using that footage for the disclosed project, to the extent the Host controls those rights. This consent for footage does not expire merely because physical access ends. It does not clear third-party artwork, music, brands, people or private records. The Creator must obtain applicable releases and protect personal information, including information about patients, students and staff. The Host must identify restrictions before approval. DOOR receives no publicity rights to the production’s footage under this policy.`,
  ],
  [
    "8 Price payment and overtime",
    `Before payment, checkout must show the access charge, DOOR fees, applicable taxes, included services, any deposit and the cancellation and overtime terms. Deposits apply only where requested by the Host; the Host proposes the amount and DOOR approves it before display. Collect it with the payment for the location, separately labelled refundable security deposit. It is security, not fee revenue. No undisclosed compulsory charge may be added afterward.

Overtime uses full-hour blocks at the normal hourly rate applicable to the approved crew tier, including the higher Professional or Production rate. The Host must approve a paid extension and the Creator must accept and pay through DOOR before extra time starts. The Creator has no automatic right to remain beyond the effective end.

The Host may directly and expressly allow free packing, clearing and departure until an agreed time, with no continued filming. No fixed free period is guaranteed and no in-app grace request is required. DOOR support may verify the Host’s confirmation and waive or remove the corresponding charge. Expressly free time must not be charged retrospectively. Outside that allowance, disclosed overtime rules apply; continued filming requires an approved paid extension. A missing or late checkout alone does not establish a final overtime charge.`,
  ],
  [
    "9 Cancellation and refunds",
    `A Creator’s voluntary cancellation is governed by the cancellation schedule displayed and accepted before payment, including the treatment of DOOR fees. If no schedule was disclosed, payments for unused access and related DOOR fees must be refunded; undisclosed cancellation or administration charges may not be retained. Any separately requested and already delivered service may be charged only at its accepted price, subject to applicable law.

If the Host cancels or cannot provide the agreed access for a reason not attributable to a Creator cause under section 10, the Creator may choose an offered replacement or reschedule, or receive a refund for undelivered access, undelivered extras and related DOOR fees. No substitute location or credit is compulsory. Refunds include applicable tax adjustments and any deposit balance not supported by a valid claim. Mandatory legal rights prevail over a cancellation schedule.`,
  ],
  [
    "10 Interrupted or prevented shoots",
    `Stop any unsafe or unlawful activity, inform the Host and DOOR promptly and preserve relevant messages, time records and the reason for intervention. Resume only when lawful and safe.

Responsibility depends on the cause, not merely on whether police, an association, a neighbour or another person intervened.

Creator cause. If the Creator’s missing activity approval, inaccurate disclosure or breach prevents the shoot, the Host is not automatically responsible for production losses. Apply the disclosed cancellation or interruption terms, credit access already delivered and avoid double recovery. If no applicable terms were disclosed, section 9’s refund fallback applies to the unused portion. No undisclosed fine or automatic deposit forfeiture is permitted. A disputed charge remains subject to evidence and law.

Host or DOOR cause. Missing Host authority, a material undisclosed property restriction or refusal of agreed access is a Host-side failure. DOOR remains responsible for its own location confirmation, payment or representation errors. Refund undelivered access, undelivered extras and associated DOOR fees; other remedies depend on the breach and applicable law. A refund does not automatically release other valid claims.

External cause without party fault. For an unexpected closure or other event beyond the parties’ reasonable control, first offer a workable reschedule. If it is not agreed, refund unused access, undelivered extras and related DOOR fees. Usable access actually supplied may be charged at the accepted rate; use a proportionate allocation for a package price. Do not transfer all losses automatically to either party.

For mixed or disputed causes, DOOR will collect both accounts and relevant evidence, explain its determination of the shoot dispute and release undisputed sums promptly. This process does not replace an independent legal remedy. Any retention of disputed funds must have a lawful basis and be limited to the disputed amount.`,
  ],
  [
    "11 Damage and deposit claims",
    `Document the approved areas at entry and exit within paid time where practical. Record actual departure accurately; expiry does not automatically check anyone out. The Creator is responsible for damage attributable to its breach or negligence or that of its crew or visitors, excluding pre-existing damage and ordinary wear. The Host must report visible damage at checkout or within 12 hours after the effective end, with evidence and an itemized reasonable repair or replacement basis. The Creator has 48 hours from receiving the claim to respond; silence alone is not an admission.

Report hidden damage promptly after discovery for separate review. These reporting windows do not automatically extinguish valid legal claims. Additional cleaning is chargeable only for exceptional mess or failure to restore the agreed condition, using reasonable evidenced extra costs under terms accepted before payment; ordinary cleaning is not an automatic extra charge.

DOOR initiates the undisputed deposit refund as soon as checkout is cleared and within 24 hours after the effective end, including approved paid extensions but not free clearing. Hold only an evidenced disputed amount and refund the remainder within the same window. The 24 hours is a maximum, not a required wait. A deposit is neither automatic compensation nor an automatic liability cap; later claims do not automatically reverse a refund already initiated.`,
  ],
  [
    "12 Responsibilities and limits",
    `Neither the Host nor DOOR guarantees that an authority will approve a production or that no external intervention will occur. Each party is responsible only to the extent provided by its obligations, conduct and applicable law. This policy does not make the Host or DOOR an insurer of the Creator’s production budget, equipment or anticipated earnings. It does not promise reimbursement of crew, travel, equipment or other production costs merely because a shoot is interrupted.

These limits do not excuse a party’s own breach, fraud, misrepresentation or negligence, remove liability that cannot lawfully be excluded, or override an available statutory remedy. The Creator’s obligation to obtain production approvals does not remove the Host’s property obligations or DOOR’s service obligations. An access refund and a claim for additional loss must be assessed separately. Parties must take reasonable steps to reduce avoidable loss.`,
  ],
  [
    "13 Electronic acceptance",
    `The Host must accept this policy when offering access and approve each shoot’s specific scope. Before paying, the Creator must be able to read and download this policy, the property rules and the location and shoot details, and actively accept the relevant terms through unticked checkboxes or an equivalent affirmative action. DOOR must retain the accepted wording, policy version, user identity, time of acceptance, Host approval and approved amendments.

Electronic acceptance records the agreement but does not replace another formality required by law. Material changes to a confirmed shoot require the affected parties’ recorded agreement. Revised general policies apply prospectively; the version accepted for an existing confirmed shoot remains its reference unless a lawful, expressly accepted variation applies.`,
  ],
  [
    "14 Confirmation documents and communication",
    `After confirmation, DOOR must send the location confirmation, accepted property rules and applicable policies to the Creator’s nominated email and the Host’s registered email, and make copies available with the confirmed shoot in the app. The confirmation must identify the parties, shoot reference, property and included areas, date, scheduled start, duration, arrival buffer and recorded effective end when established, approved activity, crew and equipment limits, accepted charges and any recorded special conditions.

Relevant payment documentation must also be provided. The confirmation document must identify itself as a location confirmation for the approved shoot, areas, date and hours and state that it is not a government permit or NOC. The final page with the Entry QR may say “Your location is confirmed” only after the confirmation requirements in section 3 are met. This is not a record of attendance or filming start. Keep a fixed copy of the accepted terms and send updated confirmation after an accepted material amendment. Parties must maintain working contact details and report missing or incorrect documents promptly. Personal information is handled under DOOR’s Privacy Policy and applicable law.`,
  ],
  [
    "15 Support disputes and refunds",
    `Raise a shoot issue through the support contact shown in the app or confirmation, quoting the shoot reference and relevant evidence. DOOR must publish accessible support and grievance contact details and communicate the outcome and reasons. Initiate undisputed cancellation refunds within two working days and undisputed post-shoot deposit refunds within section 11’s 24-hour window, normally to the original payment method. Bank credit may take longer; disclose expected processing time and comply with applicable timelines. Contact support promptly for a failed refund; a complaint does not waive legal rights.`,
  ],
  [
    "16 How these terms work together",
    `Applicable Indian law prevails. The accepted location and shoot details specify scope and price; property rules govern conduct within that scope. This policy governs time-limited shoot access, external approvals and interruption handling. A general property rule cannot remove the remedies in this policy. DOOR’s other accepted terms apply where consistent. An invalid provision does not invalidate the remaining provisions so far as they can operate lawfully. Disputes may be taken to a competent court, consumer forum where applicable or other legally available authority. Nothing requires a party to waive a statutory forum or remedy.`,
  ],
];

function ShootAccessPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <article className="px-6 pb-28 pt-20 md:px-10 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">
            Version 1.4 · 12 October 2026
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            DOOR Shoot Access and External Permissions Policy
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A DOOR location confirmation provides the Host’s permission to access the approved areas
            for the agreed shoot, date and hours. It does not include government, police or other
            regulatory approval. Read this policy with the property rules and location and shoot
            details before payment.
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
