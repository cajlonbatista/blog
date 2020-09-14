import React, { PureComponent } from "react";

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
            <div>
                <div>
                    <span style={{ background: color, color: "white" }}>{card}</span>
                    <span>{publishedAt}</span>
                </div>
                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}