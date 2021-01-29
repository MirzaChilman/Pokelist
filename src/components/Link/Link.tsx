import React from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import styled from "@emotion/styled";
import { TEXT } from "../../theme/theme";

const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: ${TEXT.COLOR.main};
`;
const Link = (props: LinkProps) => {
  return <StyledLink {...props}>{props.children}</StyledLink>;
};

export default Link;
