import { useState } from 'react'
import SeacrhUser from '../../components/search/SeacrhUser'
import UserInfo from '../../components/modal/UserInfo'
import { useGetUsersQuery } from '../../redux/services/users'
import Users from '../../components/users/Users'
import { MainContainer } from './main.styles'
import { User } from '../../interfaces/interfaces';

const MainPage = () => {
  const [isModal, setIsModal] = useState<boolean>(false)

  const [input, setInput] = useState<string>('github')

  const [order, setOrder] = useState<string>('desc');

  const [pagination, setPagination] = useState<number>(1);

  const { data: users, error, isLoading } = useGetUsersQuery({
    login: input,
    order: order,
    per_page: 30,
    page: pagination,
  });

  const [selectedUser, setSelectedUser] = useState<User>({
    login: '',
    id: 0,
    avatar_url: '',
    html_url: '',
  });
  
  return (
    <MainContainer>
      <SeacrhUser setInput={setInput} />
      {isModal && <UserInfo setIsModal={setIsModal} user={selectedUser} />}
      {isLoading && (<div>Пользователи загружаются...</div>)}
      {error ? (
        <div>Произошла ошибка, попробуйте позже</div>
      ) : (
        <Users
          users={users}
          setIsModal={setIsModal}
          setSelectedUser={setSelectedUser}
          pagination={pagination}
          setPagination={setPagination}
        />
      )}
    </MainContainer>
  );
}

export default MainPage