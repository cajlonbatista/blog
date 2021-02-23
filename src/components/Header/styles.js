import styled from 'styled-components';
import { jello, wooller } from '../../global/animations/animations';

export const HeaderContainer = styled.main`
  width: 100%;
  position: fixed;
  top: 0;
  display: none;
  min-height: 70px;
  background: #1F2833;
  padding: 10px;
  div:first-child{
    svg{
      width: 30px;
      fill: #C5C6C7;
    }
  }
  @media(max-width: 700px){
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div:last-child{
    svg{
      width: 45px;
      stroke: #66FCF1;
      margin-right: 10px;
    }
  }
`;

export const DrawerContainer = styled.div`
  width: 340px;
  height: 100%;
  background: #1F2833;
  display: flex;
  background: #1F2833;
  backdrop-filter: sepia(90%);
  flex-direction: column;    
  overflow: hidden;
  justify-content: space-between; 
  position: relative; 
  padding: 40px 0px;
  a, span{
    color: #C5C6C7;
    text-decoration: none;
    padding: 7px 0px;
    font-family: Nunito, sans-serif;
    font-size: 14px;
    outline: none;
  }
  article{
    position: absolute;
    right: 5px;
    bottom: 50%;
    width: 50px;
    height: 50px;
    background: #45A29E;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
      stroke: #FFF;
      width: 24px;
    }
  }
  header div:first-child{
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
