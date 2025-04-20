import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
    </Layout>
  );
}
