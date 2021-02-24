import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow: hidden;
    background: #101010;
  }
  @media(min-width: 800px){
    ::-webkit-scrollbar-thumb{
      background: #147F76;
      border-radius: 2px;
    }
    ::-webkit-scrollbar{
      width: 7px;
    }
  }
`;

export default GlobalStyle;