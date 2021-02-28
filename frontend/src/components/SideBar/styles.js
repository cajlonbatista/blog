import styled from 'styled-components';

import { jello } from '../../global/animations/animations';

export const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 50px 0px;
  display: flex;
  background: #FF5252;
  backdrop-filter: sepia(90%);
  flex-direction: column;    
  justify-content: space-between;  
  border-radius: 0px 50px 50px 0px;
  @media(max-width: 700px){
    display: none;
  }
  >div:first-child{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 999;
    align-items: center;
    h1{
      font-family: Inter, sans-serif;
      font-size: 23px;
      color: #FFF;
      margin-top: 10px;
    }
    svg{
      width: 70px;
      stroke: #1F2833;
      cursor: pointer;
    }
  }
  a, span{
    color: #FFF;
    text-decoration: none;
    padding: 7px 0px;
    font-family: Inter, sans-serif;
    font-size: 13.4px;
    outline: none;
    letter-spacing: 0.6px;
    font-weight: 400;
  }
  >section{
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    div{
      width: 100%;
      max-width: 200px;
      cursor: pointer;
      padding: 4px 15px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      transition: all 0.4s;
      svg{
        width: 24px;
        margin-right: 15px;
      }
      :hover{
        svg{
          animation: ${jello} 0.5s linear;
        }
        opacity: 0.9;
      }
    }
  }
`;
