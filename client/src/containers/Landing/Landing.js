import React from "react";
import "./Landing.css";
import { Col, Row, Button, Display, Image, Spacer, Text, Card } from '@zeit-ui/react';

export default function Landing() {
  
  return (
    <div className="landing">
      <Col span={12} gap={2} align="middle" className="landingCTA">
      <Image.Browser url="https://react.zeit-ui.co/en-us/guide/introduction" invert>
      <Image width="540" height="246" src="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png" />
    </Image.Browser>
        <Text h3>
          Let's meet up over code.
        </Text>
        <Display shadow caption="ZEIT Now for GitHub deploying a pull request automatically.">
          <Image src={require("../../assets/landingbg.png")} />
        </Display>
        <Display shadow caption="ZEIT Now for GitHub deploying a pull request automatically.">
          <Image src={require("../../assets/landingbg.png")} />
        </Display>
      </Col>

      <Col span={10} align="middle">
      <Spacer y={1}/>
      <Card shadow>
        <Row span={6} justify="center">
          <Text h1 size="6vw">Git</Text><Text h1 size="6vw" type="success">Meet!</Text>
        </Row>
        <Text h3>
          Let's meet up over code.
        </Text>
        <Display>
          <Image src={require("../../assets/landinglogingraphic.png")} />
        </Display>
        <Text h5 type="secondary">
          We match local developers create connections through code.
        </Text>
        <Spacer y={1.5}/>
        <Button type="secondary" size="large" ghost>Login with github</Button>
        <Spacer y={1.5}/>
      </Card>
      </Col>
    </div>
  )
}