export function MethodsInfoBox() {
  const wrapperClasses =
    "flex justify-center items-center gap-4 sm:flex-row flex-col mt-16";
  const itemContainer = "flex justify-center flex-col text-center";
  const itemBig = "text-5xl font-semibold";
  const itemSmall = "text-2xl";
  const symbols = "text-6xl font-semibold text-center mx-4";
  return (
    <div className={wrapperClasses}>
      <div className={itemContainer}>
        <p className={itemBig}>1832</p>
        <p className={itemSmall}>Survey Responders</p>
      </div>
      <p className={symbols}>+</p>
      <div className={itemContainer}>
        <p className={itemBig}>10</p>
        <p className={itemSmall}>User Interviews</p>
      </div>
      <p className={symbols}>=</p>
      <div className={`${itemContainer} w-60`}>
        <p className="text-4xl font-semibold text-center">
          Data-Driven Solutions
        </p>
      </div>
    </div>
  );
}
