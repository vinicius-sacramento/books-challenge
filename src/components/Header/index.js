import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { useRouteMatch, useHistory } from "react-router-dom";
import returnIcon from "../../assets/arrowback.svg";
import menuIcon from "../../assets/menu.svg";
import searchIcon from "../../assets/search.svg";
import Menu from "../Menu";

const Header = ({ saveInput, saveTitle, title }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [inputError, setInputError] = useState("");
  const isBookRoute = useRouteMatch("/book");
  const isListRoute = useRouteMatch("/list");
  let history = useHistory();

  const handleInputValue = (event) => {
    event.preventDefault();
    if (searchInput !== "") {
      saveInput(searchInput);
      saveTitle(`Results for "${searchInput}"`);
      handleIsSearching();
      setInputError("");
      history.push("/list");
    } else {
      setInputError("You need to search for something...");
    }
  };

  const handleIsSearching = () => setIsSearching(!isSearching);

  const handleShowMenu = () => setIsShowingMenu(!isShowingMenu);

  const handleReturnIcon = () => history.goBack();

  return (
    <>
      {isShowingMenu && (
        <Menu handleShowMenu={handleShowMenu}>
          <S.Icons src={menuIcon} onClick={handleShowMenu} />{" "}
        </Menu>
      )}
      <S.Container>
        <S.HeaderContainer>
          {isBookRoute ? (
            <S.Icons src={returnIcon} onClick={handleReturnIcon}></S.Icons>
          ) : (
            <S.Icons src={menuIcon} onClick={handleShowMenu}></S.Icons>
          )}

          {isSearching ? (
            <>
              <S.SearchContainer onSubmit={handleInputValue}>
                <S.SearchInput
                  placeholder={
                    inputError === ""
                      ? `Search for your favorite book...`
                      : inputError
                  }
                  onChange={(event) => setSearchInput(event.target.value)}
                />
              </S.SearchContainer>
              <S.Icons onClick={handleIsSearching} src={searchIcon} />
            </>
          ) : (
            <>
              {isBookRoute ? (
                <S.Title>Book</S.Title>
              ) : isListRoute ? (
                <S.SearchingTitle>{title}</S.SearchingTitle>
              ) : (
                <S.Title>Home</S.Title>
              )}
              <S.Icons onClick={handleIsSearching} src={searchIcon} />
            </>
          )}
        </S.HeaderContainer>
        <S.Divider />
      </S.Container>
    </>
  );
};

export default Header;
