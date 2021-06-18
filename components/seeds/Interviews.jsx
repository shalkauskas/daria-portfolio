import ProjectSectionHeader from "../ProjectSectionHeader";
import Image from "next/image";
import React from "react";
import user from "public/images/learning-seeds/user.png";
import criteriaMatrix from "public/images/learning-seeds/criteria-matrix-big.png";
export default function Interviews() {
  const [image, setImage] = React.useState(false);
  const width = image ? 600 : 217;
  const height = image ? 800 : 319;
  return (
    <div>
      <ProjectSectionHeader header="Novice user interviews" />
      <p>
        In order to find out the habits surrounding seeking parenting
        information and resources, we conducted 4 interviews with parents who
        are not familiar with Learning Seeds and its methods. When we’ve
        collected all of the data, we synthesized it in two different ways.
      </p>
      <p className="my-12">
        First, I used the <b>empathy map</b> to identify what our novice user
        says, does, thinks and feels. The results have shown that our novice
        user:
      </p>
      <div className="text-center">
        <Image
          alt="User"
          src={user}
          quality={100}
          width={618}
          height={618}
          loading={"eager"}
          placeholder="blur"
        />
      </div>
      <p className="mt-20">
        The other method we used is creating a <b>criteria matrix</b> that
        allowed to go more into the details and learn people’s habits.
      </p>
      {/* criterea matrix */}
      <div
        className="2xl:px-20 lg:px-12 sm:px-6 px-4 py-16 my-16 flex lg:flex-row flex-col-reverse"
        style={{
          backgroundColor: "#F5F2F0",
          boxShadow: "0 0 5px 10px #F5F2F0",
        }}
      >
        {/* left */}
        <div
          className="text-center cursor-pointer px-8 my-auto mx-auto"
          onClick={() => setImage(!image)}
        >
          <div
            className={` mx-auto ${
              image
                ? "transform xl:scale-150 md:scale-125 sm:scale-110 scale-110 lg:absolute relative z-50 2xl:w-max left-0 right-0"
                : "relative"
            }`}
          >
            <Image
              alt="Comparative analysis"
              src={criteriaMatrix}
              quality={100}
              width={width}
              height={height}
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
        <hr className="mb-10 lg:hidden" />
        {/* right */}
        <div className="lg:w-3/4 sm:px-12 lg:border-l border-black mx-auto">
          <h3 className="text-left font-bold pb-10">Key points:</h3>
          <ul className="list-disc list-inside mb-12">
            <li>
              People tend to use a phone for less than 20 minutes throughout the
              day and they use the computer for 0.5-2 hours in the evening
            </li>
            <li>
              Effective types of content for online learning: a mix of audio and
              visual, video, interactive features like a webinar,
              speaker/presentation recordings, mixing text in with video and
              recording.
            </li>
            <li>
              Seeing their kids thrive is what creates the "magic moment" for
              parents - motivator
            </li>
            <li>
              Staying focused on kids and taking a step back mentally helps to
              manage challenging situations
            </li>
            <li>
              Discussing what’s been learned with others helps to make it an
              actionable piece of knowledge
            </li>
            <li>
              Seeing an idea with an image helps to anchor it in the mind to be
              recalled later
            </li>
          </ul>
        </div>
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
