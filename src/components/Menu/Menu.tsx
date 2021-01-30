import React from "react";
import { Link as RLink } from "react-router-dom";
import styled from "@emotion/styled";
import { BACKGROUND, TEXT } from "../../theme/theme";
import { BREAKPOINTS } from "../Layout/Layout";

interface Menu {
  label: string;
  to: string;
  icon?: React.ReactNode;
}

export interface MenuProps {
  menus: Menu[];
}

const Link = styled(RLink)`
  text-decoration: none;
  color: ${TEXT.COLOR.main};
  padding: 16px 16px;
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

interface Something extends Omit<Menu, "to"> {}
const Something = styled.div<Something>`
  background-color: ${(props) => props.label};
`;

const Menu = (props: MenuProps) => {
  const { menus } = props;
  return (
    <Wrapper>
      {menus.length > 0 &&
        menus.map((menu) => {
          const { to, label, icon } = menu;
          return (
            <Link to={to}>
              {icon}
              &nbsp;
              {label}
            </Link>
          );
        })}
    </Wrapper>
  );
};

export default Menu;
