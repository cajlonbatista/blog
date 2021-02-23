import styled from 'styled-components';

import { content } from '../animations/animations';

import wave from '../assets/svg/wave.svg';

export const IndexContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  background: #0B0C10;
  grid-template-columns: 350px 1fr;
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
  >div{
    padding: 20px;
    animation: ${content} 0.4s backwards;
    animation-delay: 0.4s;
    @media(max-width: 600px){
      padding: 20px 10px;
    }
    >h1{
      font-family: Nunito, sans-serif;
      font-size: 20px;
      color: #C5C6C7;
      margin: 10px;
    }
  }
  >div >div{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding-bottom: 20px;
    margin-bottom: 20px;
    h1{
      font-family: Nunito, sans-serif;
      color: #E5624D;
    }
    div{
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 400px;
      min-height: 40px;
      position: relative;
      input{
        display: block;
        width: 100%;
        height: 42px;
        padding: 13px 30px 13px 14px;
        font-family: Inter, sans-serif;
        font-size: 13.5px;
        outline: none;
        background: #1F2833;
        color: #FFF;
        transition: all 0.3s;
        border: 2px solid transparent;
        border-radius: 5px;
        ::placeholder{
          color: #C5C6C7;
        }
      }
      svg{
        position: absolute;
        width: 20px;
        top: 10px;
        right: 14px;
      }
    }
  }
  >div main:last-child{
    display: grid;
    grid-template-columns: repeat(auto-fit, min(100%, 500px));
    grid-template-rows: 250px;
    article{
      padding: 20px;
      background: #1F2833;
      min-height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      backdrop-filter: blur(20px);
      border: 2px solid transparent;
      transition: all 0.3s;
      position: relative;
      cursor: pointer;
      overflow: hidden;
      border-radius: 10px;
      :hover{
        aside{
          background-color: #E6313120;
        }
        border-color: #45A29E;
      }
      header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-family: Inter, sans-serif;
        span:last-child{
          font-size: 13.2px;
          color: #C5C6C7;
        }
        span:first-child{
          padding: 5px 10px;
          text-transform: uppercase;
          border-radius: 5px;
          font-size: 13.4px;
          color: #f7951d;
          font-weight: 700;
        }
      }
      aside{
        position: absolute;
        width: 90px;
        height: 500px;
        transform: rotate(-160deg);
        background-color: transparent;
        bottom: -140px;
        transition: all 0.4s;
        right: -60px;
      }
      div:last-child{
        h1{
          font-family: Inter, sans-serif;
          color: #C5C6C7;
          font-weight: 500;
          font-size: 18px;
          border-bottom: 2px solid transparent;
          padding-bottom: 6px;
          margin-bottom: 30px;
          transition: all 0.5s;
          text-align: center;
        }
        p{
          font-family: Nunito, sans-serif;
          font-size: 14px;
          text-align: justify;
          transition: all 0.4s;
          color: #C5C6C7;
          margin-bottom: 20px;
        }
      }
    }
  }
`;