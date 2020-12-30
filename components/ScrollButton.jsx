import useDocumentScrollThrottled from "components/useDocumentScrollThrottled";
export default function ScrollButton() {
  const [showScroll, setShowScroll] = React.useState(false);
  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    setShowScroll(currentScrollTop > 400);
  });
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <img
        src="images/scrollToTop.png"
        className={`scrollTop cursor-pointer fixed z-50`}
        onClick={scrollTop}
        style={{
          height: 40,
          display: showScroll ? "flex" : "none",
        }}
      />
      <style jsx>{`
        .scrollTop {
          bottom: 60px;
          animation: fadeIn 0.3s;
          transition: opacity 0.4s;
          opacity: 0.5;
          right: 20px;
        }
        .moveUp {
          transition: transform 0.3s linear;
          transform: translateY(30px);
        }
        .moveDown {
          transition: transform 0.3s linear;
          transform: translateY(-110px);
        }
        .scrollTop:hover {
          opacity: 1;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
