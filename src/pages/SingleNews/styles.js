import styled from "styled-components";


export const ConteinerNews = styled.div`
    background: #202020;
    height: 100vh;
    overflow: auto;
    h3{
        color: #ff712b;
        font-size: 30px;
        font-weight: 600px;
        padding: 10px 30px;
        text-align: center;
        font-family: Poppins, sans-serif;
    }
    @media(max-width: 905px){
        height: 100vh;
    }
`;
export const HeaderNews = styled.div`
    display: flex;
    background: #202020;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border: 1px #333333 solid;
    span{
        font-family: Exo, sans-serif;
        color: whitesmoke;
        font-size: 17px;
    }
    @media(max-width: 905px){
        margin-top: 80px;
    }
`;
export const ContentNews = styled.div`
    padding: 10px;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    h1{
        font-family: Archivo, sans-serif;
        color: #ff712b;
        text-align: center;
    }
    h2{
        font-family: Archivo, sans-serif;
        color: #ff712b;
    }
    h3{
        font-family: Archivo, sans-serif;
        color: #ff712b;
    }
    h4{
        font-family: Archivo, sans-serif;
        color: #ff712b;
    }
    h5{
        font-family: Archivo, sans-serif;
        color: #ff712b;
    }
    h6{
        font-family: Archivo, sans-serif;
        color: #ff712b;
    }
    p{
        color: whitesmoke;
        font-family: Exo, sans-serif;
        font-size: 17px;
        text-align: justify;
    }
    img{
        width: 100%;
        max-width: 300px;
    }

`
