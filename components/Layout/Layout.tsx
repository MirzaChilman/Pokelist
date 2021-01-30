import React from "react";
import styled from "@emotion/styled";
import Menu from "../Menu/Menu";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { IMenu } from "../../interfaces";
import { BREAKPOINTS } from "../breakpoints";
const Menus: IMenu[] = [
  { label: "Pokemon list", to: "/", icon: <AiFillHome /> },
  { label: "My Profile", to: "/profile", icon: <AiOutlineUser /> },
];

const StyledMain = styled("main")`
  margin: 0 auto;
  max-width: ${BREAKPOINTS.lg}px;
  padding: 16px;
  padding-bottom: 160px;
`;

const Layout = ({
  children,
}: {
  children: React.ReactChild[] | React.ReactChild;
}) => {
  return (
    <StyledMain>
      <Menu menus={Menus} />
      <span>{children}</span>
    </StyledMain>
  );
};

export default Layout;
