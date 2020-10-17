import styled from "styled-components";

export const SkillLayout = styled.div`
    height: 100vh;
    background: #202020;
    padding: 20px;
    animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    overflow: auto;
    display: flex;
    flex-direction: column;
    h3{
        font-family: Poppins, sans-serif;
        font-size: 35px;
        text-align: center;
        font-weight: 600;
    }
    a{
        font-size: 20px;
        font-family: Exo, sans-serif; 
        padding: 18px;
        font-weight: 500;
        color: #6092ff;
        :hover{
            text-decoration: underline;
        }
    }
    span{
        font-family: Poppins, sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #6092ff;
    }
    @media(max-width: 905px){
        padding-top: 79px;
    }
`; 
export const SkillCard = styled.div`
    background-size: cover;
    display: grid;
    padding: 20px;
    justify-content: center;
    div{
        display: flex;
        justify-content: center;
        padding: 10px 40px;
        height: 80px;
        background: #f5f5f5;
        border-radius: 5px;
    }
    background: #202020;
    grid-template-columns: repeat(auto-fit, min(100%, 90px));
    grid-gap: 10px;
    animation: bounce 2s linear;
`;
export const SoftCard = styled.div`
    padding: 10px;
    div{
        :hover{
            color: #6092ff;
        }
        font-family: Exo, sans-serif;
        color: #b5b5b5;
        transition: all 0.4s;
        font-size: 17px;
    }
`;