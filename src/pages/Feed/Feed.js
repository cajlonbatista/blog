import React, { Component } from 'react';

import {
    LayoutNews
} from './styles';
import axios from 'axios';
import CardNew from '../../components/CardNews/CardNew';
import {
    BlockReserveLoading
} from "react-loadingg";

export default class Feed extends Component {
    state = {
        data: [],
        loading: true,
    }
    componentDidMount() {
        axios.get('https://cajlon.herokuapp.com/api/articles')
            .then(res => {
                this.setState({
                    data: res.data.docs,
                    loading: false,
                })
                console.log(res.data);
            })
    }
    render() {
        if (this.state.loading == true) {
            return (
                <div style={{background: "#181818", height: "100vh"}}>
                    <BlockReserveLoading/>
                </div>
            );
        } else {
            return (
                <LayoutNews>
                    {
                        this.state.data.map(article => (
                            <a href={`/article/${article._id}`}>
                                <CardNew data={article}></CardNew>
                            </a>
                        ))
                    }
                </LayoutNews>
            );
        }
    }
}