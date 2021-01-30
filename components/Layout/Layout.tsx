import React from "react";
import styled from "@emotion/styled";

export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

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
  return <StyledMain>{children}</StyledMain>;
};

export default Layout;
