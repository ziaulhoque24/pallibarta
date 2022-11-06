import { SectionHeading2Container } from "./Styled.SectionHeading";

function SectionHeading2({headingText, colorKey}) {
    return (
        <SectionHeading2Container colorKey={colorKey}>
            {headingText}
        </SectionHeading2Container>
        
    );
}

export default SectionHeading2;