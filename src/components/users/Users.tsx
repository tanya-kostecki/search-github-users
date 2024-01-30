import { FC } from 'react'
import * as S from './users.styles'
import { Search, User } from '../../interfaces/interfaces';;

type Users = {
  users: Search | undefined;
  setIsModal: (isModal: boolean) => void;
  setSelectedUser: (user: User) => void;
  pagination: number;
  setPagination: (pagination: number | ((prev: number) => number)) => void
};
const Users: FC<Users> = (props) => {
  const { users, setIsModal, setSelectedUser, pagination, setPagination } = props;

  const openModal = (user: User) => {
    setSelectedUser(user);
    setIsModal(true);
  };

  const usersOnPage = 30;
  const currentPages = Number(Math.ceil(users?.total_count!! / usersOnPage));
  const moveForward = () => {
    if (currentPages === pagination) {
      setPagination(1)
      return
    }

    if (pagination === 1 || pagination > 1) {
      setPagination((prev: number) => prev + 1)
    }
  }

  const moveBackward = () => {
    if (pagination === 1 || pagination < 1) {
      return
    } else {
      setPagination((prev: number) => prev - 1)
    }
  }

  return (
    <>
      <S.AllUsers>
        {users?.items.map((user) => (
          <S.UserItemContainer key={user.id} onClick={() => openModal(user)}>
            <S.UserAvatar src={user.avatar_url} />
            <S.UserLogin>{user.login}</S.UserLogin>
          </S.UserItemContainer>
        ))}
      </S.AllUsers>
      <S.PaginationContainer>
        <S.PaginationButton disabled={pagination === 1} onClick={moveBackward}>Назад</S.PaginationButton>
        <S.PaginationParagraph>Страница -{pagination}-</S.PaginationParagraph>
        <S.PaginationButton onClick={moveForward}>Вперед</S.PaginationButton>
      </S.PaginationContainer>
    </>
  );
};

export default Users