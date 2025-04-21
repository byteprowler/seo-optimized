import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
    <Head>
      <meta name="viewport" content='width=device-width, initial-scale=1' />
    </Head>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
    </Layout>
  );
}
