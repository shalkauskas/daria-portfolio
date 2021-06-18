import Image from "next/image";
import ProjectSectionHeader from "@/components/ProjectSectionHeader";
import sketch1 from "public/images/venmo/sketch1.jpg";
import sketch2 from "public/images/venmo/sketch2.jpg";
export default function ButtonCheckbox() {
  return (
    <div>
      <ProjectSectionHeader header="Button VS Checkbox" />
      <p className="my-12">
        While drawing first sketches, I was hesitating whether “ donate $1”
        should be a button that changes color/opacity after click or a checkbox.
        To find out what works better for users I ran some usability tests.
      </p>
      <div className="my-16 flex">
        <div className="ml-auto mr-12 shadow-lg border">
          <Image
            alt="Sketch"
            src={sketch1}
            quality={100}
            width={243}
            height={300}
            loading={"eager"}
            placeholder="blur"
          />
        </div>

        <div className="mr-auto ml-12 shadow-lg border">
          <Image
            alt="Sketch"
            src={sketch2}
            quality={100}
            width={243}
            height={300}
            loading={"eager"}
            placeholder="blur"
          />
        </div>
      </div>
      <p className="my-12">
        The feedback I got, has shown that when users see the button, they
        expect it to send them to another page (which makes it unnecessary
        complicated). The checkbox indicates that the action can be made with 1
        click.
      </p>
    </div>
  );
}
