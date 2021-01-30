import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { BREAKPOINTS } from "../Layout/Layout";
import { BACKGROUND, TEXT } from "../colors";
import { IMenu } from "../../interfaces";

export interface MenuProps {
  menus: IMenu[];
}

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 16px 16px;
  a {
    color: ${TEXT.COLOR.main};
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${BACKGROUND.COLOR.main};
  justify-content: space-evenly;
  overflow: overlay;
  text-align: center;
  max-width: ${BREAKPOINTS.lg}px;
  border-top: 1px solid ${BACKGROUND.COLOR.secondary}
`;

const Menu = (props: MenuProps) => {
  const { menus } = props;
  return (
    <Wrapper>
      {menus.length > 0 &&
        menus.map((menu) => {
          const { to, label, icon } = menu;
          return (
            <StyledLink href={to} key={label + to}>
              <span>
                {icon}
                &nbsp;
                {label}
              </span>
            </StyledLink>
          );
        })}
    </Wrapper>
  );
};

export default Menu;
