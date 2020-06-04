import React, { Component } from "react";
import Marked from "marked";

export default class Mdcard extends Component {

    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: Marked(this.props.input) }} />
            </div>
        )
    }
}