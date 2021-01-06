import ProjectSectionHeader from "../ProjectSectionHeader";
import Image from "next/image";
export default function ExpertInterviews() {
  return (
    <div>
      <ProjectSectionHeader header="Expert user interviews" />
      <p className="my-12">
        To learn more about Learning Seeds and find out what makes its method
        unique we also interviewed parents experienced in working with the
        company, teachers, and other educators. Then we created{" "}
        <b>an affinity map</b> that helped us track the following tendencies:
      </p>
      {/* affinity map */}
      <div
        className="sm:px-6 px-4 py-6 my-16 flex lg:flex-row flex-col-reverse"
        style={{
          backgroundColor: "#F5F2F0",
          boxShadow: "0 0 5px 10px #F5F2F0",
        }}
      >
        {/* left */}
        <div className="text-center cursor-pointer px-8 my-auto mx-auto">
          <div className={`relative mx-auto`}>
            <Image
              alt="Affinity map"
              src="/images/learning-seeds/affinity-map.png"
              quality={100}
              width={472}
              height={472}
              className="rounded-full"
              loading={"eager"}
            />
          </div>
        </div>
        <hr className="mb-10 lg:hidden" />
        {/* right */}
        <div className="lg:w-3/4 sm:px-12 mx-auto">
          <div>
            <h3 className="text-left font-bold mb-4">Nature of the process</h3>
            <ul className="list-disc list-inside mb-6">
              <li>
                The way you move through the process is multi-layered /
                non-linear
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-left font-bold mb-4">
              Effective ways to learn
            </h3>
            <ul className="list-disc list-inside mb-6">
              <li>Observation & unpacking</li>
              <li>Using parallels/metaphors to convey so understand</li>
              <li>Understanding the rationale behind the method</li>
            </ul>
          </div>
          <div>
            <h3 className="text-left font-bold mb-4">Blockers to learning</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Vulnerability around parenting</li>
              <li>Comparing self to Erica Key</li>
              <li>Quick pace / overwhelming</li>
              <li>Difficult (to implement) in new context</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
