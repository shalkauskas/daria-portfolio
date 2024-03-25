import ProjectSectionHeader from "@/components/projectDefaults/ProjectSectionHeader";
import Image from "next/image";
import React from "react";
import flow from "public/images/venmo/flow1.png";
export default function Venmo(props) {
  function Modal(props) {
    const [image, setImage] = React.useState(false);
    return (
      <div
        className="text-center cursor-pointer"
        onClick={() => setImage(!image)}
      >
        <div
          className={`relative ${
            image &&
            "transform xl:scale-150 sm:scale-125 scale-150 absolute z-50 2xl:w-max mx-auto"
          }`}
        >
          <Image
            alt="Problem analysis"
            src={props.src}
            quality={100}
            width={259}
            height={419}
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
    <div className="max-w-screen-2xl mb-24">
      <div
        className="md:px-16 pb-16 pt-2"
        style={{
          backgroundColor: "#F5F2F0",
          boxShadow: "0 0 5px 10px #F5F2F0",
        }}
      >
        <ProjectSectionHeader>The “1$” concept</ProjectSectionHeader>
        <ul className="list-disc list-inside mb-10">
          <li>One dollar is the amount that wouldn’t hurt anyone’s budget.</li>
          <li>
            When you are asked for just a dollar you don’t feel that much
            pressure.
          </li>
          <li>
            According to the interview answers, people, who do not tend to
            donate consciously, still make small donations when they are asked
            to do so, For example, at the cashier while doing the grocery
            shopping.
          </li>
          <li>
            One dollar means a lot for charity. Currently, there over 20 million
            users of the Venmo app. Just imagine: if at least 20% of • Venmo
            users donate a dollar the amount will be $4 million! Pretty
            impressive. huh?
          </li>
        </ul>
        <Modal src={flow} />
      </div>
    </div>
  );
}
