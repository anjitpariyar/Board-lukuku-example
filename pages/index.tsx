// import Link from "next/link";
import Layout from "components/common/Layout";
// import Greeting from "components/home/Greeting";
import { Screen, ScreenPhotos, Standout } from "components/home";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example - Anjit">
    <Screen />
    <ScreenPhotos />
    <Standout />
  </Layout>
);

export default IndexPage;
