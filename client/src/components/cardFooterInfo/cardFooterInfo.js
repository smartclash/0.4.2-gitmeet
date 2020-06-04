import React, { Component } from "react";
import "./cardFooterInfo.css";
import { Text, Link, User } from '@zeit-ui/react';

export default class CardFooterInfo extends Component {
    
    render() {
        
        const url = 'https://zeit.co/api/www/avatar/?u=evilrabbit&s=160';//test profilepic
        
        const name = 'Kartik Choudhary';

        return (
            <div className="cardFooter">
                <div className="cardFooterLeft">
                    <User src="https://unix.bio/assets/avatar.png" name="Kartik Choudhary">
                        <User.Link target="_blank" href="https://github.com/kartik918">kartik918</User.Link>
                    </User>
                </div>

                <Link className="cardFooterRight" color target="_blank" href="mailto:kartikc.918@gmail.com">
                    <Text>kartikc.918@gmail.com</Text>
                </Link>
            </div>
        )
    }
}
