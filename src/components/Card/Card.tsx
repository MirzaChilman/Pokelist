import React from "react";
import styled from "@emotion/styled";
import { BACKGROUND, TEXT } from "../../theme/theme";
import Link from "../Link/Link";

const Component = styled.div`
  display: flex;
  padding: 16px;
  margin: 8px 0;
  background-color: ${BACKGROUND.COLOR.main};
  &:hover {
    cursor: pointer;
    box-shadow: inset 0px 0px 47px 0px rgba(44, 138, 232, 1);
  }
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
  to: string;
}

const Card = (props: Card) => {
  const { children, to } = props;
  return (
    <Link to={to}>
      <Component>{children}</Component>
    </Link>
  );
};

export default Card;
