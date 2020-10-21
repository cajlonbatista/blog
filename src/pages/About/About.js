import React from "react";
import styled from "styled-components";

import {
    StickyBallLoading
} from "react-loadingg";

import back from '../../assets/images/aboutback.svg';

const ConteinerAbout = styled.div`
    animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #000000;
    padding: 20px;
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    animation: border 5s both infinite;
    border: 2px solid transparent;
    border-radius: 20px;
    p{
        font-size: 18px;
        font-family: Exo, sans-serif;
        text-align: justify;
        color: #B5B5B5;
        width: 100%;
        transition: all 0.3s;
        max-width: 700px;
        margin: 0 auto;
        padding: 10px 20px;
        border-radius: 10px;
        @media(max-width: 905px){
            font-size: 14px;
            text-align: center;
        }
    }
    img{
        width: 90%;
        max-width: 400px;
    }
`


export default class About extends React.Component {
    state = {
        loading: true,
    }
    componentDidMount() {
        this.timeOut();
    }
    timeOut = () => {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 2000);
    }
    render() {
        if (this.state.loading) {
            return (
                <div style={{ background: "#202020", height: "100vh" }}>
                    <StickyBallLoading></StickyBallLoading></div>
            );
        } else {
            return (
                <ConteinerAbout>
                        <img src={back}/> 
                        <p>Estudante cursando o 3º ano do Ensino Médio, atuando na área de tecnologia a 3 anos, atualmente estou no desenvolvimento web, e  participando projetos open-souce na Nova Crypt South Brazil</p>
                </ConteinerAbout>
            );
        }
    }
}