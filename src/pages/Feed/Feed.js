import React, { Component } from 'react';

import {
    LayoutNews,
    NotFound
} from './styles';
import axios from 'axios';
import CardNew from '../../components/CardNews/CardNew';
import {
    BlockReserveLoading
} from "react-loadingg";
import { Link } from 'react-router-dom';

export default class Feed extends Component {
    state = {
        data: [],
        loading: true,
    }
    componentDidMount() {
        axios.get('https://cajlon.herokuapp.com/api/articles')
            .then(res => {
                this.setState({
                    data: res.data,
                    loading: false,
                })
            })
    }
    render() {
        if (this.state.loading == true) {
            return (
                <div style={{ background: "#202020", height: "100vh" }}>
                    <BlockReserveLoading />
                </div>
            );
        } else {
            if (this.state.data.total == "0") {
                return(
                    <NotFound>
                        <img src="http://pngimg.com/uploads/simpsons/simpsons_PNG84.png" width="300px"></img>
                        <h2>Não esquenta, em breve teremos algo aqui !</h2>
                    </NotFound>
                );
            } else {
                return (
                    <LayoutNews>
                        {
                            this.state.data.docs.map(article => (
                                <Link to={`/article/${article._id}`} key={article._id}>
                                    <CardNew data={article}></CardNew>
                                </Link>
                            ))
                        }
                    </LayoutNews>
                );
            }
        }
    }
}