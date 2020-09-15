import React, { Component } from 'react';

import {
    Entry,
    SearchConteiner,
    Exit
} from "./styles";

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import CardNew from '../../components/CardNews/CardNew';

import axios from 'axios';
import { message } from 'antd';
import { Link } from 'react-router-dom';
import { BackTop } from "antd";

export default class Search extends Component {
    state = {
        data: [],
        search: "",
        loading: false,
        status: 'none'
    }
    onSearch = () => {
        if (this.state.search == "") {
            message.error("Preencha com uma palavra chave !")
        } else {
            axios.get(`https://cajlon.herokuapp.com/api/search/${this.state.search}`)
                .then(async res => {
                    await this.setState({
                        data: res.data,
                    })
                    if (res.data.length == 0) {
                        message.info("Não encontramos nada. Tente palavras chave");
                    }else{
                        this.setState({
                            status: "block",
                        })
                    }
                })
        }
    }
    render() {
        return (
            <>
                <BackTop />
                <SearchConteiner>
                    <Entry>
                        <InputBase
                            placeholder="Procure um artigo"
                            onChange={async (e) => {
                                await this.setState({
                                    search: e.target.value
                                })
                                axios.get(`https://cajlon.herokuapp.com/api/search/${this.state.search}`)
                                    .then(async res => {
                                        await this.setState({
                                            data: res.data,
                                        })
                                        if(res.data.length != 0){
                                            this.setState({ 
                                                status: "block"
                                            })
                                        }
                                    })
                            }}
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton aria-label="search">
                            <SearchIcon onClick={this.onSearch} />
                        </IconButton>
                    </Entry>
                    <div style={{display: this.state.status, marginBottom: 20, padding: 20 ,display: "flex", justifyContent: "flex-end", color: "white", fontFamily: "Exo, sans-serif", fontSize: 13}}>
                            {
                                (this.state.data.length == 0)
                                ?
                                <div></div>
                                :
                                <div>
                                    {this.state.data.length} resultados encontrados
                                </div>
                            }
                    </div>
                    <Exit>
                        {
                            this.state.data.map(article => {
                                return (
                                    <Link to={`/article/${article._id}`} key={article._id}>
                                        <CardNew data={article}></CardNew>
                                    </Link>
                                );
                            })
                        }
                    </Exit>
                </SearchConteiner>
            </>
        );
    }
}