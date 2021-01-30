import React from "react";
import styled from "@emotion/styled";
import { BACKGROUND } from "../../theme/theme";

interface Button {
  isDanger?: boolean;
}

const Button = styled.button<
  Button & React.ButtonHTMLAttributes<HTMLButtonElement>
>`
  border: 1px solid;
  padding: 8px;
  font-weight: 600;
  letter-spacing: 0.03em;
  transition: background-color 0.2s linear;
  :hover {
    cursor: pointer;
  }
  ${(props) =>
    props.isDanger
      ? `
    border: 1px solid ${BACKGROUND.COLOR.danger};
    background-color: transparent;
    color:${BACKGROUND.COLOR.danger};
    &:hover{
        background-color: ${BACKGROUND.COLOR.danger};
        color: white;
        border: 1px solid  ${BACKGROUND.COLOR.danger};
    }
  `
      : `
    border: 1px solid ${BACKGROUND.COLOR.secondary};
    background-color: transparent;
    color:white;
    &:hover{
        background-color: ${BACKGROUND.COLOR.secondary};
        color: white;
        border: 1px solid  ${BACKGROUND.COLOR.secondary};
    }
  `}
`;

export default Button;
