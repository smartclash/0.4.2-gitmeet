import React, { Component, Profiler } from "react";
import { Spacer, Text, Row, Link, Avatar } from '@zeit-ui/react';

export default class CardFooterInfo extends Component {
    
    render() {
        
        const url = 'https://zeit.co/api/www/avatar/?u=evilrabbit&s=160';//test profilepic
        
        state = {
            profile: [
            {
                id: 1,
                name: 'John Dodo',
                email: 'joanh@dodomail.com',
                location: 'Chandigarh'
            }
        ]};

        return (
            <Row>
                <Link color target="_blank" href="https://github.com/zeit-ui/react">
                    <Avatar size="medium" src={url}/>
                    <Text>{profile.name}</Text>
                </Link>
            </Row>
        )
    }
}
