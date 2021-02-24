import styled from 'styled-components';

import wave from '../assets/svg/wave.svg';

export const PostContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  background: #0B0C10;
  grid-template-columns: 260px 1fr;
  animation-direction: alternate;
  overflow: hidden;
  background-image: url(${wave});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom right;
  @media(max-width: 700px){
    display: flex;
    flex-direction: column;
    padding-top: 80px;
  }

`;
