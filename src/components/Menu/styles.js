import styled from "styled-components";
import { screen } from "../../breakpoints";

export const MenuModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background-color: white;
  @media ${screen.desktop} {
    width: 30%;
  }
`;

export const ContainerMenu = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const TopContainer = styled.div``;

export const MenuContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #ffe207;
  padding: 0 1rem;
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0 15px;
`;

export const MenuIcon = styled.div`
  /* margin-right: 105px; */
`;

export const UserMessage = styled.h2`
  font-weight: 400;
  font-size: 15px;
`;

export const MenuOptions = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
`;

export const Options = styled.h2`
  font-size: 16px;
  font-weight: 400;
  margin-top: 15px;
`;

export const MenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  height: auto;
  padding-bottom: 30px;
`;
