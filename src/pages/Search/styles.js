import styled from "styled-components";

export const SearchConteiner = styled.div`
    display: flex;
    flex-direction: column;
    animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    background: #202020;
    height: 100vh;
    overflow: auto;
    @media(max-width: 905px){
        padding-top: 74px;
    }
`;
export const Entry = styled.div`
    background: #F2F2F2;
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
    @media(max-width: 905px){
        padding-top: 74px;
        overflow: hidden;
        height: 100vh;
};
`;
