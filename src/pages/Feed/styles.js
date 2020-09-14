import styled from 'styled-components';

export const LayoutNews = styled.div`
    display: grid;
    background: url(https://c4.wallpaperflare.com/wallpaper/336/163/715/honeycombs-abstract-minimalism-simple-background-wallpaper-preview.jpg) no-repeat;
    background-size: cover;
    height: 100vh;
    overflow: auto;
    grid-template-columns: repeat(auto-fill, minmax(auto, 400px));
    grid-auto-rows: min-content;
`;
