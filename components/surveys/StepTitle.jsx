export function StepTitle({ children }) {
  return (
    <div className="mt-8 mb-6 flex items-center gap-2">
      <span
        className="w-3 h-3 inline-block rounded-full"
        style={{ backgroundColor: "#3E7979" }}
      />
      <h3 className="font-bold text-xl">{children}</h3>
    </div>
  );
}
