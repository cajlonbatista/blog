import styled from "styled-components";

export const SkillLayout = styled.div`
    height: 100vh;
    padding-top: 75px;
    background: #202020;
    h1{
        font-family: Poppins, sans-serif;
        font-size: 23px;
        color: #B5B5B5,
    }
    a{
        font-size: 12px;
    }
`; 
export const SkillCard = styled.div`
    display: grid;
    background-size: cover;
    display: grid;
    width: 100%;
    max-width: 300px;

    margin: 0 auto;
    div{
        display: flex;
        justify-content: center;
        padding: 10px 40px;
        height: 80px;
        background: white;
        border-radius: 5px;
    }
    background: #202020;
    overflow: auto;
    grid-template-columns: repeat(auto-fit, min(100%, 80px));
    justify-content: space-around;
    grid-gap: 10px;
    animation: bounce 2s linear;
    @media(max-width: 905px){
        padding-top: 74px;
        overflow: hidden;
        height: 100vh;
    };
`;