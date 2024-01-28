import styled from "styled-components";

export const UserContainer = styled.div`
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
`
export const CloseBlock = styled.div`
    position: absolute;
    z-index: 999;
    top: 28px;
    right: 0px;
    padding: 10px;
`
export const CloseButton = styled.img`
    width: 40px;
    height: 40px;
`
export const UserBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 100%;
`
export const UserAvatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #f0f0f0;
`
export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
`
export const UserName = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: red;
    text-align: left;  
`
export const UserRepositories = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: red;
    text-align: left;
`