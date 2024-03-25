import Image from "next/image";
import ProjectSectionHeader from "@/components/projectDefaults/ProjectSectionHeader";
import iteration1 from "public/images/venmo/iteration1.png";
import iteration2 from "public/images/venmo/iteration2.png";
import iteration3 from "public/images/venmo/iteration3.png";
export default function ButtonCheckbox() {
  return (
    <div className="mb-24">
      <ProjectSectionHeader>Iterations</ProjectSectionHeader>
      <div className="my-16 flex">
        <div className="ml-auto shadow-lg">
          <Image
            alt="Iterations"
            src={iteration1}
            quality={100}
            width={208}
            height={363}
            loading={"eager"}
            placeholder="blur"
          />
        </div>

        <div className="mx-6 md:mx-16 shadow-lg">
          <Image
            alt="Iterations"
            src={iteration2}
            quality={100}
            width={208}
            height={363}
            loading={"eager"}
            placeholder="blur"
          />
        </div>
        <div className="mr-auto shadow-lg">
          <Image
            alt="Iterations"
            src={iteration3}
            quality={100}
            width={208}
            height={363}
            loading={"eager"}
            placeholder="blur"
          />
        </div>
      </div>
      <p className="my-12">
        <b>Logo :</b> At our first wireframes, we tried to make the charity
        organization logo stand out, so we had it in a square. During some
        usability tests (I personally conducted 4 of them), we received feedback
        that the square logo doesn’t blend in with Venmo's interface and looks
        wrong. We listened and switched to the round shape that is used
        everywhere throughout the app.
      </p>
      <p className="my-12">
        <b>“Donate” button:</b> The common question from our users was: "What if
        I want to donate more than a dollar?". Our team had lots of discussions
        regarding this issue. First, we tried to switch to just "Donate".
        However, we got an insight that users still need to have an easy path.
        As a result, we ended up with keeping both ways to please both our
        personas.
      </p>
    </div>
  );
}
