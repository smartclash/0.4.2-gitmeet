import React from "react";
import Mdcard from "../../components/mdcard/Mdcard";
import CardFooterInfo from "../../components/cardFooterInfo/cardFooterInfo";
import MeetButton from "../../components/meetButton/meetButton";
import "./Meet.css";
import { Col, Spacer, Text, Card, Row,} from '@zeit-ui/react';

export default function Meet() {
    
    const projectsFound = true;
    const initialSource = `
# Live demo
Changes are automatically rendered as you type.
## Table of Contents
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
## HTML block below
<blockquote>
This blockquote will change based on the HTML settings above.
</blockquote>
## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
<Markdown source="# Your markdown here" />,
document.getElementById('content')
);
\`\`\`
Pretty neat, eh?
## Tables?
| h1    |    h2   |      h3 |
|:------|:-------:|--------:|
| 100   | meh  | woah |
| *foo* | **bar** | ~~baz~~ |
## More info?
Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
---------------
A component by [Espen Hovlandsdal](https://espen.codes/)
`

    if(projectsFound){
        return (
            <div className="containerMeet">

                <Spacer y={1.5}/>

                    <Text h2 type="default">
                        Found the coolest projects in your area!
                    </Text>

                <Spacer y={1.5}/>

                    <Card shadow type="lite" id="md-container">
                        <Mdcard input={initialSource} />
                        <Card.Footer>
                            <CardFooterInfo />
                        </Card.Footer>
                    </Card>

                <Spacer y={3}/>

                <MeetButton />

                <Spacer y={6}/>

            </div>
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