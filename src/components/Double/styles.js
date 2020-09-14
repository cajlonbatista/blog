import styled from 'styled-components';

export const DoubleConteiner = styled.div`
    background: #181818;
    padding: 10px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
    transition: all 0.4s;
    :hover{
        opacity: 0.85;
    }
    @media(min-width: 905px){
        display: none;
    }
`;
export const Dualdor = styled.div`
    span{
        color: white;
        font-family: Exo, sans-serif;
        font-style: italic;
    }
`