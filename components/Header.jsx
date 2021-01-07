import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Header() {
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div
      className="md:my-16 mt-8 mb-16 container mx-auto"
      style={{ fontFamily: `"Montserrat", sans-serif` }}
    >
      <nav
        className={`relative flex flex-wrap items-center justify-between px-4 navbar-expand-lg`}
      >
        <div className="container mx-24 mx-auto flex flex-wrap items-center justify-between">
          <div
            className={`w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start 2xl:ml-20`}
          >
            {/* Titile and brand logo */}
            <Link href="/" passHref>
              <a>
                <img
                  src="images/logo.png"
                  alt="Logo"
                  className="sm:inline-block hidden w-20 h-20 mr-6"
                />
                <span
                  className={`font-logo italic font-bold text-3xl xl:text-5xl sm:text-4xl align-middle xl:leading-4 lg:leading-4 md:leading-normal leading-relaxed whitespace-no-wrap cursor-pointer`}
                >
                  Daria Khudiakova
                </span>
              </a>
            </Link>
            {/* Mini nav expand button */}
            <button
              className={`text-white cursor-pointer text-xl leading-none px-3 pt-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none`}
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="text-5xl text-gray-600 border border-gray-400">
                &#9776;
              </span>
            </button>
          </div>
          <div
            className={
              `justify-center lg:flex flex-grow items-center` +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none 2xl:ml-64 xl:ml-48">
              <li>
                <Link href="/" passHref>
                  <a className="cursor-pointer px-3 py-4 lg:py-2 xl:py-2 flex items-center text-3xl leading-snug font-bold">
                    <span
                      style={{ color: router.pathname == "/" ? "#61aeb0" : "" }}
                    >
                      Work
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about-me" passHref>
                  <a className="cursor-pointer px-3 py-4 lg:py-2 xl:py-2 flex items-center text-3xl leading-snug font-bold">
                    <span
                      style={{
                        color: router.pathname == "/about-me" ? "#61aeb0" : "",
                      }}
                    >
                      About Me
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/resume" passHref>
                  <a className="cursor-pointer px-3 py-4 lg:py-2 xl:py-2 flex items-center text-3xl leading-snug font-bold">
                    <span
                      style={{
                        color: router.pathname == "/resume" ? "#61aeb0" : "",
                      }}
                    >
                      Resume
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style jsx>{`
        li span {
          color: #212121;
        }
        li span:hover {
          color: #61aeb0;
        }
        .font-logo {
          color: #61aeb0;
        }
        @media screen and (max-width: 1023px) {
          #example-navbar-danger {
            padding: 30px 0;
            position: absolute;
            width: 70%;
            top: 100%;
            left: 50%;
            transform: translate(-50%, 0%);
            right: 50%;
            background-color: rgba(76, 73, 73, 0.85);
            border-radius: 4px;
            z-index: 1;
            box-shadow: 0 8px 18px -3px grey;
          }
          li span {
            color: white;
          }
        }
      `}</style>
    </div>
  );
}
