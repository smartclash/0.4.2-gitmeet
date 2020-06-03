import React from "react";
import "./Meet.css";
import { Col, Spacer, Text, Card, Row } from '@zeit-ui/react';

export default function Meet() {
    const projectsFound = false;
    if(projectsFound){
        return (
            <Col span={22} align="middle">
                <Text h2 type="default">
                    Found the coolest projects in your area!
                </Text>
            </Col>
        )
    }
    return(
        <div className="noProjects">
            <Card shadow type="alert">
                <Row span={6} justify="center">
                    <Text h1 style={{color:"black"}}>Oops</Text><Text h1>, no active projects in your area.</Text>
                </Row>
            </Card>
        </div>
    )
}