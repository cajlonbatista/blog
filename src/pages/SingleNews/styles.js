import styled from "styled-components";


export const ConteinerNews = styled.div`
    background: #2F3136;
    animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
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
        padding-top: 80px;
    }
`;
export const NotConteiner = styled.div`
    background: #202020;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 100%;
        max-width: 260px;
        animation: lubu 4s inifinite;
    }
    h1{
        font-family: Exo, sans-serif;
        font-size: 44px;
        margin-top: 200px;
        color: #B5B5B5;
        background: url(https://media4.giphy.com/media/dAWZiSMbMvObDWP3aA/giphy.gif) no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        text-align: center;
    }
`;

export const HeaderNews = styled.div`
    display: flex;
    background: #202225;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    span{
        font-family: Exo, sans-serif;
        color: whitesmoke;
        font-size: 17px;
    }
    span:last-child{
        @media(max-width: 427px){
            display: none;
        }   
    }
    
`;
export const ContentNews = styled.div`
    padding: 10px;
    margin-top: 60px;

    h1{
        font-family: Archivo, sans-serif;
        color: #B5B5B5;
        text-align: center;
        margin-bottom: 20px;
        padding: 5px;
    }
    h2{
        font-family: Archivo, sans-serif;
        color: #B5B5B5;
        margin: 20px;
    }
    h3{
        font-family: Archivo, sans-serif;
        color: #B5B5B5;
        margin: 20px;

    }
    h4{
        font-family: Poppins, sans-serif;
        color: #B5B5B5;
        font-size: 23px;
        margin: 20px;
    }
    h5{
        font-family: Archivo, sans-serif;
        color: #B5B5B5;
        margin: 20px;
    }
    h6{
        font-family: Archivo, sans-serif;
        color: #B5B5B5;
        margin: 20px;
    }
    p{
        color: whitesmoke;
        font-family: Exo, sans-serif;
        font-size: 17px;
        text-align: justify;
        margin: 20px;
        @media(max-width: 905px){
            margin: 5px;
        }
    }
    img{
        width: 100%;
        max-width: 600px;
        text-align: center;
        display: block;
        margin-left: auto;
        margin-right: auto
        margin-top: 10px;
        margin-bottom: 10px;
        border-radius: 10px;
    }
   
`

