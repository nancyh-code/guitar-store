import Link from "next/link";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout page="About us">
      <h1>About us</h1>
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </Layout>
  );
};

export default About;
