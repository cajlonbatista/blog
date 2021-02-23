import styled from 'styled-components';

import { inter, jello } from '../../global/animations/animations';

export const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 50px 0px;
  display: flex;
  background: #1F2833;
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
    justify-content: center;
    z-index: 999;
    align-items: flex-start;
    h1{
      font-family: Nunito, sans-serif;
      font-size: 20px;
      color: #C5C6C7;
    }
    svg{
      width: 45px;
      stroke: #66FCF1;
      margin-right: 10px;
    }
  }
  a, span{
    color: #C5C6C7;
    text-decoration: none;
    padding: 7px 0px;
    font-family: Nunito, sans-serif;
    font-size: 14px;
    outline: none;
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
