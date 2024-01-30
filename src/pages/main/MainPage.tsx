import { useState } from 'react'
import SeacrhUser from '../../components/search/SeacrhUser'
import UserInfo from '../../components/modal/UserInfo'
import { useGetUsersQuery } from '../../redux/services/users'
import Users from '../../components/users/Users'
import { MainContainer } from './main.styles'
import { User } from '../../interfaces/interfaces';
import RadioButtons from '../../components/radio-buttons/RadioButtons';

const MainPage = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const [input, setInput] = useState<string>('github');

  const [order, setOrder] = useState<string>('desc');

  const [pagination, setPagination] = useState<number>(1);

  const {
    data: users,
    error,
    isLoading,
  } = useGetUsersQuery({
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
      {error ? (
        <div>Что-то пошло не так, попробуйте через несколько минут</div>
      ) : (
        <>
          {isLoading ? (
            <div>Пользователи загружаются...</div>
          ) : (
            <>
              <RadioButtons order={order} setOrder={setOrder} />
              <Users
                users={users}
                setIsModal={setIsModal}
                setSelectedUser={setSelectedUser}
                pagination={pagination}
                setPagination={setPagination}
              />
            </>
          )}
        </>
      )}
    </MainContainer>
  );
}

export default MainPage