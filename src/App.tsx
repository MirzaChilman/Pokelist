import React, { Suspense, lazy } from "react";
import { hot } from "react-hot-loader";
import OverlayLoading from "./components/OverlayLoading/OverlayLoading";
import Menu from "./components/Menu/Menu";
import Layout from "./components/Layout/Layout";
import { AiFillHome, AiOutlineUser, AiOutlineShareAlt } from "react-icons/ai";
import { Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { isMobile, isTablet } from "react-device-detect";
import styled from "@emotion/styled";
const PokeList = lazy(() => import("./pages/PokeList/List"));
const PokeDetail = lazy(() => import("./pages/PokeList/Detail"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const Notfound = lazy(() => import("./pages/NotFound/NotFound"));
const MyMenu: Menu[] = [
  { label: "Pokemon list", to: "/", icon: <AiFillHome /> },
  { label: "My Profile", to: "/profile", icon: <AiOutlineUser /> },
];

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

const App = () => {
  const isHttps = window.location.protocol === "https";
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
    <Suspense fallback={OverlayLoading}>
      <Layout>
        {isHttps && isMobile && isTablet && renderShareButton()}
        <Switch>
          <Route exact path={"/"} component={PokeList} />
          <Route exact path={"/pokemon/:pokemonName"} component={PokeDetail} />
          <Route exact path={"/profile"} component={Profile} />
          <Route component={Notfound} />
        </Switch>
        <Menu menus={MyMenu} />
      </Layout>
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
    </Suspense>
  );
};

export default hot(module)(App);
