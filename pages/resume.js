import Layout from "@/components/Layout";
export default function Resume() {
  return (
    <Layout title="Resume | daria@ux.com">
      <div className="max-h-full">
        <div
          class="text-center container mx-auto my-24"
          style={{ height: "1350px" }}
        >
          <iframe
            src="resume.pdf#view=FitH"
            class="mt-5 mx-auto 2xl:w-7/12 xl:w-9/12 lg:w-11/12 w-3/4"
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </Layout>
  );
}
