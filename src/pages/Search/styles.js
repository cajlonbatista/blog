import styled from "styled-components";

export const SearchConteiner = styled.div`
    display: flex;
    flex-direction: column;
    background: #202020;
    height: 100vh;
    overflow: auto;
    @media(max-width: 905px){
        padding-top: 74px;
    }
`;
export const Entry = styled.div`
    background: #B2B2B2;
    display: flex;
    justify-content: center;
`;
export const Exit = styled.div`
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
        padding-top: 74px;
        overflow: hidden;
        height: 100vh;
};
`;
