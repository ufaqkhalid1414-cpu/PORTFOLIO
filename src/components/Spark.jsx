export default function Spark({ size = 22 }) {
  /* 8 thin soft white rays — sample nav logo */
  const rays = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4;
    const x1 = 16 + Math.cos(a) * 3.2;
    const y1 = 16 + Math.sin(a) * 3.2;
    const x2 = 16 + Math.cos(a) * 13.2;
    const y2 = 16 + Math.sin(a) * 13.2;
    return (
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    );
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      {rays}
    </svg>
  );
}
