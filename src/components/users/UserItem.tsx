import * as S from './users.styles'
import { User } from '../../interfaces/interfaces'

const UserItem = (user: User) => {
  return (
    <S.UserItemContainer>
      <S.UserAvatar src={user.avatar_url}/>
      <S.UserLogin>{user.login}</S.UserLogin>  
    </S.UserItemContainer>
  )
}

export default UserItem