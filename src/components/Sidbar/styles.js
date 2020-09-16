import styled from 'styled-components'

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
        background: url("https://cdn.discordapp.com/avatars/736865755924004904/a_bc2f2e8db3953b1b584c2489b9d6c7d9.gif?size=128");
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
        cursor: pointer;
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
        cursor: pointer;
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
