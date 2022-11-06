import { Container } from "react-bootstrap";
import Hero1 from "../HeroSection/Hero1";

function HomeLifestyleSection() {
    return (
        <>
            <div style={{ backgroundColor: "rgb(239 239 239)" }}> 
                <Container>
                    <Hero1 headingText={"লাইফস্টাইল"}></Hero1>
                </Container>
            </div> 
        </>
    );
}

export default HomeLifestyleSection;