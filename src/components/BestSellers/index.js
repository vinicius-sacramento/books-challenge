import {
  BooksGrid,
  Container,
  Title,
  UnavaiableCover,
  BookCover,
} from "./styles";
import { Link } from "react-router-dom";

const BestSellers = ({ bestsellers }) => {
  const books = bestsellers;
  return (
    <>
      <Container>
        <Title>Best Sellers</Title>
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
      </Container>
    </>
  );
};

export default BestSellers;
