import { useState } from 'react'
import SeacrhUser from '../../components/search/SeacrhUser'
import UserInfo from '../../components/modal/UserInfo'
import { useGetUsersQuery } from '../../redux/services/users'
import Users from '../../components/users/Users'
import { MainContainer } from './main.styles'
import { User } from '../../interfaces/interfaces'
import { initialUser } from '../../helpers/constants'

const MainPage = () => {
  const [isModal, setIsModal] = useState<boolean>(false)

  const [input, setInput] = useState<string>('github')

  const [page, setPage] = useState<string>('desc')

  const { data: users, error } = useGetUsersQuery({ login: input, order: page})

  const [selectedUser, setSelectedUser] = useState<User>(initialUser)
  
  return (
    <MainContainer>
        <SeacrhUser setIsModal={setIsModal} setInput={setInput} />
        {isModal && (<UserInfo setIsModal={setIsModal} user={selectedUser}/>)}
        {error && (<div>An error occured, try again in a couple of minutes</div>)}
        <Users users={users} setIsModal={setIsModal} setSelectedUser={setSelectedUser}/>
    </MainContainer>
  )
}

export default MainPage