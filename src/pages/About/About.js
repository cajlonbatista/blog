import React from "react";
import styled from "styled-components";

import {
    StickyBallLoading
} from "react-loadingg";

import dev from '../../assets/images/dev.svg';

const ContentAbout = styled.div`
    p{
        font-size: 18px;
        font-family: Exo, sans-serif;
        text-align: justify;
        color: #B5B5B5;
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
    }
    a{
        color: #6092ff;
        text-decoration: underline;
        width: 100%;
        max-width: 700px;
        margin: 0 auto;    }
`;
const ConteinerAbout = styled.div`
    animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 905px){
        padding-top: 75px;
        padding-left:  10px;
        padding-right:  10px;
    }
    height: 100vh;
    background-color: #2F3136;
    overflow: auto ;
    padding: 20px;
    h1{
        text-align: center;
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
    }
    img{
        margin: 0 auto;
        width: 100%;
        max-width: 500px;
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
                    <h1 style={{ color: "#6092ff", fontFamily: "Poppins, sans serif", fontSize: 25 }}>Sobre Mim</h1>
                    <br/>
                    <ContentAbout>
                        <p>Oi, meu nome é Francisco Cajlon, vivo em Caxias-MA e tenho 17 anos, estou cursando o 3º ano do Ensino Médio integrado ao curso de Técnico em Informática e atuando como FullStack Developer. <a href="https://www.google.com/search?q=IFMA+Campus+caxias&source=lmns&bih=657&biw=1366&hl=pt-BR&sa=X&ved=2ahUKEwiT5_egmuzrAhUjL7kGHZrrAJcQ_AUoAHoECAEQAA" target="_blank">IFMA Campus Caxias</a></p>
                        <img src={dev} />
                    </ContentAbout>
                </ConteinerAbout>
            );
        }
    }
}