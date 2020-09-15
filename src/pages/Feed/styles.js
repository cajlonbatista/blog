import styled from 'styled-components';

export const LayoutNews = styled.div`
    display: grid;
    background-size: cover;
    display: grid;
    height: 100vh;
    background: #202020;
    overflow: auto;
    grid-template-columns: repeat(auto-fit, min(100%, 400px));
    justify-content: space-around;
    grid-gap: 10px;
    animation: bounce 2s linear;
    @media(max-width: 905px){
        margin-top: 74px;
        overflow: hidden;
        height: 100vh;
    };
`;

export const NotFound = styled.div`
    background: #202020;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
    flex-direction: column;
    img{
        width: 90%;
        max-width: 450px;
    }
    h2{
        color: #6092ff;
        text-align: center;
        font-family: Exo, sans-serif;
    }

`;