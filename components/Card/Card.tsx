import React from "react";
import styled from "@emotion/styled";
import Link from "../Link/Link";
import { BACKGROUND, TEXT } from "../colors";

const Component = styled.div<Card>`
  display: flex;
  padding: 16px;
  margin: 8px 0;
  background-color: ${BACKGROUND.COLOR.main};
  ${(props) =>
    props.hoverable &&
    `
  &:hover {
    cursor: pointer;
    box-shadow: inset 0px 0px 47px 0px rgba(44, 138, 232, 1);
  }
  `}

  a {
    text-decoration: none;
    color: ${TEXT.COLOR.main};
  }
`;

interface Card
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  to?: string;
  hoverable?: boolean;
}

const Card = (props: Card) => {
  const { children, to, hoverable = true } = props;
  return to ? (
    <Link href={to}>
      <Component hoverable={hoverable}>{children}</Component>
    </Link>
  ) : (
    <Component hoverable={hoverable}>{children}</Component>
  );
};

export default Card;
