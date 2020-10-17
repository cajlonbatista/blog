import styled from 'styled-components';

export const LayoutNews = styled.div`
    display: grid;
    background-size: cover;
    display: grid;
    height: 100vh;
    background: #36393F;
    padding: 20px;
    overflow: auto;
    grid-template-columns: repeat(auto-fit, min(100%, 400px));
    justify-content: space-around;
    animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    grid-gap: 10px;
    @media(max-width: 905px){
        padding-top: 80px;
        padding-bottom: 30px;
        overflow: auto;
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