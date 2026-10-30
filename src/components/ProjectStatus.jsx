const statusStyles = {
  Live: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  "Source available": "border-sky-400/30 bg-sky-400/10 text-sky-300",
  "In progress": "border-amber-400/30 bg-amber-400/10 text-amber-300",
};

export default function ProjectStatus({ status, className = "" }) {
  const styles = statusStyles[status] ?? statusStyles["In progress"];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${styles} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {status}
    </span>
  );
}
