import { PreparationItem } from "./PreparationItem";

export function PreparationStep() {
  const firstLastRowClasses =
    "flex flex-col justify-between h-full items-center";
  return (
    <div className="grid grid-cols-3 items-center gap-4">
      <div className={firstLastRowClasses}>
        <PreparationItem number={"1"} title={"Assessments"}>
          Explore how users envision using custom batteries of assessments and
          templates to make their workflow more efficient.
        </PreparationItem>

        <PreparationItem number={"0"} title={""} className={"invisible"}>
          Find out the cause of confusion users have when they  submit their
          approvals.
        </PreparationItem>

        <PreparationItem number={"2"} title={"Activities"}>
           Learn more about users’ challenges when they enter and edit
          activities and thoughts about the better logic (there were few
          suggestions to associate clients with treatment settings, etc.)
        </PreparationItem>
      </div>

      <div className={firstLastRowClasses}>
        <PreparationItem number={"0"} title={""} className={"invisible"}>
          Find out the cause of confusion users have when they  submit their
          approvals.
        </PreparationItem>

        <PreparationItem number={"3"} title={"Approvals"}>
          Find out the cause of confusion users have when they  submit their
          approvals.
        </PreparationItem>

        <PreparationItem number={"0"} title={""} className={"invisible"}>
          Find out the cause of confusion users have when they  submit their
          approvals.
        </PreparationItem>
      </div>

      <div className={firstLastRowClasses}>
        <PreparationItem number={"4"} title={"My Account"}>
          Understand why users have a hard time changing their accounts.
        </PreparationItem>
        {/* 
        <PreparationItem number={"3"} title={"Approvals"}>
          Find out the cause of confusion users have when they submit their
          approvals.
        </PreparationItem> */}

        <PreparationItem number={"5"} title={"Mobile"}>
          Find out what features users prefer using on mobile vs desktop,
          understand why and learn what features they do want to use on mobile.
        </PreparationItem>
      </div>
    </div>
  );
}
