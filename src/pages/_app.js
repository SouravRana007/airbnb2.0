import Layout from "../components/layout";
import "../globals.css";
import "./styles/global.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
const loadingBar = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});
Router.events.on("routeChangeStart", loadingBar.start);
Router.events.on("routeChangeComplete", loadingBar.finish);
Router.events.on("routeChangeError", loadingBar.finish);

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
