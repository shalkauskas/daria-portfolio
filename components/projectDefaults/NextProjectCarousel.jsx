import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProjectSectionHeader from "@/components/projectDefaults/ProjectSectionHeader";
import React from "react";
export default function NextProjectCarousel(props) {
  // carousel controls
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const next = () => {
    if (currentSlide == 2) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prev = () => {
    if (currentSlide == 0) {
      setCurrentSlide(2);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  // responsive carousel
  const [isMobile, setIsMobile] = React.useState(false);
  function mqChange(mq) {
    setIsMobile(mq.matches);
    mq.matches ? setCurrentSlide(0) : setCurrentSlide(1);
  }
  React.useEffect(() => {
    const mq = window.matchMedia("screen and (max-width: 960px)");
    mq.addListener(mqChange);
    mqChange(mq);

    return () => {
      mq.removeListener(mqChange);
    };
  }, []);
  const mobileSize = () => (isMobile ? false : true);
  const mobileWidth = () => (isMobile ? "300px" : "950px");

  return (
    <div className="mx-auto overflow-hidden">
      <ProjectSectionHeader header="View next..." />

      <div className="flex mr-auto ml-auto justify-center">
        <div
          className={`${
            isMobile ? "inline-block" : "hidden"
          } my-auto min-w-content`}
        >
          <img
            onClick={prev}
            className="w-5 cursor-pointer mr-2 inline-block"
            src="images/left.png"
          ></img>
        </div>
        <div className="inline-block">
          <Carousel
            showThumbs={false}
            showArrows={false}
            infiniteLoop={false}
            showIndicators={false}
            autoPlay={false}
            showStatus={false}
            swipeable={true}
            centerMode={mobileSize()}
            centerSlidePercentage={32}
            width={mobileWidth()}
            selectedItem={currentSlide}
          >
            {props.children}
          </Carousel>
        </div>

        <div
          className={`${
            isMobile ? "inline-block" : "hidden"
          } my-auto min-w-content`}
        >
          <img
            onClick={next}
            className="w-5 cursor-pointer ml-2 inline-block"
            src="images/right.png"
          ></img>
        </div>
      </div>
    </div>
  );
}
