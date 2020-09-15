import React from "react";

import styled from "styled-components";

const NotConteiner = styled.div`
    background: #202020;
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    img{
        width: 100%;
        max-width: 260px;
        animation: lubu 4s inifinite;
    }
    h1{
        font-family: Exo, sans-serif;
        font-size: 44px;
        margin-top: 200px;
        color: #B5B5B5;
        background: url(https://media4.giphy.com/media/dAWZiSMbMvObDWP3aA/giphy.gif) no-repeat;
        -webkit-background-clip: text;
-webkit-text-fill-color: transparent; 
        text-align: center;
    }
`;

export default function NotFound(){
    return(
        <NotConteiner>
            <div style={{position: "relative"}}>
            <h1>404 Not Found</h1>
            </div>
        </NotConteiner>
    );
}