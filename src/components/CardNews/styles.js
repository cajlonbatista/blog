import styled from "styled-components";

export const CardPaper = styled.div`
    padding: 10px 20px;
    border-radius: 5px;
    width: 70px;
    display: flex;
    justify-content: center;
    font-family: Roboto, sans-serif;
`;
export const HeaderCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        font-family: Archivo, sans-serif;
        font-size: 14px;
    }
`;
export const CardConteiner = styled.div`
    background: white;
    padding: 20px;
    border: 1px solid #6092FF;
    transition: all 0.4s;
    cursor: pointer;
    :hover{
        opacity: 0.6;
    }
`;
export const ContentCard = styled.div`
    padding: 10px;
    h2{
        
        
        
        font-family: Exo, sans-serif;
        padding-bottom: 10px;
        color: #6092FF;
    }
    p{
        font-family: Noto Sans, sans-serif;
        color: black;
    }
`;