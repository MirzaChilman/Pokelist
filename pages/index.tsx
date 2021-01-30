import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "../components/Button/Button";
import Layout from "../components/Layout/Layout";
import Menu from "../components/Menu/Menu";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { IMenu } from "../interfaces";
const Menus: IMenu[] = [
  { label: "Pokemon list", to: "/", icon: <AiFillHome /> },
  { label: "My Profile", to: "/profile", icon: <AiOutlineUser /> },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <Button>adasd</Button>
      </Head>
      <Layout>asdsa</Layout>
      <div>
        <Menu menus={Menus} />
      </div>
    </div>
  );
}
