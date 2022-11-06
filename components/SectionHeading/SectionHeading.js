import { SectionHeadingContainer } from "./Styled.SectionHeading";

function SectionHeading({ headingText }) {
    return (
        <>
            <SectionHeadingContainer>
                {headingText}
            </SectionHeadingContainer>
        </>
    );
}

export default SectionHeading;