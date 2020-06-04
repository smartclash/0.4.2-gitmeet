import React, { Component } from "react";
import "./Mdcard.css";
import * as showdown from 'showdown';

export default class Mdcard extends Component {
    render() {
        const conv = new showdown.Converter({
            tables: true,
            strikethrough: true,
            headerLevelStart: 2,
            tasklists: true,
            ghMentions: true,
            openLinksInNewWindow: true,
            emoji: true,

        });

        return (
            <div className="mdCard" dangerouslySetInnerHTML={{__html: conv.makeHtml(this.props.input) }} />
        )
    }
}
