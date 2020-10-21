import styled from 'styled-components'
export const LayoutSidBar = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #B5B5B5;
    height: 100vh;
    padding: 20px 10px;
    border-radius: 20px;
    border: 2px solid #73ffdd;
    @media(max-width: 905px){
        display: none;
    }
`;
export const Avatar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        border-radius: 100%;
        overflow: hidden;
        height: 100px;
        width: 100px;
        background: black;
        border: 1px solid transparent;
        transition: all 0.4s;
        background: url(https://avatars2.githubusercontent.com/u/63024734?s=460&u=26e99e87bc36f43f10110ae256e1161e88a958df&v=4) no-repeat;
        background-size: cover;
        overflow: hidden;
        position: relative;
        @media(max-width: 905px){
            width: 100px;
            height: 100px;
            background-position: 30px;
        }
        :hover{
            border: 1px solid #73ffdd;
            opacity: 0.7;
        }
    }
    @media(max-width: 905px){
        display: flex;
    }
    span:first-child{
        font-size: 20px;
        font-family: Poppins;
    }
    span:last-child{
        font-family: Ubuntu;
        font-size: 15px;
        transition: all 0.3s;
        text-align: center;
    }
`;
export const Links = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    justify-content: space-between;
    span{
        font-family: Exo;
        margin-top: 10px;
        font-size: 19px;
        transition: all 0.4s;
        border-bottom: 1px solid transparent;
        :hover{
            color: #73ffdd;
            border-bottom: 1px solid #73ffdd;
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
