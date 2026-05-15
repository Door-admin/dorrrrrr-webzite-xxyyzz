interface Props {
  className?: string;
}

export function DoorKnobIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Escutcheon plate */}
      <rect
        x="22"
        y="14"
        width="20"
        height="36"
        rx="10"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      {/* Knob stem */}
      <rect
        x="29"
        y="28"
        width="6"
        height="10"
        fill="currentColor"
      />
      {/* Knob ball */}
      <circle
        cx="32"
        cy="24"
        r="7"
        fill="currentColor"
      />
      {/* Highlight on knob */}
      <circle cx="29.5" cy="21.5" r="1.6" fill="white" fillOpacity="0.6" />
    </svg>
  );
}
