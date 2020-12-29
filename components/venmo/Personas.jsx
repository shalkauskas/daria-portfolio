import ProjectSectionHeader from "../ProjectSectionHeader";
import Image from "next/image";
export default function Personas() {
  return (
    <div>
      <ProjectSectionHeader header="Personas" />
      <div className="flex flex-col lg:flex-row mb-12">
        {/* left */}
        <div className="lg:w-1/2 lg:border-r border-black mb-12 pr-6 ">
          <h3 className="text-center pb-10 text-xl">Venmo Superuser</h3>
          <div className="flex">
            <div className="w-1/2 text-right mt-auto">
              <Image
                alt="Superuser"
                src="/images/venmo/persona1.png"
                quality={100}
                width={206}
                height={206}
              />
            </div>

            <div
              className="w-72 sm:p-10 p-2 sm:flex-shrink-0"
              style={{
                height: "max-content",
                backgroundImage: 'url("images/venmo/comment.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <p className="mx-auto text-center pb-6 pt-4 p-10">
                "Venmo is the currency for college students"
              </p>
            </div>
          </div>
          <div className="mt-12 lg:w-3/4 mx-auto">
            <h3 className="font-bold text-left mb-6">Goals/needs:</h3>
            <ul className="list-disc list-inside mb-6">
              <li>to split the charge among a group of people</li>
              <li>to pay someone back with minimal stress</li>
              <li>to avoid unnecessarily complication</li>
              <li>support causes that resonate to them</li>
            </ul>
            <h3 className="font-bold text-left mb-6">Pain points:</h3>
            <ul className="list-disc list-inside mb-6">
              <li>wishes more people were on Venmo</li>
            </ul>
          </div>
        </div>
        {/* right */}
        <div className="lg:w-1/2 sm:pl-6">
          <h3 className="text-center pb-10 text-xl">Venmo Do-Gooder</h3>
          <div className="flex">
            <div className="w-1/2 text-right mt-auto">
              <Image
                alt="Superuser"
                src="/images/venmo/persona2.png"
                quality={100}
                width={206}
                height={206}
              />
            </div>

            <div
              className="w-72 sm:flex-shrink-0 sm:p-10 p-6"
              style={{
                height: "max-content",
                backgroundImage: 'url("images/venmo/comment.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <p className="mx-auto text-center sm:pb-6 sm:pt-4">
                “I’m more willing to donate when the process is quick and
                seamless.”
              </p>
            </div>
          </div>
          <div className="mt-12 lg:w-3/4 mx-auto">
            <h3 className="font-bold text-left mb-6">Goals/needs:</h3>
            <ul className="list-disc list-inside mb-6">
              <li>the quick and easy way to donate</li>
              <li>to know exactly where their money are going</li>
              <li>have an opportunity to donate anonymously</li>
            </ul>
            <h3 className="font-bold text-left mb-6">Pain points:</h3>
            <ul className="list-disc list-inside mb-6">
              <li>doesn’t always get why Venmo is so public</li>
            </ul>
          </div>
        </div>
        {/* wrapper*/}
      </div>

      {/* end */}
    </div>
  );
}
