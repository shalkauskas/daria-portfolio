import Image from "next/image";
import wire1 from "/public/images/bloom/wire1.png";
import wire2 from "/public/images/bloom/wire2.png";
import demo from "/public/images/bloom/demo.jpeg";
export default function Wireframing() {
  return (
    <div className="">
      <p>
        The idea of this app is pretty fresh, so it is important to show a
        novice user how it works first. That’s why my very first sketch started
        with the short demo
      </p>
      <div className="text-center my-20">
        <Image
          alt="Demo"
          src={demo}
          quality={100}
          width={615}
          height={460}
          loading={"eager"}
          placeholder="blur"
        />
      </div>
      <hr />
      <p className="mt-20">
        Wearing unusual features in familiar designs is also a good way to
        introduce them to the user. So I used the conventional design of the
        camera while scanning the brightness level in your room. Moreover, the
        phone camera is technically involved in this feature.
      </p>
      <div className="text-center my-20">
        <div
          style={{ width: "fit-content", height: "456px" }}
          className="mx-auto shadow-img"
        >
          <Image
            alt="Demo"
            src={wire1}
            quality={100}
            width={262}
            height={456}
            loading={"eager"}
            placeholder="blur"
          />
        </div>
      </div>
      <hr />
      <p className="mt-20">
        The same idea stands for turning on reminders where notification setting
        works the same way as the regular iPhone settings.
      </p>
      <div className="text-center my-20">
        <div
          style={{ width: "fit-content", height: "456px" }}
          className="mx-auto shadow-img"
        >
          <Image
            alt="Demo"
            src={wire2}
            quality={100}
            width={262}
            height={456}
            loading={"eager"}
            placeholder="blur"
          />
        </div>
      </div>
      <style jsx>{`
        .shadow-img {
          box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
}
