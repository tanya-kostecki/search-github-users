import { User } from '../../interfaces/interfaces';
import * as S from './user-info.styles';

interface Modal {
  setIsModal: (isModal: boolean) => void;
  user: User | undefined;
}
const UserInfo = ({ setIsModal, user }: Modal) => {
  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <S.UserContainer>
      <S.CloseBlock onClick={closeModal}>
        <S.CloseButton src="close-circle.svg" />
      </S.CloseBlock>

      <S.UserBlock>
        <S.UserAvatar src={user?.avatar_url} />
        <S.UserInfo>
          <div>
            <S.Label>Логин пользователя</S.Label>
            <S.UserName>{user?.login}</S.UserName>
          </div>
          <div>
            <S.Label>Роль</S.Label>
            <S.UserName>{user?.type}</S.UserName>
          </div>
          <div>
            <S.Label>Ссылка на профиль</S.Label>
            <a href={user?.html_url}>
              <S.UserRepositories>{user?.html_url}</S.UserRepositories>
            </a>
          </div>
        </S.UserInfo>
      </S.UserBlock>
    </S.UserContainer>
  );
};

export default UserInfo;
