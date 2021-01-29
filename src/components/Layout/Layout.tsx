import React from "react";
import styled from "@emotion/styled";

export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

const themeLight = {
  text: "#000",
  background: "#fff",
  buttonText: "#000",
  buttonTextHover: "#fff",
  buttonBorder: "#000",
  buttonBg: "rgba(0,0,0,0)",
  buttonBgHover: "rgba(0,0,0,1)",
};

const themeDark = {
  text: "#fff",
  background: "#121212",
  buttonText: "#fff",
  buttonTextHover: "#000",
  buttonBorder: "#fff",
  buttonBg: "rgba(255,255,255,0)",
  buttonBgHover: "rgba(255,255,255,1)",
};

const StyledMain = styled("main")`
  margin: 0 auto;
  max-width: ${BREAKPOINTS.lg}px;
  padding-bottom: 160px;
`;

const Layout = ({
  children,
}: {
  children: React.ReactChild[] | React.ReactChild;
}) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Layout;
