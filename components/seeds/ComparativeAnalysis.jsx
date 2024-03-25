import ProjectSectionHeader from "../projectDefaults/ProjectSectionHeader";
import Image from "next/image";
import React from "react";
import compAnalysis from "public/images/learning-seeds/companalysis-big.png";
export default function ComparativeAnalysis() {
  const [image, setImage] = React.useState(false);
  return (
    <div>
      <ProjectSectionHeader>Comparative analysis</ProjectSectionHeader>
      <p className="mb-20">
        For the comparative analysis I reviewed other micro-courses at
        educational platforms like Udemy, Skillshare and GA along with the tip
        resource for parents Parents.com. I used such criteria as a layout,
        structuring of information, motivation and the habit cycle (referring to
        the book “The power of Habits” by Charles Duhigg).
      </p>
      <div
        className="text-center cursor-pointer"
        onClick={() => setImage(!image)}
      >
        <div
          className={`relative mx-auto ${
            image
              ? "transform xl:scale-150 md:scale-125 sm:scale-110 scale-110 absolute z-50 2xl:w-max"
              : ""
          }`}
        >
          <Image
            alt="Comparative analysis"
            src={compAnalysis}
            quality={100}
            width={754}
            height={416}
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
      </div>
      <div
        className="sm:px-24 px-2 py-16 my-16"
        style={{
          backgroundColor: "#F5F2F0",
          boxShadow: "0 0 5px 10px #F5F2F0",
        }}
      >
        <h3 className="text-center font-bold pb-10">
          Comparative analysis takeaways:
        </h3>
        <ul className="list-disc list-inside mb-12">
          <li>Videos and pdfs are the most common content formats </li>
          <li>The content is chunked into small pieces</li>
          <li>
            The way to invest or reflect can be represented by “community”
            section
          </li>
          <li>
            Call-to-action buttons are used as a trigger to start a course
          </li>
          <li>
            Users are often asked either to complete the same task for the
            second time after getting a block of knowledge or share work with
            others
          </li>
          <li>
            The feeling of doneness is an important part of motivation, so the
            indicator of progress should catch the eye
          </li>
          <li>
            All the lessons tend to end with an assessment of user’s retention
            of the material
          </li>
        </ul>
      </div>
      <style jsx>{`
        .close-button {
          top: -30px;
          right: -25px;
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
