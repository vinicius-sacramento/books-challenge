import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import Rating from "../StarRating";
import heartIcon from "../../assets/heart.svg";
import heartFillIcon from "../../assets/heart-fill.svg";

const BookInfo = ({ searchedBooks, bestsellers, saveFavoriteBooks }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const books = [...searchedBooks, ...bestsellers];
  const { bookId } = useParams();
  const [book] = books.filter((books) => books.id === bookId);
  const averageRating = book.volumeInfo.averageRating;

  function handleFavorite() {
    setIsFavorite(!isFavorite);
    !isFavorite && saveFavoriteBooks(book);
  }

  return (
    <>
      <S.Container>
        <S.GridInfos>
          {book.volumeInfo.imageLinks ? (
            <S.BookCover src={book.volumeInfo.imageLinks.smallThumbnail} />
          ) : (
            <S.UnavailableCover>{book.volumeInfo.title}</S.UnavailableCover>
          )}

          <S.BookPages>
            {book.volumeInfo.pageCount
              ? `${book.volumeInfo.pageCount} pages`
              : ""}
          </S.BookPages>

          <S.BookTitle>{book.volumeInfo.title}</S.BookTitle>

          <S.BookAuthor>
            By{" "}
            {book.volumeInfo.authors
              ? book.volumeInfo.authors.join(", ")
              : "Unknown author"}
          </S.BookAuthor>

          <S.PriceAndRating>
            <S.BookPrice>
              {book.saleInfo.listPrice
                ? `$${book.saleInfo.listPrice.amount.toFixed(2)}`
                : "Unavailable"}
            </S.BookPrice>
            <S.BookRating>
              <Rating averageRating={averageRating} />
            </S.BookRating>
          </S.PriceAndRating>

          <S.Buttons>
            <S.BuyButton>BUY</S.BuyButton>
            <S.FavoriteButton onClick={handleFavorite}>
              {isFavorite ? (
                <S.FavoriteIcon src={heartFillIcon}></S.FavoriteIcon>
              ) : (
                <S.FavoriteIcon src={heartIcon}></S.FavoriteIcon>
              )}
            </S.FavoriteButton>
          </S.Buttons>
        </S.GridInfos>
      </S.Container>
      <S.DescriptionContainer>
        {book.volumeInfo.description ? (
          <S.BookDescription>{book.volumeInfo.description}</S.BookDescription>
        ) : (
          <S.BookDescription>Unavailable information</S.BookDescription>
        )}
      </S.DescriptionContainer>
    </>
  );
};

export default BookInfo;
