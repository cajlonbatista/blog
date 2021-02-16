import styled from 'styled-components';

import { content } from '../animations/animations';

import wave from '../assets/svg/wave.svg';

export const IndexContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  background: #101010;
  grid-template-columns: 350px 1fr;
  animation-direction: alternate;
  overflow: hidden;
  background-image: url(${wave});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom right;
  >div{
    padding: 20px;
    animation: ${content} 0.4s backwards;
    animation-delay: 0.4s;
    >h1{
      font-family: Nunito, sans-serif;
      font-size: 20px;
      color: #b8b7b9;
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
        height: 34px;
        padding: 5px 30px 5px 10px;
        font-family: Inter, sans-serif;
        font-size: 13.5px;
        outline: none;
        background: transparent;
        color: #8F8E8F;
        transition: all 0.3s;
        border-left: 0;
        border-top: 0;
        border-right: 0;
        border-bottom: 2px solid #8F8E8F;
        :focus{
          border-color: #8F8E8F;
        }
      }
      svg{
        position: absolute;
        width: 22px;
        top: 5px;
        right: 10px;
      }
    }
  }
  >div main:last-child{
    display: grid;
    grid-template-columns: repeat(auto-fit, min(100%, 500px));
    grid-template-rows: 250px;
    article{
      padding: 20px;
      background: #0A0A0A;
      min-height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      backdrop-filter: blur(20px);
      border: 2px solid transparent;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      :hover{
        aside{
          background-color: #E6313120;
        }
        border-color: #E6313120;
      }
      header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-family: Inter, sans-serif;
        span:last-child{
          font-size: 13.2px;
          color: #606060;
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
          color: #b8b7b9;
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
          color: #606060;
          margin-bottom: 20px;
        }
      }
    }
  }
`;