import styled from "styled-components";
import { screen } from "../../breakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BooksGrid = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media ${screen.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }

  column-gap: 20px;
  row-gap: 30px;
`;

export const BookCover = styled.img`
  width: 100%;
  height: 100%;
  max-width: 120px;
  max-height: 160px;
  object-fit: cover;
`;

export const UnavaiableCover = styled.div`
  display: flex;
  max-width: 120px;
  max-height: 160px;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 20px;

  background-color: white;
`;

export const LoadMoreButton = styled.button`
  width: 40%;
  min-width: 100px;
  height: 2.5rem;
  margin-bottom: 1.5rem;

  border: none;
  border-radius: 30px;

  font-size: 14px;
  font-weight: 700;

  background-color: #4a90e2;
  color: white;

  text-align: center;
`;
