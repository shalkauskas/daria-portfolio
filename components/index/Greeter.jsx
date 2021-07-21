import smoothscroll from "smoothscroll-polyfill";
export default function Greeter() {
  const scrollTop = () => {
    smoothscroll.polyfill();
    window.scrollTo({ top: 850, behavior: "smooth" });
  };
  return (
    <div className="container mx-auto 2xl:px-48 xl:px-36 lg:px-12 mt-48">
      <div className="flex md:flex-row flex-col relative">
        <div className="text-center my-auto mb-12 md:mb-auto md:mr-6">
          <h2 className="italic text-3xl w-full 2xl:w-10/12 ml-auto mr-auto">
            "Hi! I'm Daria, a UX designer who loves thoughtful design."
          </h2>
        </div>
        <div className="relative">
          <picture>
            <source type="image/webp" srcSet="images/daria.webp" />
            <source type="image/png" srcSet="images/daria.png" />
            <img
              className="xl:w-3/5 md:w-4/5 w-2/5 lg:ml-0 ml-auto mr-auto"
              src="images/daria.png"
              alt="Daria photo"
            />
          </picture>

          <span className="circleOne absolute"></span>
          <span className="circleTwo absolute"></span>
        </div>
      </div>
      <style jsx>{`
        .circleOne {
          width: 300px;
          height: 300px;
          background: #beebe9;
          border-radius: 50%;
          display: inline-block;
          z-index: -1;
          bottom: 122px;
          right: 115px;
        }

        .circleTwo {
          z-index: -1;
          width: 125px;
          height: 125px;
          top: 190px;
          left: 410px;
          background: #c2f0fc;
          border-radius: 50%;
          display: inline-block;
        }
        @media screen and (max-width: 1536px) {
          .circleOne {
            right: 30px;
            bottom: 60px;
          }
          .circleTwo {
            left: 350px;
          }
        }
        @media screen and (max-width: 1280px) {
          .circleOne {
            width: 200px;
            height: 200px;
            right: 0;
            bottom: 120px;
          }
          .circleTwo {
            left: 230px;
            top: 130px;
            width: 80px;
            height: 80px;
          }
        }
        @media screen and (max-width: 1280px) {
          .circleOne {
            width: 200px;
            height: 200px;
            right: 30px;
            bottom: 120px;
          }
          .circleTwo {
            left: 230px;
            top: 130px;
            width: 80px;
            height: 80px;
          }
          @media screen and (max-width: 1024px) {
            .circleOne {
              width: 200px;
              height: 200px;
              right: 30px;
              bottom: 60px;
            }
            .circleTwo {
              left: 230px;
              top: 130px;
              width: 80px;
              height: 80px;
            }
          }
          @media screen and (max-width: 1024px) {
            .circleOne {
              width: 200px;
              height: 200px;
              right: 30px;
              bottom: 120px;
            }
            .circleTwo {
              left: 230px;
              top: 130px;
              width: 80px;
              height: 80px;
            }
        }
      `}</style>
      <img
        onClick={scrollTop}
        className="w-20 mt-20 h-16 mx-auto cursor-pointer"
        src="images/chevron-double-down.png"
        alt="Slide down to projects"
      />
    </div>
  );
}
