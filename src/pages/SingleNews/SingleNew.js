import React, { Component } from "react";
import axios from "axios";
import Markdown from "react-markdown";

import {
    ConteinerNews,
    HeaderNews,
    ContentNews,
    NotConteiner
} from "./styles";

import {
    EatLoading
} from "react-loadingg";
import { Link } from "react-router-dom";
import { BackTop } from "antd";

export default class SingleNews extends Component {
    state = {
        data: {},
        loading: true,
        erro: false,
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        const { match } = this.props;
        console.log(match);
        axios.get(`https://cajlon.herokuapp.com/api/articles/${params._id}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    loading: false,
                });
            }).catch(err => {
                this.setState({
                    loading: false,
                    erro: true,
                })
            })
    }
    render() {
        const { author, publishedAt, title, description, content, card, color } = this.state.data;
        if (this.state.loading) {
            return (
                <div style={{ background: "#202020", overflow: "hidden", height: "100vh" }}>
                    <EatLoading></EatLoading>
                </div>
            );
        } else {
            if (this.state.erro) {
                return (
                    <div style={{ height: "100vh", background: "#202020" }}>
                        <HeaderNews>
                            <Link to="">
                                <svg version="1.1" id="back" fill="whitesmoke" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="30" height="30" viewBox="0 0 511.63 511.631" >

                                    <path d="M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85
                                c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871
                                c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428
                                c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143
                                c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839
                                c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118
                                c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136
                                c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283
                                c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756
                                C511.63,291.039,506.589,259.344,496.5,233.842z"/>
                                </svg>
                            </Link>
                        </HeaderNews>
                        <NotConteiner>
                            <div style={{ position: "relative" }}>
                                <h1>404 Not Found</h1>
                            </div>
                        </NotConteiner>
                    </div>
                );
            } else {
                return (
                    <>
                        <BackTop />
                        <ConteinerNews>
                            <HeaderNews>
                                <Link to="">
                                    <svg version="1.1" id="back" fill="whitesmoke" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="30" height="30" viewBox="0 0 511.63 511.631" >

                                        <path d="M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85
                                    c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871
                                    c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428
                                    c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143
                                    c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839
                                    c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118
                                    c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136
                                    c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283
                                    c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756
                                    C511.63,291.039,506.589,259.344,496.5,233.842z"/>
                                    </svg>
                                </Link>
                                <span style={{ background: color, padding: "7px 20px", borderRadius: 5 }}>{card}</span>
                                <span>{new Date(publishedAt).toDateString()}</span>
                            </HeaderNews>
                            <ContentNews>
                                <Markdown source={content}></Markdown>
                            </ContentNews>
                        </ConteinerNews >
                    </>
                );
            }
        }
    }
}