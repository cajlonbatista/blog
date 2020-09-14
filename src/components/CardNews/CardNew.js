import React, { PureComponent } from "react";

import {
    CardPaper,
    HeaderCard,
    CardConteiner,
    ContentCard
} from './styles';

export default class CadNew extends PureComponent {
    render() {
        const {
            title,
            description,
            imgToUrl,
            card,
            color,
            publishedAt,
        } = this.props.data;
        return (
            <CardConteiner>
                <HeaderCard>
                    <CardPaper style={{ background: color, color: "white" }}>{card}</CardPaper>
                    <span>{new Date(publishedAt).toDateString()}</span>
                </HeaderCard>
                <ContentCard>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </ContentCard>
            </CardConteiner>
        );
    }
}