import * as S from './search.styles'

interface Modal {
  setInput: (input: string) => void;
  searchUser: string;
  setSearchUser: (searchUser: string) => void
}
const SeacrhUser = ({ setInput, searchUser, setSearchUser }: Modal) => {
  
  const handleUserSearch = () => {
    setInput(searchUser)
  }
  return (
    <S.SearchContainer>
      <S.GitHubLogo src="github-logo.png" />
      <S.SearchTitle>Поиск пользователя GitHub</S.SearchTitle>
      <S.SearchForm>
        <S.SearchInput
          value={searchUser}
          placeholder="Введите имя пользователя"
          onChange={(e) => setSearchUser(e.target.value)}
        />
        <S.SearchButton onClick={handleUserSearch}>Найти</S.SearchButton>
      </S.SearchForm>
    </S.SearchContainer>
  );
};

export default SeacrhUser