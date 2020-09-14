import styled from 'styled-components';

export const LayoutNews = styled.div`
    display: grid;
    background: #6092FF;
    height: 100vh;
    overflow: auto;
    grid-template-columns: repeat(auto-fill, minmax(auto, 400px));
    grid-auto-rows: min-content;
`;