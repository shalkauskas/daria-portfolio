import Layout from "@/components/Layout";
import React from "react";
export default function Resume() {
  const [loading, setLoading] = React.useState(true);
  const iframeReady = () => {
    setLoading(false);
  };
  return (
    <Layout title="Resume | Daria Khudiakova">
      <div
        className="max-h-full"
        style={{ fontFamily: `"Montserrat", sans-serif` }}
      >
        <div className="text-center xl:w-3/6 mx-auto my-32">
          {loading && <div className="loader" />}
          <iframe
            src="https://onedrive.live.com/embed?cid=41AA7A153B5014EE&amp;resid=41AA7A153B5014EE%21122&amp;authkey=AOW3PkaRESO44us&amp;em=2&wdStartOn=1"
            width="100%"
            height="1000px"
            frameBorder="0"
            onLoad={() => iframeReady()}
          ></iframe>
          <a href="https://s3.us-east-2.amazonaws.com/daria-in-design.com/Daria_Khudiakova_CV.docx">
            <button className="mt-12 rounded-full px-10 py-3 bg-gray-700 text-white float-right hover:opacity-75">
              Download Resume
            </button>
          </a>
        </div>
      </div>
      <style jsx>{`
        .loader {
          border: 0.2em solid rgba(0, 0, 0, 0.1);
          border-top: 0.2em solid #767676;
          border-radius: 50%;
          width: 4.28571429rem;
          height: 4.28571429rem;
          animation: spin 0.6s linear infinite;
          margin-left: auto;
          margin-right: auto;
          margin-top: 20%;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Layout>
  );
}
