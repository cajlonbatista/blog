import React, { Component } from 'react';

import {
    DoubleConteiner,
    Dualdor
} from './styles';

export default class Double extends Component {
    render() {
        return (
            <DoubleConteiner>
                <Dualdor>
                    <span>A definição de insanidade é fazer a mesma coisa repetidamente e esperar resultados diferentes.</span>
                </Dualdor>
            </DoubleConteiner>
        );
    }
}