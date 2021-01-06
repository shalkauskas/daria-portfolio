import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NextProjectItem from "@/components/NextProjectItem";
import ProjectSectionHeader from "@/components/ProjectSectionHeader";
export default function NextProjectCarousel(props) {
  const tete = (
    <NextProjectItem
      title="Tete-A-Tete salon website redesign"
      image="images/tete-a-tete.png"
      imageStyle="laptop"
      color="#F7EEFF"
      link="/tete-a-tete"
    />
  );
  const bloom = (
    <NextProjectItem
      title='B2C application "Bloom"'
      image="images/bloom.png"
      color="#FFEEEC"
      link="/bloom"
      phone={true}
    />
  );
  const seeds = (
    <NextProjectItem
      title="Educational micro-course for Learning Seeds, Inc."
      image="images/learnseed.png"
      color="#C2F0FC"
      link="/learning-seeds"
    />
  );
  const venmo = (
    <NextProjectItem
      title="Donation feature for Venmo app (conceptual)"
      image="images/venmo.png"
      color="#BEEBE9"
      link="/venmo"
      phone={true}
    />
  );
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
            centerSlidePercentage={30}
            width={mobileWidth()}
            selectedItem={currentSlide}
          >
            {props.children}
            {props.children2}
            {props.children3}
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
