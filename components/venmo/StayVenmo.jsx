import ProjectSectionHeader from "@/components/ProjectSectionHeader";
import Image from "next/image";
import React from "react";
import appmap from "public/images/venmo/appmap.png";
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
            image
              ? "transform xl:scale-150 sm:scale-125 scale-150 absolute z-50 2xl:w-max mx-auto"
              : ""
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
    <div className="max-w-screen-2xl">
      <div
        className="md:px-16 pb-16 pt-2"
        style={{
          backgroundColor: "#F5F2F0",
          boxShadow: "0 0 5px 10px #F5F2F0",
        }}
      >
        <ProjectSectionHeader header=" Let Venmo stay Venmo!" />
        <p className="mb-8">
          During our first team brainstorming, we had a bunch of discussions on
          where user can find the donation feature. First, we tried to switch it
          with the global news feed as most of our research participants stated
          that they don’t get its role at the Venmo app. But then we realized
          that our goal is to add a new feature and NOT CHANGE THE APP.
        </p>
        <p className="mb-12">
          The social feed is “the secret sauce” that makes Venmo unique and
          distinguish it among other money-sharing apps. So we ended up adding
          the button “donate to a charity” to the sidebar menu leaving the home
          page of the app untouched.
        </p>
        <Modal src={appmap} />
      </div>
    </div>
  );
}
