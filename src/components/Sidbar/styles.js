import styled from 'styled-components'
import avatar from "../../assets/images/avatar.gif"
export const LayoutSidBar = styled.div`
    background: #181818;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #B5B5B5;
    height: 100vh;
    border-right: 5px #333333 solid;
    @media(max-width: 905px){
        display: none;
    }
`;
export const Avatar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        border-radius: 50%;
        width: 170px;
        margin: 10px;
        height: 170px;
        background: url(${avatar}) no-repeat;
        background-size: cover;
        overflow: hidden;
        position: relative;
        @media(max-width: 905px){
            width: 100px;
            height: 100px;
            background-position: 30px;
        }
    }
    @media(max-width: 905px){
        display: flex;
    }
    span{
        font-family: Exo, sans-serif;
        font-size: 17px;
        transition: all 0.3s;
        text-align: center;
        margin-top: 7px;
        :hover{
            color: #6092ff;
        }
    }
`;
export const Links = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    justify-content: space-between;
    span{
        font-family: Exo, sans-serif;
        margin-top: 10px;
        font-size: 19px;
        font-weight: 600;
        transition: all 0.4s;
        border-bottom: 2px solid transparent;
        :hover{
            color: #6092ff;
            border-bottom: 2px solid #6092ff;
        }
    }
`;
export const Contact = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    svg{
        margin: 5px;
    }
`;
