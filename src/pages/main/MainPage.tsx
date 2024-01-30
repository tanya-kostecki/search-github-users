import { useEffect, useState } from 'react';
import SeacrhUser from '../../components/search/SeacrhUser';
import UserInfo from '../../components/modal/UserInfo';
import { useLazyGetUsersQuery } from '../../redux/services/users';
import Users from '../../components/users/Users';
import { MainContainer } from './main.styles';
import { User } from '../../interfaces/interfaces';
import RadioButtons from '../../components/radio-buttons/RadioButtons';
import { Search } from '../../interfaces/interfaces';

const MainPage = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const [input, setInput] = useState<string>('');

  const [searchUser, setSearchUser] = useState<string>('');

  const [order, setOrder] = useState<string>('desc');

  const [pagination, setPagination] = useState<number>(1);

  const [users, setUsers] = useState<Search>();

  const [getUsers, { error, isLoading }] = useLazyGetUsersQuery();

  useEffect(() => {
    if (!input) {
      return;
    } else {
      try {
        getUsers({ login: input, order: order, per_page: 30, page: pagination })
          .unwrap()
          .then((data: Search) => {
            setUsers(data);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [order, pagination, input]);

  const [selectedUser, setSelectedUser] = useState<User>({
    login: '',
    id: 0,
    avatar_url: '',
    html_url: '',
  });

  return (
    <MainContainer>
      <SeacrhUser
        setInput={setInput}
        searchUser={searchUser}
        setSearchUser={setSearchUser}
      />
      {isModal && <UserInfo setIsModal={setIsModal} user={selectedUser} />}
      {error ? (
        <div>Что-то пошло не так, попробуйте через несколько минут</div>
      ) : (
        <>
          {isLoading ? (
            <div>Пользователи загружаются...</div>
          ) : (
            <>
              {!error && input.length > 2 && users?.items.length !== 0 ? (
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
              ) : null}

              {input.length > 0 && users?.items.length === 0 && !error && (
                <div>Пользователи не найдены </div>
              )}
            </>
          )}
        </>
      )}
    </MainContainer>
  );
};

export default MainPage;
