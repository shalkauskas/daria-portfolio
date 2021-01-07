import useDocumentScrollThrottled from "components/useDocumentScrollThrottled";
export default function ProjectMenu(props) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [moveMenu, setMoveMenu] = React.useState(false);
  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    setMoveMenu(currentScrollTop > 200);
  });
  // handle media query
  const [desktop, setDesktop] = React.useState(false);
  function mqChange(mq) {
    setDesktop(mq.matches);
  }
  React.useEffect(() => {
    const mq = window.matchMedia("screen and (min-width: 1280px)");
    mq.addListener(mqChange);
    mqChange(mq);

    return () => {
      mq.removeListener(mqChange);
    };
  }, []);
  return (
    <div
      className={`fixed mt-44 py-12 menu z-10 ${
        menuOpen || desktop ? "w-56" : "w-10"
      }`}
      style={{ top: moveMenu && desktop ? "0" : "" }}
    >
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } text-right xl:block xl:border-r border-black menu-list bg-opacity-75 px-4`}
      >
        <h2 className="text-lg"> LEARN MORE</h2>
        <ul className="">
          <li
            onClick={props.go1}
            className={`${
              props.activeElement === "EL1" ? "underline font-bold" : ""
            } mt-6 cursor-pointer`}
          >
            {props.title1}
          </li>
          <li
            onClick={props.go2}
            className={`${
              props.activeElement === "EL2" ? "underline font-bold" : ""
            } mt-6 cursor-pointer`}
          >
            {props.title2}
          </li>
          <li
            onClick={props.go3}
            className={`${
              props.activeElement === "EL3" ? "underline font-bold" : ""
            } mt-6 cursor-pointer`}
          >
            {props.title3}
          </li>
          <li
            onClick={props.go4}
            className={`${
              props.activeElement === "EL4" ? "underline font-bold" : ""
            } mt-6 cursor-pointer`}
          >
            {props.title4}
          </li>
          <li
            onClick={props.go5}
            className={`${
              props.activeElement === "EL5" ? "underline font-bold" : ""
            } mt-6 cursor-pointer`}
          >
            {props.title5}
          </li>
          <li
            onClick={props.go6}
            className={`${
              props.activeElement === "EL6" ? "underline font-bold" : ""
            } mt-6 cursor-pointer`}
          >
            {props.title6}
          </li>
          <li
            onClick={props.go7}
            className={`${
              props.activeElement === "EL7" ? "underline font-bold" : ""
            } mt-6 cursor-pointer`}
          >
            {props.title7}
          </li>
        </ul>
      </div>
      <div className="block xl:hidden cursor-pointer">
        <img
          src="images/menu-icon.png"
          alt="Project image"
          className="w-10 float-right mt-6 menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      <style jsx>{`
        .menu {
          transform: translateX(-250px);
        }
        @media screen and (max-width: 1280px) {
          .menu {
            transform: translateX(-100px);
            bottom: 70px;
            right: -80px;
          }
          .menu-list {
            background-color: rgba(76, 73, 73, 0.85);
            padding: 2rem;
            border-radius: 4px;
            color: white;
            box-shadow: 0 8px 18px -3px grey;
            background-opacity: 0.6;
          }
        }
        .menu-icon {
          animation: fadeIn 0.3s;
          transition: opacity 0.4s;
          opacity: 0.5;
        }
        .menu-icon:hover {
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
