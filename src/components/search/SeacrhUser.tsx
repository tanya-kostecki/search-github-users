// import React from 'react'
import * as S from './search.styles'

interface Modal {
  setInput: (input: string) => void;
}
const SeacrhUser = ({ setInput }: Modal) => {
  return (
    <S.SearchContainer>
      <S.GitHubLogo src="github-logo.png" />
      <S.SearchTitle>Поиск пользователя GitHub</S.SearchTitle>
      <S.SeacrhInfo>Введите имя пользователя</S.SeacrhInfo>
      <S.SearchForm>
        <S.SearchInput
          placeholder="Имя пользователя"
          onChange={(e) => setInput(e.target.value)}
        />
      </S.SearchForm>
    </S.SearchContainer>
  );
};

export default SeacrhUser