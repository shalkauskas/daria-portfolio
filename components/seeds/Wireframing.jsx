import Image from "next/image";
import ProjectSectionHeader from "@/components/ProjectSectionHeader";
import React from "react";
import wire1 from "public/images/learning-seeds/wire1.png";
import wire2 from "public/images/learning-seeds/wire2.png";
import wire3 from "public/images/learning-seeds/wire3.png";
import wire4 from "public/images/learning-seeds/wire4.png";
import wire5 from "public/images/learning-seeds/wire5.png";
import arrow from "public/images/arrow_icon.png";
import mockup1 from "public/images/learning-seeds/mockup1-big.png";
import mockup2 from "public/images/learning-seeds/mockup2-big.png";
export default function Wireframing() {
  const [slide, setSlide] = React.useState(1);
  return (
    <div className="">
      <ProjectSectionHeader header="Wireframing & Usability testing" />
      <p>
        When our initial mid-fidelity wireframes were ready, we conducted 7
        usability tests. During these tests, we got valuable feedback that we
        implemented making iterations and creating new version that was
        eventually used for a prototype.
      </p>
      <p className="my-12">
        1. Some of the users mentioned that they are often annoyed by having to
        create an account so we added an ability to sign in with Google and
        Facebook.
      </p>
      <div className="my-16 flex">
        <div className="ml-auto">
          <Image
            alt="Wireframe"
            src={wire1}
            quality={100}
            width={432}
            height={273}
            loading={"eager"}
            placeholder="blur"
          />
        </div>

        <div className="mr-auto sm:ml-12 ml-2">
          <Image
            alt="Wireframe"
            src={wire2}
            quality={100}
            width={432}
            height={273}
            loading={"eager"}
            placeholder="blur"
          />
        </div>
      </div>
      <hr />
      <p className="my-12">
        2. Some of the screens were defined as "text-heavy". The solution we
        found is to hide extra text to an infographic where the user can hover
        over the bubbles to see the content.
      </p>
      <div className="my-16 flex">
        <div className="ml-auto">
          <Image
            alt="Wireframe"
            src={wire3}
            quality={100}
            width={432}
            height={273}
            loading={"eager"}
            placeholder="blur"
          />
        </div>

        <div className="mr-auto sm:ml-12 ml-2">
          <Image
            alt="Wireframe"
            src={wire4}
            quality={100}
            width={432}
            height={273}
            loading={"eager"}
            placeholder="blur"
          />
        </div>
      </div>
      <hr />
      <p className="my-12">
        3. As for the sidebar we initially had it changing depending on the page
        that the user is currently on, but users were generally confused by
        this, so we changed the sidebar to have consistent navigation.
      </p>
      <div className="my-16 text-center">
        <Image
          alt="Wireframe"
          src={wire5}
          quality={100}
          width={428}
          height={394}
          loading={"eager"}
          placeholder="blur"
        />
      </div>
      <div className="mb-24">
        <ProjectSectionHeader header="Mock-ups" />
        <p className="my-12">
          Due to the time constraints, we did not have enough usability tests to
          bring the whole prototype to high fidelity. However, some of the
          screens were clearly successful according to users' feedback, so we
          created few mock-ups to demonstrate to the client how the existing
          style guide of Learning Seeds can be implemented for this particular
          product.
        </p>
        <div className="my-16 justify-center flex">
          <div
            onClick={() => setSlide(1)}
            className={`my-auto transform rotate-180 mr-4 flex-shrink-0 ${
              slide == 1 ? "opacity-50" : "cursor-pointer"
            }`}
          >
            <Image
              alt="Arrow left"
              src={arrow}
              quality={100}
              width={30}
              height={30}
              loading={"eager"}
              placeholder="blur"
            />
          </div>

          <div className="relative">
            <div
              className={`${
                slide == 1
                  ? "absolute top-0 bottom-0 transition-all duration-500 ease-in-out"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <Image
                alt="Mockup"
                src={mockup1}
                quality={100}
                width={819}
                height={515}
                loading={"eager"}
                placeholder="blur"
              />
            </div>
            <div
              className={`${
                slide == 2
                  ? "absolute top-0 bottom-0 transition-all duration-500 ease-in-out"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <Image
                alt="Mockup"
                src={mockup2}
                quality={100}
                width={819}
                height={515}
                loading={"eager"}
                placeholder="blur"
              />
            </div>
          </div>

          <div
            onClick={() => setSlide(2)}
            className={`my-auto ml-4 flex-shrink-0 ${
              slide == 2 ? "opacity-50" : "cursor-pointer"
            }`}
          >
            <Image
              alt="Arrow right"
              src={arrow}
              quality={100}
              width={30}
              height={30}
              loading={"eager"}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
