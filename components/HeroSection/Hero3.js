import { Col, Container, Row } from "react-bootstrap";
import ColumPost3 from "./ColumPost3";

function Hero3({ headingText }) {
    return (
        <>

                <Container>
                    <Row>
                        <Col xs={12} lg={3}>
                            <ColumPost3 headingText={headingText[0]}></ColumPost3>
                        </Col>
                           
                        <Col xs={12} lg={3}>
                            <ColumPost3 headingText={headingText[1]}></ColumPost3>
                        </Col>
                            
                        <Col xs={12} lg={3}>
                            <ColumPost3 headingText={headingText[2]}></ColumPost3>
                        </Col>
                            
                        <Col xs={12} lg={3}>
                            <ColumPost3 headingText={headingText[3]}></ColumPost3>
                        </Col>
                    </Row>
                </Container>
        </>
    );
}

export default Hero3;