import Head from "next/head";
import "../styles/globals.css";
import Store from "../containers/Store";
import Layout from "../components/Layout/Layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import styled from "@emotion/styled";
import { AiOutlineShareAlt } from "react-icons/ai";
const FloatingDiv = styled.div`
  display: block;
  position: absolute;
  top: 28px;
  right: 16px;
  font-size: 32px;
  :hover {
    cursor: pointer;
    color: wheat;
  }
`;

export default function MyApp({ Component, pageProps }) {
  const renderShareButton = () => {
    return (
      <FloatingDiv>
        <AiOutlineShareAlt
          onClick={() => {
            if (navigator.share) {
              navigator
                .share({
                  title: "Poke list",
                  text: "Check out poke list.",
                  url: "https://pokelist.vercel.app/",
                })
                .then(() => alert("Successful Share"))
                .catch((error) => console.error(`Fail to share ${error}`));
            }
          }}
        />
      </FloatingDiv>
    );
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title lang="en">Pokelist</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Store>
        <Layout>
          {renderShareButton()}
          <Component {...pageProps} />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
          />
        </Layout>
      </Store>
    </>
  );
}
