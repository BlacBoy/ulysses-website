export default function Mark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="24" fill="#1c6b34" />
      <path
        d="M20 12h8v8.5l6.5 12a3 3 0 0 1-2.6 4.5H16.1a3 3 0 0 1-2.6-4.5l6.5-12V12Z"
        stroke="#faf8f2"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M18.5 28.5h11" stroke="#faf8f2" strokeWidth="1.4" />
      <path d="M20 12h8" stroke="#faf8f2" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
