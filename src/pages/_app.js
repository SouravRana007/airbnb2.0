import Layout from "../components/layout";
import "../globals.css";
import "./styles/global.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const loadingBar = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});
Router.events.on("routeChangeStart", loadingBar.start);
Router.events.on("routeChangeComplete", loadingBar.finish);
Router.events.on("routeChangeError", loadingBar.finish);

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </SessionProvider>
  );
}
