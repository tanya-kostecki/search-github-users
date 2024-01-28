import * as S from './pagination.styles'

const PaginationButtons = () => {
  return (
    <S.PaginationContainer>
        <S.PaginationButton>Назад</S.PaginationButton>
        <S.PaginationButton>Вперед</S.PaginationButton>
    </S.PaginationContainer>
  )
}

export default PaginationButtons