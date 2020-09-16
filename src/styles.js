import styled from 'styled-components';

export const Layout = styled.div`
    display: grid;
    grid-template-columns: 2fr 6fr;
    @media(max-width: 905px){
        display: flex;
        flex-direction: column-reverse;
    }
    background: #181818;
`;