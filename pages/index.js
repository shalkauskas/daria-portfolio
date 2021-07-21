import Layout from "@/components/Layout";
import Greeter from "../components/index/Greeter";
import ProjectList from "../components/index/ProjectList";
export default function Home() {
  return (
    <div style={{ fontFamily: `"Montserrat", sans-serif` }}>
      <Layout title="Work | Daria Khudiakova">
        <Greeter />
        <ProjectList />
      </Layout>
    </div>
  );
}
