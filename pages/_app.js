import "../styles/globals.css";
import "swiper/css/bundle";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
// import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Layout>
          {/* <ThemeProvider> */}
          <Component {...pageProps} />
          {/* <button onClick={handleMinimize}> Minimize the Chat </button> */}
          {/* </ThemeProvider> */}
        </Layout>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
