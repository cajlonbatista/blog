import styled from 'styled-components';

export const LayoutNews = styled.div`
    display: grid;
    background: #333333;
    background-size: cover;
    display: grid;
    height: 100vh;
    overflow: auto;
    grid-template-columns: repeat(auto-fit, min(100%, 400px));
    justify-content: space-around;
    animation: bounce 2s linear;
    @media(max-width: 905px){
        margin-top: 74px;
        overflow: hidden;
        height: auto;
    };
`;
