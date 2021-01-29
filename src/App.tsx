import React, { Suspense, lazy } from "react";
import { hot } from "react-hot-loader";
import OverlayLoading from "./components/OverlayLoading/OverlayLoading";
import Menu from "./components/Menu/Menu";
import Layout from "./components/Layout/Layout";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { Switch, Route } from "react-router-dom";

const PokeList = lazy(() => import("./pages/PokeList/List"));
const PokeDetail = lazy(() => import("./pages/PokeList/Detail"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const Notfound = lazy(() => import("./pages/NotFound/NotFound"));
const MyMenu: Menu[] = [
  { label: "Pokemon list", to: "/", icon: <AiFillHome /> },
  { label: "My Profile", to: "/profile", icon: <AiOutlineUser /> },
];

const App = () => {
  return (
    <Suspense fallback={OverlayLoading}>
      <Layout>
        <Switch>
          <Route exact path={"/"} component={PokeList} />
          <Route exact path={"/pokemon/:pokemonName"} component={PokeDetail} />
          <Route exact path={"/profile"} component={Profile} />
          <Route component={Notfound} />
        </Switch>

        <Menu menus={MyMenu} />
      </Layout>
    </Suspense>
  );
};

export default hot(module)(App);
