import styled from "styled-components";

export const SearchConteiner = styled.div`
    display: flex;
    flex-direction: column;
    animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    background: black;
    overflow: auto;
    @media(max-width: 905px){
        padding-top: 74px;
    }
`;
export const Entry = styled.div`
    background: #202020;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 30px;
    }
    input{
        width: 30%;
        height: 40px;
        border: 1px solid #6E6E6F;
        border-radius: 5px;
        font-family: Ubuntu;
        background: #393C43;
        color: #73ffdd;
        outline: none;
        padding: 0px 10px;
        transition: all 0.3s;
        :focus{
            border: 1px solid #73ffdd;
        }
    }
    @media(max-width: 600px){
        padding-top: 30px;
        flex-direction: column;
        input{
            width: 70%;
        }
    }
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
