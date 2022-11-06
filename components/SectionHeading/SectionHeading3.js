import { SectionHeading3Container } from "./Styled.SectionHeading";

function SectionHeading3({ headingText, colorKey }) {
    return (
        <>
            <SectionHeading3Container colorKey={colorKey}>
                <span></span>
                {headingText}
                </SectionHeading3Container> 
        </>
    );
}

export default SectionHeading3;