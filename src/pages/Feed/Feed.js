import React, { Component } from 'react';

import {
    LayoutNews
} from './styles';
import axios from 'axios';
import CardNew from '../../components/CardNews/CardNew';
export default class Feed extends Component{
    state = {
        data: []
    }
    componentDidMount(){
        axios.get('https://cajlon.herokuapp.com/api/articles')
        .then(res => {
            this.setState({
                data: res.data.docs,
            })
            console.log(res.data);
        })
    }
    render(){
        return(
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