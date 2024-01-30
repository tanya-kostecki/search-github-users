import styled from "styled-components";

export const UserContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const CloseBlock = styled.div`
  position: absolute;
  z-index: 999;
  top: 28px;
  right: 0px;
  padding: 10px;
`;
export const CloseButton = styled.img`
  width: 40px;
  height: 40px;
`;
export const UserBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;
`;
export const UserAvatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #f0f0f0;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const UserName = styled.p`
  font-size: 42px;
  font-weight: 700;
  color: green;
  text-align: left;
`;
export const Label = styled.p`
  text-align: left;
  font-size: 18px;
  font-weight: 400;
`;
export const UserRepositories = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #646cff;
  text-align: left;
`;