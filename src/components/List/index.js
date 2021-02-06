import {
  Container,
  BooksGrid,
  BookCover,
  LoadMoreButton,
  UnavaiableCover,
} from "./styles";
import { Link } from "react-router-dom";

const List = ({ searchedBooks, pagination, startIndex }) => {
  const books = searchedBooks;

  function handlePagination() {
    let index = startIndex + 12;
    pagination(index);
  }

  return (
    <>
      <Container>
        <BooksGrid>
          {books.map((content, index) => (
            <Link key={content.id} to={`/book/${content.id}`}>
              {content.volumeInfo.imageLinks ? (
                <BookCover src={content.volumeInfo.imageLinks.smallThumbnail} />
              ) : (
                <UnavaiableCover>{content.volumeInfo.title}</UnavaiableCover>
              )}
            </Link>
          ))}
        </BooksGrid>
        <LoadMoreButton onClick={handlePagination}>See more</LoadMoreButton>
      </Container>
    </>
  );
};

export default List;
