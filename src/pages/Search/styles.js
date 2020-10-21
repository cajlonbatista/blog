import styled from "styled-components";

export const SearchConteiner = styled.div`
    display: flex;
    flex-direction: column;
    animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    background: black;
    overflow: auto;
    height: 100vh;
    @media(max-width: 905px){
        padding-top: 84px;
        height: auto;
        padding-bottom: 0;
    }
`;
export const Entry = styled.div`
    background: black;
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
    a{
        padding: 5px 10px;
        border-radius: 10px;
        background:  #73ffdd;
        border: 1px solid transparent;
        font-size: 15px;
        color: #101010;
        :hover, focus{
            border: 1px solid white;
        }
    }
    @media(max-width: 600px){
        padding-top: 30px;
        input{
            width: 70%;
        }
    }
`;
export const Exit = styled.div`
    display: grid;
    background-size: cover;
    display: grid;
    background: black;
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
