import { Col, Row } from "react-bootstrap";
import SectionHeading2 from "../SectionHeading/SectionHeading2";
import ColumPost from "./ColumPost";
import ColumPost2 from "./ColumPost2";

function Hero2({ headingText , headingText2}) {
    return (
        <Row>
            <Col xs={12} lg={4}>
                <ColumPost headingText={headingText}></ColumPost>
            </Col>
            <Col xs={12} lg={8}>
                <SectionHeading2 headingText={headingText2} colorKey={"red"} />
                <ColumPost2></ColumPost2>
            </Col>
        </Row>
    );
}

export default Hero2;