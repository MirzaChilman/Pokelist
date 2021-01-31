import Link from "next/link";
import styled from "@emotion/styled";
import { TEXT } from "../colors";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${TEXT.COLOR.main};
`;
export default StyledLink;
