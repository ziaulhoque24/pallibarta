import styled from "styled-components";


//  LeadSideBarDayBannerContainer
export const  LeadSideBarDayBannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    & img {
        width: 100%;
        height: 165px;
    }


`

// apnar charpase khobor

export const HomeLeadYourAreaContainer = styled.div`
    display: flex;
    flex-direction: column;

`

export const HomeLeadYourAreaHeading = styled.div`

    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 10px;
    font-weight: bold;
    color: red;
    font-family: var(--surjo);
    


`

export const HomeLeadYourAreaItem = styled.div`




`
///  ADs unite 2

export const HomeLeadAds2 = styled.div`

    width: 100%;
    height: 190px;
    background-color: aqua;

`

// Home lead news 


export const HomeLeadNewsContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    & .BBC:first-child {
        width: 100%;
        & img {
            width: 100%!important;
            height: 263px!important;
        }
         & h1 {
        padding: 10px 0;
        margin: 0;
        font-weight: bold;
        text-align: justify;
        font-size: 2rem;
        font-family: var(--surjo);
    } & p {
        padding: 0 ;
        margin: 0;
        text-align: justify;
        display: block;
        font-family: var(--surjo);
        color: var(--des-color);
    }

    }


`

export const HomeLeadNewsItemContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 50%;

    & img {
        width: 100%!important;
        height: 120px!important;
    }
    & h1 {
        padding: 10px 0;
        margin: 0;
        font-weight: bold;
        text-align: justify;
        font-size: calc(1rem*1.112);
        font-family: var(--surjo);
    } & p {
        display: none;
    }
`

//  Probase news section

export const HomeLeadProbseItem = styled.div`

    display: flex;
    flex-direction: column;
`

export const HomeLeadProbseHeading = styled.div`

    font-weight: bold;
    font-size: calc(1rem*1.112);
    padding: 5px 0px;
    font-family: var(--surjo);

`

// Sidebar Button type menu

export const HomeLeadSideBarButtonContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    font-size: 1em;
    justify-content: center;
    margin: 5px 0;
     & .islam {
        & svg {
        margin-right: 5px;
        font-size: 1.8em;
    }

    }


`

export const HomeLeadSideBarButtonItem = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-family: var(--surjo);
    background-color: darkgreen;
    color: white;
    border-radius: 5px;
    width: 46%;
    padding: 8px 5px;
    margin: 5px;
    & svg {
        margin-right: 5px;
        font-size: 2.1em;
    }
    & path {
        stroke: white!important;
    }
   


`


// Home All Drastic //

export const HomeAllBdContainer = styled.div`
    margin-top: 10px;
   border-top: 1px solid lightgrey;

`

export const HomeAllBdNavMainContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
        @media (max-width: 425px) {
            padding: 10px 0;
                                      }
    & span {
        font-weight: bold;
        padding: 10px 5px;
        color: red;
        font-size: 1.3rem;

            @media (max-width: 425px) {
            font-size: 1rem;
            
                                      }
  
    }
    & .BdHeading {
        @media (max-width: 425px) {
        display: none;
                                  }
  }

`
export const HomeAllBdNavContainer = styled.div`
    width: 81%;
 & span {
        font-weight: bold;
        font-size: 1.3rem;
            @media (max-width: 425px) {
                font-size: 1rem;
                
                                      }
    }
    & span:hover {
        padding: 5px 10px;
        color: white;
        font-size: 1rem;
        background-color: green;
        border-radius: 5px;
    }

`

export const HomeAllBdItemContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;


`

export const HomeAllBdItem = styled.div`

    display: flex;
    flex-direction: column;
    width: 33.33%;
    padding: 5px;

    @media (max-width: 425px) {
       width: 50%;
  }

    & img {
       width: 100%!important;
       height: 180px!important;
       @media (max-width: 425px) {
        width: 100%!important;
       height: 120px!important;
  }
    }
    & h1{

        padding: 10px 0;
        margin: 0;
        font-weight: bold;
        text-align: justify;
        font-size: calc(1rem*1.112);
        font-family: var(--surjo);
    }

`

/// Home all bd side bar / popular and latest 


export const HomeAllBdSideBarMainContainer = styled.div`
margin-top: 10px;


`

export const HomeAllBdSideBarNav = styled.div`

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px 0;


`

export const HomeAllBdSideBarNavItem = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props)=>props.active ? "green" : "lightgrey"}!important;
    width: 45%;
    border-radius: 5px;
    font-weight: bold;
    padding: 8px 10px;
    color: ${(props) => props.active ? "white" : "black"}!important;


`

export const HomeAllBdSideBarNavReadMoreButton = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green!important;
    width: 100%;
    border-radius: 5px;
    font-weight: bold;
    padding: 8px 10px;
    color: white;



`
