// import React from 'react'
import { User } from '../../interfaces/interfaces';
import * as S from './user-info.styles'

interface Modal {
  setIsModal: (isModal: boolean) => void;
  user: User | undefined //Search
}
const UserInfo = ({ setIsModal, user }: Modal) => {
  const closeModal = () => {
    setIsModal(false)
  }
  
  return (
    <S.UserContainer>
        <S.CloseBlock onClick={closeModal}>
            <S.CloseButton src='close-circle.svg'/>
        </S.CloseBlock>

           <S.UserBlock>
           <S.UserAvatar src={user?.avatar_url}/>
           <S.UserInfo>
               <S.UserName>{user?.login}</S.UserName>
               <a href={user?.html_url}>
                 <S.UserRepositories>Ссылка на профиль</S.UserRepositories>
               </a>
           </S.UserInfo>
      </S.UserBlock>
        
      
      
    </S.UserContainer>
  )
}

export default UserInfo