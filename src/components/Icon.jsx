const icons = {
  db: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="2.4" />
      <path d="M5 6v12c0 1.3 3.1 2.4 7 2.4s7-1.1 7-2.4V6" />
      <path d="M5 12c0 1.3 3.1 2.4 7 2.4s7-1.1 7-2.4" />
    </>
  ),
  spec: (
    <>
      <path d="M7 3.5h7.2L19 8.2V20.5H7z" />
      <path d="M14.2 3.5V8.2H19" />
      <path d="M10 12h6M10 15.5h4.5" />
    </>
  ),
  web: (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <path d="M3.5 9h17" />
      <circle cx="6.4" cy="7" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="8.4" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  dsa: (
    <>
      <circle cx="7" cy="7" r="2.2" />
      <circle cx="17" cy="7" r="2.2" />
      <circle cx="12" cy="17" r="2.2" />
      <path d="M8.8 8.6 11 15.2M15.2 8.6 13 15.2M9.2 7h5.6" />
    </>
  ),
  js: (
    <>
      <path d="M8 6 4.5 12 8 18" />
      <path d="M16 6l3.5 6L16 18" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="6" width="17" height="12" rx="2" />
      <path d="m5 8 7 5 7-5" />
    </>
  ),
  chat: (
    <>
      <path d="M5 6.5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H10l-4 3.2V8.5a2 2 0 0 1 2-2z" />
      <path d="M8.5 11.2h7M8.5 14h4.5" />
    </>
  ),
  phone: (
    <>
      <path d="M8 3.5h3.2l1.2 3.2-2 1.4a11 11 0 0 0 5.5 5.5l1.4-2 3.2 1.2V16a2 2 0 0 1-2.2 2A15 15 0 0 1 4 7.2 2 2 0 0 1 6 5h2z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.5-6.1 6.5-11A6.5 6.5 0 0 0 5.5 10c0 4.9 6.5 11 6.5 11z" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  git: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.4 16.8V11.2a2.2 2.2 0 0 1 2.2-2.2h3.4" />
      <path d="M13.2 7.2 15.4 9l-2.2 1.8" />
    </>
  ),
  ui: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 15.5 14.2 8.2l2.3 2.2" />
      <path d="M14.2 8.2l1.6-1.6 2.1 2.1-1.6 1.6" />
    </>
  ),
  brand: (
    <>
      <path d="M12 3.5 20 12l-8 8.5L4 12z" />
      <path d="M12 8v8M8.5 12h7" />
    </>
  ),
  girl: (
    <>
      <path
        d="M8.4 10.8c0-3.4 1.6-6.4 3.6-6.4s3.6 3 3.6 6.4c0 1.4-.4 2.4-1.2 2.8"
        fill="currentColor"
        stroke="none"
      />
      <circle cx="12" cy="8.6" r="2.7" fill="currentColor" stroke="none" />
      <path
        d="M5.6 20c1.1-4.2 3.4-6.2 6.4-6.2s5.3 2 6.4 6.2"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),
  man: (
    <>
      <circle cx="12" cy="8" r="3.3" fill="currentColor" stroke="none" />
      <path
        d="M5.6 20c.9-4.3 3.2-6.4 6.4-6.4s5.5 2.1 6.4 6.4"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),
};

export default function Icon({ name, size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name] ?? icons.web}
    </svg>
  );
}
