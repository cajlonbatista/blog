import React from "react";
import styled from "styled-components";

const ContentAbout = styled.div`
    p{
        font-size: 18px;
        font-family: Exo, sans-serif;
        text-align: justify;
        color: #B5B5B5;
    }
    a{
        color: #6092ff;
        text-decoration: underline;
    }
`;
const ConteinerAbout = styled.div`

    @media(max-width: 905px){
        padding-top: 75px;
        padding-left:  10px;
        padding-right:  10px;

    }
    height: 100vh;
    animation: bounce 2s linear;
    background-color: #202020;
    overflow: auto ;
    padding: 20px;
`


export default function About(){
    return(
        <ConteinerAbout>
            <h1 style={{color: "#6092ff", fontFamily: "Poppins, sans serif", fontSize: 25}}>Sobre Mim</h1>
            <ContentAbout>
                <p>Oi, meu nome é Francisco Cajlon, atualmente vivo em Caxias-MA e atuo com desenvolvedor FullStack JavaScript a procura de emprego 😉. Desenvolvo projetos  <strong>Front-End</strong> (utilizando ReactJS e algumas bibliotecas de componentes) e <strong> Back-End</strong>  (utilizando o NodeJS), a maioria sendo open-source.</p>
                <p>Tenho 17 anos e ainda estou no Ensino Médio, cursando o 3º ano do curso técnico em informática no <a href="https://www.google.com/search?q=IFMA+Campus+caxias&source=lmns&bih=657&biw=1366&hl=pt-BR&sa=X&ved=2ahUKEwiT5_egmuzrAhUjL7kGHZrrAJcQ_AUoAHoECAEQAA" target="_blank">IFMA Campus Caxias
                </a>, e é bem possível que eu curse bacharel em Ciência da Computação nesse mesmo Instituto. Me interresso em aprender sempre mais seja com cursos, pessoas ou através de pequenos problemas que preciso enfrentar nesse maravilhoso mundo da programação. Mas sou sempre recioso com relação ao tempo, esse é o que mais me preocupa, por isso sempre acordo cedo para me dedicar ao mais necessário para depois me dar a luxo de me divertir seja programando ou jogando.
                </p>
                <p>Minha história na programação começa de verdade quando entrei para o curso técnico de Informática integrado ao Ensino Médio em 2018, no início senti bastante dificuldades com a própria programação e recursos, como um computador. Mas com muito foco conseguir gostar de programação. A minha primeiro contato de  linguagem de programação foi com Java, mas o a primeira que aprendi foi o Python. Estudei essa por 1 ano e meio, foi ai que começei com Java. Mas por quê Java ? Na época eu aplicar o que aprendi em algo de verdade, sabe fazer a meu primeiro programa em interface gráfica. Estudei e estudei, pratiquei muitas vezes desenvolvendo exercícios e loucuras que surgiam na minha cabeça. Depois de um tempo tive estudar para um disciplina Programação Orientada a Objetos com Java, o que não foi muito díficil 😁. Então foi no final do ano 2019, que começei a estudar Web, os conceitos básicos, HTML, CSS, JS por um tempo e realmente gostei. Depois de um tempo comecei a estudar JavaScript em eventos e cursos da <a href="https://rocketseat.com.br/">Rocketseat</a> e mergulhar nesse mundo íncrivel que JavaScript pode oferecer 💛😀.</p>
            </ContentAbout>
        </ConteinerAbout>
    );
}