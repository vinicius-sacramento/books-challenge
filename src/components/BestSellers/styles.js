import styled from "styled-components";
import { screen } from "../../breakpoints";

export const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  align-self: flex-start;
  margin-top: 25px;
  padding-left: 16px;
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${screen.desktop} {
    width: 70%;
    align-items: flex-start;
  }
`;

export const BooksGrid = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.25rem 16px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  column-gap: 20px;
  row-gap: 30px;

  @media ${screen.desktop} {
    width: 50%;
  }
`;

export const BookCover = styled.img`
  width: 100%;
  height: 100%;
  max-width: 120px;
  max-height: 160px;
  object-fit: cover;

  @media ${screen.desktop} {
    width: 100%;
    height: 100%;
  }
`;

export const UnavaiableCover = styled.div`
  display: flex;
  width: 100px;
  height: 130px;

  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 20px;

  background-color: white;
`;
