import styled from 'styled-components';
import avatar from "../../assets/images/avatar.gif"

export const DoubleConteiner = styled.div`
    background: #2F3136;
    padding: 10px;
    width: 100vw;
    transition: all 0.4s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    display: none;
    position: fixed;
    border: 2px solid #73ffdd;
    background: black;
    border-radius: 10px;
    top: 0;
    @media(max-width: 905px){
        display: block;
    }
`;
export const Dualdor = styled.div`
    span{
        color: white;
        font-size: 20px;
        font-family: Exo, sans-serif;
    }
`;
export const Toggle = styled.div`
    margin: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:last-child{
        border-radius: 100%;
        overflow: hidden;
        height: 40px;
        width: 40px;
        background: black;
        background: url(https://avatars2.githubusercontent.com/u/63024734?s=460&u=26e99e87bc36f43f10110ae256e1161e88a958df&v=4) no-repeat;
        background-size: cover;
        overflow: hidden;
        position: relative;
    }
`;
export const Avatar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        border-radius: 50%;
        width: 120px;
        margin: 10px;
        height: 120px;
        background: url(${avatar});
        overflow: hidden;
        position: relative;
        @media(max-width: 905px){
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
        color: #8e8e8e;
        cursor: pointer;
        :hover{
            color: #6092ff;
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
export const ItemHover = styled.div`
transition: all 0.4s;
    :hover{
        opacity: 0.4;
        color: #6092ff;
    }
    border-bottom: 2px transparent solid;
`;