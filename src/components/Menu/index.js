import {
  ContainerMenu,
  MenuContent,
  MenuFooter,
  MenuHeader,
  MenuOptions,
  Options,
  TopContainer,
  MenuModalContainer,
  MenuIcon,
  UserMessage,
} from "./styles";

import { Link } from "react-router-dom";

const Menu = ({ children, handleShowMenu }) => {
  return (
    <>
      <ContainerMenu onClick={handleShowMenu} />
      <MenuModalContainer>
        <MenuContent>
          <TopContainer>
            <MenuHeader>
              <MenuIcon>{children}</MenuIcon>
              <UserMessage>Hello, user!</UserMessage>
            </MenuHeader>
            <MenuOptions onClick={handleShowMenu}>
              <Link to="/">
                <Options>Home</Options>
              </Link>
              <Options>Favorite Books</Options>
            </MenuOptions>
          </TopContainer>
          <MenuFooter>
            <Options>Manage Your Profile</Options>
            <Options>Logout</Options>
          </MenuFooter>
        </MenuContent>
      </MenuModalContainer>
    </>
  );
};

export default Menu;
