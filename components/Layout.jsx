import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function Layout({ children, title }) {
  return (
    <div className="overflow-y-hidden relative pb-40">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Portfolio landing page of UX/UI designer Daria Khudiakova. Case studies & examples of work."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="ux, designer, ui, case study, figma, boston, wireframes, user, experience, interface"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="images/favicon-16x16.png"
        />
        <link rel="manifest" href="images/site.webmanifest" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {children}
      <Footer />
      <style global jsx>{`
        body {
          color: #212121;
          font-family: "Open Sans";
        }
      `}</style>
    </div>
  );
}
