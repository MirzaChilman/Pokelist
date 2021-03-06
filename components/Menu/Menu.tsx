import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import { BACKGROUND, TEXT } from "../colors";
import { IMenu } from "../../interfaces";

export interface MenuProps {
  menus: IMenu[];
}

const StyledLink = styled(Link)`
  text-decoration: none;
  a {
    color: ${TEXT.COLOR.main};
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: calc(100% - 32px);
  padding: 16px 0;
  background-color: ${BACKGROUND.COLOR.main};
  justify-content: space-evenly;
  overflow: overlay;
  text-align: center;
  max-width: 991px;
  border-top: 1px solid ${BACKGROUND.COLOR.secondary};
  z-index: 2;
`;

const LinkWrapper = styled.div`
  :hover {
    cursor: pointer;
  }
  :active {
    color: ${BACKGROUND.COLOR.secondary};
  }
`;

const Menu = (props: MenuProps) => {
  const { menus } = props;
  return (
    <Wrapper>
      {menus.length > 0 &&
        menus.map((menu) => {
          const { to, label, icon } = menu;
          return (
            <LinkWrapper>
              <StyledLink href={to} key={label + to}>
                <span>
                  {icon}
                  &nbsp;
                  {label}
                </span>
              </StyledLink>
            </LinkWrapper>
          );
        })}
    </Wrapper>
  );
};

export default Menu;
