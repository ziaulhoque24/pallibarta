import styled from "styled-components";

export const FooterFirstSection = styled.div`

    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    padding: 20px;
    & .imgContainer {
        position: relative;
        width: 200px;
        height: 47px;
    }

`

export const FooterFirstSectionContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 425px) {
     padding-top: 10px;
  }


`

export const FooterNavContainer = styled.div`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    & span {
        padding: 10px 4px;
        cursor: pointer;
        @media (max-width: 425px) {
        padding: 10px 1px;
  }
    }
    & span:before {
    content:"•";
    color: var(--des-color);
    padding: 0px 15px;
    @media (max-width: 425px) {
        padding: 10px 7px;
  }
} 
& span:first-child:before {
    content:"";
} 

`

export const FooterCopyright = styled.div`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    & span {
        font-size: .9rem;
        padding: 5px 15px;
        font-weight: bold;
        @media (max-width: 425px) {
        font-size: .8rem;
        text-align: center;
  }
    }

`
export const FooterCopyrightPublisher = styled.div`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding-bottom: 20px;
    & span {
        font-size: .9rem;
        padding: 0px 15px;
        font-weight: bold;
        @media (max-width: 425px) {
        font-size: .8rem;
        text-align: center;
  }
    }

`

export const FooterDevelopmentCopyright = styled.div`
    padding: 10px;
    font-size: .8rem;
    float: right;


`