import React, { Component } from 'react';

import {
    DoubleConteiner,
    Dualdor
} from './styles';

export default class Double extends Component {
    render() {
        return (
            <DoubleConteiner>
                <Toggle>
                    <img></img>
                </Toggle>
                <Dualdor>
                    <span>Francisco Cajlon</span>
                </Dualdor>
            </DoubleConteiner>
        );
    }
}