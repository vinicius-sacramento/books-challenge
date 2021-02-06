import styled from "styled-components";
import { screen } from "../../breakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${screen.desktop} {
    width: 70%;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  align-self: flex-start;
  margin-top: 25px;
  padding-left: 16px;
`;

export const CategoriesGrid = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.25rem 16px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  column-gap: 20px;
  row-gap: 30px;

  @media ${screen.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Category = styled.div`
  display: flex;

  width: 100%;
  height: 90px;

  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 18px;
  color: #2c2605;
  text-align: center;

  background-color: #f0d10f;
`;
