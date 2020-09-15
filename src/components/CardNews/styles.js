import styled from "styled-components";

export const CardPaper = styled.div`
    padding: 10px 20px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    font-family: Roboto, sans-serif;
`;
export const HeaderCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
    border-bottom: 2px solid #B5B5B5;
    margin-bottom: 20px;
    span{
        font-family: Archivo, sans-serif;
        font-size: 14px;
    }
`;
export const CardConteiner = styled.div`
    background: #202020;
    padding: 20px;
    border: 2px solid #333333;
    transition: all 0.4s;
    cursor: pointer;
    :hover{
        opacity: 0.87;
        border: 2px solid #94cbfa;
    }
`;
export const ContentCard = styled.div`
    padding: 10px;
    h2{
        font-family: Exo, sans-serif;
        padding-bottom: 10px;
        color: #4c84b2;
    }
    p{
        font-family: Noto Sans, sans-serif;
        color: black;
    }
`;