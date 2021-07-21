import ProjectSectionHeader from "@/components/projectDefaults/ProjectSectionHeader";
import Image from "next/image";
import React from "react";
import solutionFlow1 from "/public/images/bloom/solution-flow1.png";
import solutionFlow2 from "/public/images/bloom/solution-flow2.png";
export default function Solutions() {
  function Modal(props) {
    const [image, setImage] = React.useState(false);
    return (
      <div
        className="text-center cursor-pointer"
        onClick={() => setImage(!image)}
      >
        <div
          className={`relative ${
            image
              ? "transform xl:scale-150 sm:scale-125 scale-150 absolute z-50 2xl:w-max"
              : ""
          }`}
        >
          <Image
            alt="Problem analysis"
            src={props.src}
            quality={100}
            width={818}
            height={147}
            loading={"eager"}
            placeholder="blur"
          />
          <span
            className={`${
              image ? "block" : "hidden"
            } absolute cursor-pointer close-button`}
            onClick={() => setImage(!image)}
          >
            &times;
          </span>
        </div>
        <span className="italic my-6">(Click to enlarge)</span>
        <div
          className={`z-30 backdrop ${image ? "block" : "hidden"}`}
          onClick={() => setImage(false)}
        />
        <style jsx>{`
          .close-button {
            top: -10px;
            right: 4px;
            font-size: 36px;
          }
          .backdrop {
            position: absolute;
            top: 0;
            left: -600px;
            width: 400%;
            height: 200%;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(5px);
          }
          @media screen and (max-width: 540px) {
            .close-button {
              top: -10px;
              right: 0px;
              font-size: 20px;
            }
          }
        `}</style>
      </div>
    );
  }
  return (
    <div className="max-w-screen-2xl">
      <ProjectSectionHeader header="Solutions" />
      <div
        className="sm:px-16 px-2 py-16"
        style={{
          backgroundColor: "#F5F2F0",
          boxShadow: "0 0 5px 10px #F5F2F0",
        }}
      >
        <h3 className="italic text-center font-bold pb-10">
          Choose the right plant
        </h3>
        <p className="mb-10">
          As a plant location plays a significant role for user and affects
          plant’s well-being, it is crucial to start with. There are usually not
          many places in a house (apartment) where user would put his “new
          friend”. As soon as this place is chosen, the list of plants narrows
          down to ones that can survive consuming the amount of sunlight at that
          location. From there, user can filter the list according to his
          preferences as size, diificulty of care, bloom and pet friendliness.
        </p>
        <Modal src={solutionFlow1} />
      </div>
      {/* soulution2 */}
      <div
        className="sm:px-16 px-2 py-16 my-20"
        style={{
          backgroundColor: "#F5F2F0",
          boxShadow: "0 0 5px 10px #F5F2F0",
        }}
      >
        <h3 className="italic text-center font-bold pb-10">Take a good care</h3>
        <p className="mb-10">
          Most of the plants (if not all) reqiure consistent watering and
          fertilizing. The frequency may vary though, which makes it so hard to
          keep up with the schedule if there are more than one plant. The best
          solution to this problem is preset reminders that are unique to every
          single plant in the list and programmed by user depending on his
          personal schedule.
        </p>
        <Modal src={solutionFlow2} />
      </div>
    </div>
  );
}
