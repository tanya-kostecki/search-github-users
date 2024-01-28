// import React from 'react'
import * as S from './search.styles'

interface Modal {
  setIsModal: (isModal: boolean) => void
  setInput: (input: string) => void
}
const SeacrhUser = ({ setIsModal, setInput }: Modal) => {
  const openModal = () => {
    setIsModal(true)
  }

  return (
    <S.SearchContainer>
        <S.GitHubLogo src='github-logo.png'/>
        <S.SearchTitle>Поиск пользователя GitHub</S.SearchTitle>
        <S.SeacrhInfo>Введите имя пользователя</S.SeacrhInfo>
        <S.SearchForm>
          <S.SearchInput placeholder='Имя пользователя' onChange={(e) => setInput(e.target.value)}/>
          <S.SearchButton onClick={openModal}>Найти</S.SearchButton>
        </S.SearchForm>
        

    </S.SearchContainer>
  )
}

export default SeacrhUser