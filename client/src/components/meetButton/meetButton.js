import React, { Component } from "react";
import { Spacer, Button, ButtonGroup, Col } from '@zeit-ui/react';
import { X, Check } from '@zeit-ui/react-icons'

export default class meetButton extends Component {

    render() {

        return (
            <Col align="middle">
                <ButtonGroup className="meetButton" type="abort" size="large">
                    <Button><X color="red" size={48} /></Button>
                    <Spacer x={3} inline />
                    <Button><Check color="Blue" size={48} /></Button>
                </ButtonGroup>
            </Col>
        )
    }
}
