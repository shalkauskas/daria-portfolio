import Layout from "@/components/Layout";
export default function AboutMe() {
  return (
    <Layout title="About me | Daria Khudiakova">
      <div
        className="container mx-auto flex md:flex-row flex-col my-32 xl:w-4/6 w-5/6"
        style={{ fontFamily: `"Montserrat", sans-serif` }}
      >
        <div className="flex-none md:w-1/2 relative">
          <picture>
            <source type="image/webp" srcSet="images/daria_bw.webp" />
            <source type="image/png" srcSet="images/daria_bw.png" />
            <img
              className="w-4/6 ml-auto mr-16 md:mb-0 mb-20"
              src="images/daria_bw.png"
              alt="Daria's photo"
            />
          </picture>

          <span className="aboutMe-circleOne"></span>
          <span className="aboutMe-circleTwo"></span>
        </div>
        <div className="flex-none md:w-1/2">
          <h2 className="text-center mb-10 text-4xl font-bold">About me</h2>
          <p className="text-left leading-normal text-xl mb-6">
            I am a multilingual UX/UI designer with a passion for understanding
            people’s needs. Being an <b>enthusiastic</b> and <b>hard-working</b>{" "}
            specialist I am always excited to start a new project treating
            challenges with a <b>can-do attitude.</b>
          </p>

          <p className="text-left leading-normal text-xl mb-6">
            People are <b>social</b> creatures and I am not an exception. It is
            a pleasure for me to work with competent professionals learning and
            evolving every single day. My experience of being part of{" "}
            <b>intercultural teams</b> helps me to establish and build trusting
            relationships with international partners and outsource teams as
            well.
          </p>

          <p className="text-left leading-normal text-xl mb-6">
            <b>Caring for others</b> is what makes me happy either while cooking
            yummies for my family or planning fun events with friends. In my
            free time, you also can find me hiking in New Hampshire or kayaking
            down the Charles River as I love being active and keep moving!
          </p>
          <a href="https://s3.us-east-2.amazonaws.com/daria-in-design.com/Daria_Khudiakova_CV.docx">
            <button className="mt-12 rounded-full px-10 py-3 bg-gray-700 text-white hover:opacity-75 mx-auto block">
              Download Resume
            </button>
          </a>
        </div>
      </div>
      <style jsx>{`
        .aboutMe-circleOne {
          position: absolute;
          width: 330px;
          height: 330px;
          background: #beebe9;
          border-radius: 50%;
          z-index: -1;
          right: 43%;
          top: 30%;
        }

        .aboutMe-circleTwo {
          position: absolute;
          z-index: -1;
          width: 125px;
          height: 125px;
          top: 63%;
          left: 58%;
          background: #c2f0fc;
          border-radius: 50%;
        }
      `}</style>
    </Layout>
  );
}
