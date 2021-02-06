import React, { useState } from "react";
import Routes from "./pages/routes";
import GlobalStyle from "./reset";
import { searchBooks } from "./services/books.service";
import { bestsellers } from "./bestsellers";
import { Container } from "./appStyle";

function App() {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  function saveFavoriteBooks(favoritebook) {
    setFavoriteBooks([...favoriteBooks, ...[favoritebook]]);
    console.log(favoriteBooks);
  }

  function saveInput(input) {
    setCategory("");
    setSearchedBooks(() => []);
    setInputValue(input);
    saveBooks(input);
  }

  function saveCategory(category) {
    setInputValue("");
    setSearchedBooks(() => []);
    setCategory(category);
    saveBooks(category);
  }

  function saveTitle(title) {
    setTitle(title);
  }

  function pagination(index) {
    setStartIndex(index);

    return inputValue !== ""
      ? saveBooks(inputValue, null, index)
      : saveBooks(null, category, index);
  }

  async function saveBooks(query, category, startIndex) {
    let books = await searchBooks(query, category, startIndex);
    setSearchedBooks((previousBooks) => [...previousBooks, ...books.items]);
  }

  return (
    <Container>
      <GlobalStyle />
      <Routes
        saveInput={saveInput}
        saveTitle={saveTitle}
        pagination={pagination}
        saveCategory={saveCategory}
        saveFavoriteBooks={saveFavoriteBooks}
        title={title}
        searchedBooks={searchedBooks}
        startIndex={startIndex}
        bestsellers={bestsellers}
      />
    </Container>
  );
}

export default App;
