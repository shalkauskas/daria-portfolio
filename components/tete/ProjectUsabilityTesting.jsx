import ProjectSectionHeader from "../projectDefaults/ProjectSectionHeader";
import Image from "next/image";
import test1 from "/public/images/tete-a-tete/test1.png";
import test2 from "/public/images/tete-a-tete/test2.png";
import test3 from "/public/images/tete-a-tete/test3.png";
import test4 from "/public/images/tete-a-tete/test4.png";
import test5 from "/public/images/tete-a-tete/test5.png";
import test6 from "/public/images/tete-a-tete/test6.png";
import test7 from "/public/images/tete-a-tete/test7.png";
import arrowTopRight from "public/images/tete-a-tete/arrow-top-right.png";
import cross from "public/images/tete-a-tete/cross.png";
import v from "public/images/tete-a-tete/v.png";
export default function ProjectOverview() {
  return (
    <div>
      {/* usability tesing */}
      <ProjectSectionHeader header="Usability testing" />
      {/* 1 */}
      <div className="flex md:flex-row flex-col">
        <div className="w-1/2 mx-auto">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-9/12 hidden md:block mx-auto"
          >
            <source src="images/tete-a-tete/challenge.webm" type="video/webm" />
            <source src="images/tete-a-tete/challenge.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="md:w-1/2">
          <h3 className="font-bold text-center pb-3">
            1. Layout & responsiveness challenge
          </h3>
          <p>
            The biggest issue for me was designing the most important part of
            the website – <b>list of services</b> as it{" "}
            <b>had to be visible and easily accessible on all platforms.</b>{" "}
            I’ve tried various ways of displaying them – buttons on a single
            background, images with text descriptions scrolled to the sides and
            images with text stacked under each other. The last one turned out
            to be the most user friendly and fits well both desktop and mobile
            versions.
          </p>
        </div>
      </div>
      {/* 2 */}
      <div className="flex md:flex-row flex-col my-20">
        <div className="mb-12 mx-auto">
          <Image
            src={test1}
            width={358}
            height={312}
            alt="website usability testing"
            loading={"eager"}
            placeholder="blur"
          />
        </div>
        <div className="mx-auto">
          <Image
            src={test2}
            width={439}
            height={312}
            alt="website usability testing"
            loading={"eager"}
            placeholder="blur"
          />
        </div>
      </div>
      <hr />
      {/* 3 */}
      <div className="my-24">
        <p className="pb-10">
          <b>2. The signifier for sliding interaction</b> represented by three
          dots wasn’t clear for users. As a result, I got rid of dots and made
          menu items clickable while still maintaining screens’ ability to
          slide.
        </p>
        <div className="flex md:flex-row flex-col">
          <div className="w-1/2 md:ml-32 text-center ml-auto mr-auto mb-6">
            <Image
              src={test3}
              width={189}
              height={417}
              alt="website usability testing"
              loading={"eager"}
              placeholder="blur"
            />
          </div>
          <div className="w-1/2 md:mr-32 md:ml-12 ml-auto mr-auto text-center">
            <Image
              src={test4}
              width={189}
              height={417}
              alt="website usability testing"
              loading={"eager"}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <hr />
      {/* 4 */}
      <div className="my-24">
        <p className="pb-10">
          <b>3. The fixed header that folds in</b> as you scroll down is a great
          idea which I picked up from the original Tete-A-Tete website. While it
          is providing constant access to site navigation it gets thinner and
          saves the valuable space for the content. However, according to user
          insights the fact that the name of the salon, its logo, simply
          disappears when you scroll looks like a system error and leaves users
          confused. To avoid poor readability caused by reducing size of the
          logo I chose to make a transition from logo (initial state) to a text
          title.
        </p>
        <div className="flex flex-row">
          <div className="ml-auto">
            <Image
              src={test5}
              width={218}
              height={448}
              alt="website usability testing"
              loading={"eager"}
              placeholder="blur"
            />
          </div>
          <div className="md:mt-12 mt-3 mx-3">
            <Image
              src={arrowTopRight}
              width={90}
              height={20}
              alt="arrow right"
              loading={"eager"}
              placeholder="blur"
            />
          </div>
          <div className="md:mt-3 mt-1">
            <Image
              src={cross}
              width={30}
              height={30}
              alt="wrong"
              loading={"eager"}
            />
          </div>
          <div className="md:mx-3 mx-1">
            <Image
              src={test6}
              width={218}
              height={448}
              alt="website usability testing"
              loading={"eager"}
              placeholder="blur"
            />
          </div>
          <div className="md:mt-3 mt-1">
            <Image
              src={v}
              width={30}
              height={30}
              alt="right"
              loading={"eager"}
            />
          </div>
          <div className="ml-3 mr-auto">
            <Image
              src={test7}
              width={218}
              height={448}
              alt="website usability testing"
              loading={"eager"}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
