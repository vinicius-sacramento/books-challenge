import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Book from "./Book";
import Home from "./Home";
import ListBooks from "./ListBooks";

export default function Routes({
  saveInput,
  saveCategory,
  saveTitle,
  searchedBooks,
  title,
  pagination,
  startIndex,
  bestsellers,
  saveFavoriteBooks,
}) {
  return (
    <BrowserRouter>
      <Header saveInput={saveInput} saveTitle={saveTitle} title={title} />

      <Switch>
        <Route path="/" exact>
          <Home
            bestsellers={bestsellers}
            saveTitle={saveTitle}
            saveCategory={saveCategory}
          />
        </Route>
        <Route path="/list">
          <ListBooks
            searchedBooks={searchedBooks}
            pagination={pagination}
            startIndex={startIndex}
          />
        </Route>
        <Route path="/book/:bookId">
          <Book
            searchedBooks={searchedBooks}
            bestsellers={bestsellers}
            saveFavoriteBooks={saveFavoriteBooks}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
