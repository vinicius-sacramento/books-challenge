import styled from "styled-components";
import { shade } from "polished";
import { screen } from "../../breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1.25rem;
`;

export const GridInfos = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto 1fr auto;

  column-gap: 1.5rem;
`;

export const BookCover = styled.img`
  grid-column: 1/2;
  grid-row: 1/4;

  width: 100%;
  height: auto;

  box-shadow: 0 20px 33px rgba(184, 118, 12, 0.725);
`;

export const UnavailableCover = styled.div`
  grid-column: 1/2;
  grid-row: 1/4;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  width: 100%;
  max-width: 150px;
  height: 100%;
`;

export const BookPages = styled.h3`
  width: 100%;
  height: auto;

  margin: 1.25rem 0 0;

  grid-column: 1/2;
  grid-row: 4/4;

  text-align: center;
  align-self: center;

  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  color: #9f8b0c;
`;

export const BookTitle = styled.h2`
  width: 100%;
  height: auto;
  max-width: 250px;
  grid-column: 2/3;
  grid-row: 1/2;

  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #2c2605;
`;

export const BookAuthor = styled.h3`
  width: 100%;
  height: auto;

  padding: 0.25rem 0;

  grid-column: 2/3;
  grid-row: 2/3;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #9f8b0c;
`;

export const PriceAndRating = styled.div`
  width: 100%;
  height: auto;

  grid-column: 2/3;
  grid-row: 3/4;

  display: flex;
  align-items: flex-end;
`;

export const BookPrice = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  margin-right: 0.5rem;

  color: #2c2605;
`;

export const BookRating = styled.div`
  width: 14px;
  height: 14px;
  margin-left: 0.25rem;
  align-self: flex-end;
  margin-bottom: 0.35rem;
`;

export const Buttons = styled.div`
  width: 100%;
  height: auto;

  margin: 1.5rem 0 0.25rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const BuyButton = styled.button`
  width: 60%;
  height: 2.25rem;

  margin-right: 0.75rem;

  font-weight: 700;
  font-size: 13px;

  background-color: #4a90e2;
  color: white;

  border: none;
  border-radius: 30px;

  box-shadow: 0 7px 15px rgba(60, 120, 191, 0.4226);
  &:hover {
    background-color: ${shade(0.1, "#4a90e2")};
  }
`;

export const FavoriteButton = styled.button`
  width: 2.25rem;
  height: 2.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #dc4b5d;

  border: none;
  border-radius: 30px;
`;

export const FavoriteIcon = styled.img`
  width: auto;
  height: auto;
  align-self: center;
  justify-self: center;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  padding: 2rem 1rem;

  @media ${screen.desktop} {
    width: 70%;
  }
`;

export const BookDescription = styled.p`
  font-size: 14px;
  color: #4f565d;
  line-height: 30px;
`;
