import ProjectSectionHeader from "../ProjectSectionHeader";
import Image from "next/image";
export default function ProjectOverview() {
  return (
    <div className="text-justify pb-20">
      <ProjectSectionHeader header="Usability testing" />

      <p>
        The very first issue in the prototype I noticed was in the demo. Three
        dots that were supposed to show the progress through the demo and give a
        hint that screens need to slide from the right did not work out. Users
        were lost and tried to exit after the first instruction. As a result, I
        switched from dots to an arrow and added numeration to point the user
        his “location” at the demo.
      </p>

      <div className="flex flex-row justify-center my-20">
        <Image
          alt="Usability testing"
          src="/images/bloom/use-test1.png"
          quality={100}
          width={262}
          height={460}
          loading={"eager"}
        />
        <div className="my-auto sm:mx-8 mx-2">
          <Image
            alt="right arrow"
            src="/images/right-arrow.png"
            quality={100}
            width={60}
            height={42}
            loading={"eager"}
          />
        </div>

        <Image
          alt="Usability testing"
          src="/images/bloom/use-test2.png"
          quality={100}
          width={262}
          height={460}
          loading={"eager"}
        />
        <div className="my-auto sm:mx-8 mx-2">
          <Image
            alt="right arrow"
            src="/images/right-arrow.png"
            quality={100}
            width={60}
            height={42}
            loading={"eager"}
          />
        </div>

        <Image
          alt="Usability testing"
          src="/images/bloom/use-test3.png"
          quality={100}
          width={262}
          height={460}
          loading={"eager"}
        />
      </div>
      <hr className="mb-20" />
      {/* <p>
        The initial design for the page of the plant that was already added in
        “my plants” list included only reminders settings and no information
        about the plant at all. I have no idea how could I missed it! I am
        really thankful to the users who pointed it to me as I had a chance to
        add a description and care instructions that play an important role in
        the app.
      </p>

      <div className="flex flex-row justify-center my-20">
        <Image
          alt="Usability testing"
          src="/images/bloom/use-test4.png"
          quality={100}
          width={308}
          height={802}
          loading={"eager"}
        />
        <div className="my-auto sm:mx-8 mx-2">
          <Image
            alt="right arrow"
            src="/images/right-arrow.png"
            quality={100}
            width={60}
            height={42}
            loading={"eager"}
          />
        </div>
        <div className="flex-grow-0 my-auto">
          <Image
            alt="Usability testing"
            src="/images/bloom/use-test5.png"
            quality={100}
            width={308}
            height={535}
            loading={"eager"}
          />
        </div>
      </div>
      <hr className="mb-20" /> */}
      <p className="mb-6">
        Probably the biggest challenge I faced was the location and design of
        the “add to my plants” button. I made a few variations and had a new
        cycle of testing after each twig.{" "}
      </p>
      <p className="mb-6">
        First, I placed it as just an icon in the right upper corner and almost
        everyone could not find it during the test.{" "}
      </p>
      <p className="mb-6">
        Then I moved it to the center and put the text next to the icon. The
        results were much better, but still not good enough. Moreover, placing
        the button in the center of the screen makes it inconvenient to press so
        that was a bad idea.{" "}
      </p>
      <p>
        The decision to put this button along with the main “go shopping” button
        looked pretty obvious for me. However, my concern was whether or not it
        will look like these buttons are equal. To avoid this misunderstanding,
        I decided to make “add” button little smaller, showing that “go
        shopping” is still dominant and more important.
      </p>

      <div className="flex flex-row justify-center my-20">
        <Image
          alt="Usability testing"
          src="/images/bloom/use-test6.png"
          quality={100}
          width={262}
          height={460}
          loading={"eager"}
        />
        <div className="my-auto sm:mx-8 mx-2">
          <Image
            alt="right arrow"
            src="/images/right-arrow.png"
            quality={100}
            width={60}
            height={42}
            loading={"eager"}
          />
        </div>

        <Image
          alt="Usability testing"
          src="/images/bloom/use-test7.png"
          quality={100}
          width={262}
          height={460}
          loading={"eager"}
        />
        <div className="my-auto sm:mx-8 mx-2">
          <Image
            alt="right arrow"
            src="/images/right-arrow.png"
            quality={100}
            width={60}
            height={42}
            loading={"eager"}
          />
        </div>

        <Image
          alt="Usability testing"
          src="/images/bloom/use-test8.png"
          quality={100}
          width={262}
          height={460}
          loading={"eager"}
        />
      </div>
      <style jsx>{`
        .shadow-img {
          box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
}
