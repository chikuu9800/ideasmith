import React from 'react'
import Bounce from './Bounce'
import { Col, Container, Row, } from 'react-bootstrap';
import TextCounter from './TextCounter';
import BulbAnimation from './BulbBounce';

const Joureny = () => {
    return (
        <>
            <div className="journey">


                <Container>
                    <Bounce text="ABOUTus" duration={1} stagger={0.2} />
                    <Row>
                        <Col style={{position:"relative"}}>
                            <h1 className="title">Crafting Ideas, Defining Stories!</h1>
                            <p className="sub-title">
                                You know the saying, "Keep your thinking cap on", we took that seriously. We took it so seriously that now we are the Smithnians for conjuring ideas and giving you a well-defined story. Thinking on your feet is a cliché, as it leads advertisers to make your product pretty with bold slogans and eye- catchy designs but with an unclear message. We create campaigns that compel the audience to engage, pause and think.

                                To make yourself heard in the cacophonies of advertising, it all starts with an ingenious idea!</p>
                            <BulbAnimation />

                            <div className="expirence">
                                <h1><TextCounter />years of expirence </h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Joureny
