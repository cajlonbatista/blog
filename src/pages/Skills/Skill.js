import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
    SkillLayout,
    SkillCard,
    SoftCard
} from "./styles";

import java from "../../assets/icons/java.svg";
import python from "../../assets/icons/python.svg";
import react from "../../assets/icons/react.svg";
import nodejs from "../../assets/icons/nodejs.svg";
import git from "../../assets/icons/git.svg";
import github from "../../assets/icons/github.svg";
import js from "../../assets/icons/js.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";


export default class Skill extends Component {
    render() {
        return (
            <SkillLayout>
                <h3 style={{color: "#B5B5B5"}}>Skills</h3>
                <Link to="about">
                    Visite o Sobre Mim
                </Link>
                <span>Hard Skills</span>
                <SkillCard>
                    <div style={{position: "relative"}}>
                        <img src={react} width="46" style={{position: "absolute", bottom: "19px"}}></img>
                    </div>
                    <div style={{position: "relative"}}>
                        <img src={python} width="40" style={{position: "absolute", bottom: "19px"}}></img>
                    </div>
                    <div style={{position: "relative"}}>
                        <img src={java} width="40"></img>

                    </div>
                    <div style={{position: "relative"}}>
                        <img src={nodejs} width="40" style={{position: "absolute", bottom: "19px"}}></img>
                    </div>
                    <div style={{position: "relative"}}>
                        <img src={github} width="40"></img>
                    </div>
                    <div style={{position: "relative"}}>
                        <img src={git} width="40" style={{position: "absolute", bottom: "19px"}}/>
                    </div>
                    <div style={{position: "relative"}}>
                        <img src={js} width="40" style={{position: "absolute", bottom: "19px"}}/>
                    </div>
                    <div style={{position: "relative"}}>
                        <img src={html} width="40" style={{position: "absolute", bottom: "12px"}}/>
                    </div>
                    <div style={{position: "relative"}}>
                        <img src={css} width="40" style={{position: "absolute", bottom: "12px"}}/>
                    </div>
                    <div style={{position: "relative"}}>
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png" width="40" style={{position: "absolute", bottom: "17px"}}/>
                    </div>
                    <div style={{position: "relative"}}>
                        <img src="https://seeklogo.com/images/M/material-design-logo-8BAFEFE50B-seeklogo.com.png" width="40" style={{position: "absolute", bottom: "19px"}}/>
                    </div>
                    <div style={{position: "relative"}}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1024px-Electron_Software_Framework_Logo.svg.png" width="40" style={{position: "absolute", bottom: "19px"}}/>
                    </div>
                </SkillCard>
                <span>Soft Skills</span>
                <SoftCard>
                    <div>Adaptabilidade</div>
                    <div>Trabalho em Equipe</div>
                    <div>Novas Ideias</div>
                    <div>Comunicação</div>
                </SoftCard>
            </SkillLayout>
        )
    }
}