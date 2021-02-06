import styled from "styled-components";
import { screen } from "../../breakpoints";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${screen.desktop} {
    width: 70%;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 28px 1rem 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icons = styled.img`
  width: 19px;
  height: auto;
`;

export const Title = styled.h2`
  font-size: 20px;

  font-weight: 400;
`;

export const SearchingTitle = styled.h2`
  font-size: 20px;
  padding: 0 20px;
  font-weight: 400;
`;

export const Divider = styled.div`
  width: 40%;
  border-bottom: 2px solid #f0d10f;
`;

export const SearchContainer = styled.form`
  width: 80%;
  height: 20px;
  display: flex;

  justify-self: flex-end;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  margin-left: 20px;
  box-sizing: border-box;

  padding: 0 0.5rem;

  background-color: #fff7b9;

  font-size: 14px;
  border: none;
  border-radius: 3px;

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    font-size: 14px;
    color: #4f565d;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    font-size: 14px;
    color: #4f565d;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    font-size: 14px;
    color: #4f565d;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    font-size: 14px;
    color: #4f565d;
  }
`;
