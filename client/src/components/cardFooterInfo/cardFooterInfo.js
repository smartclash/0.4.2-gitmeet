import React, { Component, Profiler } from "react";
import "./cardFooterInfo.css";
import { Spacer, Text, Row, Link, Avatar } from '@zeit-ui/react';

export default class CardFooterInfo extends Component {
    
    render() {
        
        const url = 'https://zeit.co/api/www/avatar/?u=evilrabbit&s=160';//test profilepic
        
        const name = 'Kartik Choudhary';

        return (
            <div className="cardFooter">
                <div className="cardFooterLeft">
                    <Avatar size="medium" src={url}/>

                    <Link color target="_blank" href="https://github.com/kartik918">
                        <Text className="profileName">{name}</Text>
                    </Link>
                </div>

                <Link className="cardFooterRight" color target="_blank" href="mailto:kartikc.918@gmail.com">
                    <Text>kartikc.918@gmail.com</Text>
                </Link>
            </div>
        )
    }
}
