import styled from "styled-components";

export const SectionHeadingContainer = styled.div`

    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 10px;
    font-weight: bold;
    color: red;
    font-size: 1.4rem;
    font-family: var(--surjo);

`

export const SectionHeading2Container = styled.div`

font-weight: bold;
 font-size: 1.5rem;
 padding: 10px 15px;
 color: ${(props) => props.colorKey ? props.colorKey : "red"};

`
export const SectionHeading3Container = styled.div`
 display: flex;
 align-items: center;
 font-weight: bold;
 font-size: 1.5rem;
 padding: 10px 0px 10px 0px;
 color: ${(props) => props.colorKey ? props.colorKey : "red"};

 & span {
    height: 30px;
    width: 3px;
    display: block;
    background-color: green;
    margin-right: 10px;
 }

`