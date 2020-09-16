import styled from 'styled-components';
import avatar from "../../assets/images/avatar.gif"

export const DoubleConteiner = styled.div`
    background: #181818;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
    transition: all 0.4s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(min-width: 905px){
        display: none;
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