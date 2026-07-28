export default function WaveDivider({
  fill = "#1c6b34",
  flip = false,
}: {
  fill?: string;
  flip?: boolean;
}) {
  return (
    <div className={flip ? "rotate-180" : ""} aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        className="block w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40 C 240 90, 480 0, 720 30 C 960 60, 1200 10, 1440 40 L1440 80 L0 80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
