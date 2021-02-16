import styled from 'styled-components';

import { inter, jello } from '../../global/animations/animations';

export const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
  overflow: hidden;
  animation: ${inter} 0.6s backwards;
  padding: 50px 0px;
  display: flex;
  background: #0A0A0A;
  backdrop-filter: sepia(90%);
  flex-direction: column;    
  justify-content: space-between;  
  border-radius: 0px 50px 50px 0px;

  >div:first-child{
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 999;
    align-items: flex-start;
    h1{
      font-family: Nunito, sans-serif;
      font-size: 20px;
      color: #b8b7b9;
    }
    svg{
      width: 45px;
      stroke: #ff3535;
      margin-right: 10px;
    }
  }
  a, span{
    color: #b8b7b9;
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
