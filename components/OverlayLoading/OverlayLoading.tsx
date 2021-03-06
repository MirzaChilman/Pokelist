import React from "react";
import styled from "@emotion/styled";

const Spinner = styled("div")`
  display: inline-block;
  width: 80px;
  height: 80px;
  :after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid white;
    border-color: white transparent white transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Container = styled("div")`
  display: flex;
  justify-content: center;
  padding: 40% 0;
`;

const OverlayLoading = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default OverlayLoading;
