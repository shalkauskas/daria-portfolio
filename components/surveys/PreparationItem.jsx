import { twMerge } from "tailwind-merge";

export function PreparationItem({ number, title, children, className }) {
  return (
    <div className={twMerge(`py-4`, className)}>
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-5xl font-semibold" style={{ color: "#3E7979" }}>
          {number}.
        </h2>
        <h2 className="text-4xl">{title}</h2>
      </div>

      <p>{children}</p>
    </div>
  );
}
