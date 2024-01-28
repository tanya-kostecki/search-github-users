import { FC } from 'react'
import * as S from './users.styles'
import { Search, User } from '../../interfaces/interfaces'
// import UserItem from './UserItem'
import PaginationButtons from '../pagination-buttons/PaginationButtons'

type Users = {
    users: Search | undefined;
    setIsModal: (isModal: boolean) => void
    setSelectedUser: (user: User) => void 
}
const Users: FC<Users> = (props) => {
  const { users, setIsModal, setSelectedUser } = props

  const openModal = (user: User) => {
    setSelectedUser(user) 
    setIsModal(true)
  }
  
  // const USERS_PER_PAGE = 30
  // if (users) {
  //   const pages = Math.ceil(users?.total_count / USERS_PER_PAGE)
  //   console.log('pages', pages) //the number of pages with all users on github
  // }

  return (
    <>
        <S.AllUsers>           
            {users?.items.map((user) => (
                // <UserItem 
                // key={user.id}
                // login={user.login}
                // id={user.id}
                // avatar_url={user.avatar_url} />
                <S.UserItemContainer key={user.id} onClick={() => openModal(user)}>
                  <S.UserAvatar src={user.avatar_url}/>
                  <S.UserLogin>{user.login}</S.UserLogin>  
                </S.UserItemContainer>
            ))}
        </S.AllUsers>
        <PaginationButtons/>
    </>
        
  )
}

export default Users