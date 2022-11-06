import { Col, Container, Row } from "react-bootstrap";
import ColumPost from "../HeroSection/ColumPost";
import Hero2 from "../HeroSection/Hero2";

function HomeEntertainmentSection() {
    return (
        <>
                <Container>
                    <Row>
                        <Col xs={12} lg={9}>
                            <Hero2 headingText={"বিজ্ঞান ও প্রযুক্তি"} headingText2={"বিনোদন"}></Hero2>
                        </Col>
                        <Col xs={12} lg={3}>
                            <ColumPost headingText={"বিশ্ব"}></ColumPost>
                        </Col>
                    </Row>
                </Container>
        </>
    );
}

export default HomeEntertainmentSection;