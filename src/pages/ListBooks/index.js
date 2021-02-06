import List from "../../components/List";

const ListBooks = ({ searchedBooks, pagination, startIndex }) => {
  return (
    <>
      <List
        searchedBooks={searchedBooks}
        pagination={pagination}
        startIndex={startIndex}
      ></List>
    </>
  );
};

export default ListBooks;
