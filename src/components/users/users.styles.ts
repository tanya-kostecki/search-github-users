import styled from "styled-components";

export const UserItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 170px;
    height: 250px;

    &:hover {
        border: 1px solid #6632a2;
		box-shadow: 0px 0px 10px 5px #d2d1d1;
		transition: all 0.3s ease-out;
    }
    
`
export const UserAvatar = styled.img`
    width: 100%;
    height: 100%;
    background-color: white;
    
`
export const UserLogin = styled.p`
    font-weight: 400;
    font-size: 18px;
`

export const AllUsers = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 40px;
`