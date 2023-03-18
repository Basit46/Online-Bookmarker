import Layout from "@/components/Layout";
import AppContext from "@/hooks/AppContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AppContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext>
  );
}
