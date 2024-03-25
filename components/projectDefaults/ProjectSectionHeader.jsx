import { twMerge } from "tailwind-merge";

export default function ProjectSectionHeader({ children, className }) {
  return (
    <h3
      className={twMerge(
        `font-bold text-center text-2xl mb-6 sm:mt-24 mt-16`,
        className
      )}
    >
      {children}
    </h3>
  );
}
