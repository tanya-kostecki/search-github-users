import styled from "styled-components";

export const SearchContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding-top: 40px;
`;
export const GitHubLogo = styled.img`
  height: 100px;
  width: 100px;
`;
export const SearchTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
`;
export const SeacrhInfo = styled.p`
  font-size: 18px;
  font-weight: 400;
`;
export const SearchForm = styled.div`
  display: flex;
  gap: 20px;
`;
export const SearchInput = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 12px;
  padding-left: 12px;
  background-color: white;
  border-color: white;
  color: black;

  ::placeholder {
    font-size: 12px;
    font-weight: 400;
  }
`;
export const SearchButton = styled.button`
  width: 100px;
  height: 50px;
  background: green;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`;