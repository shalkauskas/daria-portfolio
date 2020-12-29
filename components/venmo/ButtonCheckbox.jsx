import Image from "next/image";
import ProjectSectionHeader from "@/components/ProjectSectionHeader";
export default function ButtonCheckbox() {
  return (
    <div className="">
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
            src="/images/venmo/sketch1.jpg"
            quality={100}
            width={243}
            height={300}
          />
        </div>

        <div className="mr-auto ml-12 shadow-lg border">
          <Image
            alt="Sketch"
            src="/images/venmo/sketch2.jpg"
            quality={100}
            width={243}
            height={300}
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
