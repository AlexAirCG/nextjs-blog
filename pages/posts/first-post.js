import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import YourComponents from "../../components/image";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <YourComponents />
    </Layout>
  );
}
