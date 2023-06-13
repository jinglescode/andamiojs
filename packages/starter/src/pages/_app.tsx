import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PPBLContextProvider, Layout } from "@andamiojs/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PPBLContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PPBLContextProvider>
  );
}
