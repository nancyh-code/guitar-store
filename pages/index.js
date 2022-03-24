import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout page="Home">
      <h1 className="heading">Home</h1>
      <Link href="/about">
        <a>About us</a>
      </Link>
    </Layout>
  );
}
