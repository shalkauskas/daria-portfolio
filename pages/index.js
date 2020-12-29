import Layout from "@/components/Layout";
import Greeter from "../components/Greeter";
import ProjectList from "../components/ProjectList";
export default function Home() {
  return (
    <Layout title="Work | daria@ux.com">
      <Greeter />
      <ProjectList />
    </Layout>
  );
}
