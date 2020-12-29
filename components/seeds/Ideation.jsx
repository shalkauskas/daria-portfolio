import ProjectSectionHeader from "../ProjectSectionHeader";
import Image from "next/image";
export default function Ideation() {
  function Modal(props) {
    const [image, setImage] = React.useState(false);
    const width = image ? 960 : 356;
    const height = image ? 760 : 226;
    return (
      <div
        className="text-center cursor-pointer mx-auto"
        onClick={() => setImage(!image)}
      >
        <div className={`relative ${image ? "absolute z-50 2xl:w-max" : ""}`}>
          <Image
            alt="Site map"
            src={props.src}
            quality={100}
            width={width}
            height={height}
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
    <div className="mb-20">
      <ProjectSectionHeader header="Ideation" />
      <div
        className="py-10"
        style={{
          backgroundImage: 'url("images/learning-seeds/ideation-bg.png")',
          backgroundSize: "cover",
        }}
      >
        <div
          className="sm:w-8/12 w-10/12 sm:px-12 px-4 py-8 mx-auto my-10"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
        >
          <h3 className="text-center font-bold pb-10">The main concept:</h3>
          <p>
            Based on our interviews with people who have successfully learned
            the Enlightened Shadowing Method, we knew that a process of
            observing, reflecting, and trying out techniques was essential to
            successfully learn it. So we visualized this concept and used it as
            a way to arrange the content within a lesson.
          </p>
        </div>
        <div className="w-3/4 md:px-12 md:py-8 mx-auto">
          <Image
            alt="Comparative analysis"
            src="/images/learning-seeds/ideation2.png"
            quality={100}
            width={748}
            height={330}
          />
        </div>
      </div>

      <div className="max-w-screen-2xl">
        <ProjectSectionHeader header="Solutions" />
        <div
          className="sm:px-16 px-4 py-16"
          style={{
            backgroundColor: "#F5F2F0",
            boxShadow: "0 0 5px 10px #F5F2F0",
          }}
        >
          <h3 className="text-center pb-10 font-bold">Solutions:</h3>
          <ul className="list-disc list-inside mb-12">
            <li>
              For the demo we decided to show 3 user flows that include
              introducing the Enlightened Shadowing Method, going through the
              first lesson and reflecting.
            </li>
            <li>
              As you can see, on our site map we also created a toolkit where
              users can store the material he/she liked as well as notes and
              reflections.
            </li>
            <li>
              We are also planning on developing Q&A section so parents can ask
              questions directly to educators at Learning Seeds.
            </li>
          </ul>
          <div className="flex">
            <div className="ml-auto mr-10">
              <Modal src="/images/learning-seeds/user-flow-big.png" />
            </div>
            <div className="mr-auto">
              {" "}
              <Modal src="/images/learning-seeds/site-map-big.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
