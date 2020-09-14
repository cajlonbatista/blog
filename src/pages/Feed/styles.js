import styled from 'styled-components';

export const LayoutNews = styled.div`
    display: grid;
    background: #333333;
    background-size: cover;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, min(100%, 400px));
    justify-content: space-around;
    overflow: auto;
    animation: bounce 2s linear;
    @media(max-width: 905px){
        margin-top: 60px;
    };
`;
