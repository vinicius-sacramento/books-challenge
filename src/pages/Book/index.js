import BookInfo from "../../components/BookInfo";

const Book = ({ searchedBooks, bestsellers, saveFavoriteBooks }) => {
  return (
    <>
      <BookInfo
        saveFavoriteBooks={saveFavoriteBooks}
        searchedBooks={searchedBooks}
        bestsellers={bestsellers}
      ></BookInfo>
    </>
  );
};

export default Book;
