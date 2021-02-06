import styled from "styled-components";
import { screen } from "./breakpoints";

export const Container = styled.div`
  @media ${screen.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
