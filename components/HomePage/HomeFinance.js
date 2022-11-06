import { Col, Container, Row } from "react-bootstrap";
import Hero2 from "../HeroSection/Hero2";
import BangladeshMap from "./BangladeshMap";

function HomeFinance() {
    return (
      
            <Container>
                <Row>
                    <Col xs={12} lg={9} style={{borderTop: "1px solid lightgrey"}}>
                        <Hero2 headingText={"কর্পোরেট সংবাদ"} headingText2={"অর্থনীতি"}></Hero2>
                    </Col>
                    <Col xs={12} lg={3}>
                        <BangladeshMap/>
                    </Col>
                </Row>
            </Container>
     
    );
}

export default HomeFinance;