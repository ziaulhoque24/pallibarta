import styled from "styled-components";

export const Hero1ItemChildren = styled.div`
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    background-image: ${(props) => `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(${props.url})`};


`
export const Hero1Container = styled.div`
    display: grid;
    padding: 0px 0 10px 0px;
    grid-template-areas:
    'item1 item1 item3 item3 item3 item4 item4'
    'item1 item1 item3 item3 item3 item4 item4'
    'item2 item2 item3 item3 item3 item5 item5'
    'item2 item2 item3 item3 item3 item5 item5'
    ;
   
      @media (max-width: 425px) {
        grid-template-areas:
            'item1 item1'
            'item1 item1'
            'item2 item3'
            'item4 item5'
    ;
       }
   & .item1 {
    grid-area: item1;
        @media (max-width: 425px) {
            height: 240px;
       }
   }
   & .item2 {
    grid-area: item2;
        @media (max-width: 425px) {
            height: 120px;
       }
   }
   & .item3 {
    grid-area: item3;
    height: 434px;
        @media (max-width: 425px) {
            height: 120px;
       }


   }
   & .item4 {
    grid-area: item4;
        @media (max-width: 425px) {
            height: 120px;
       }
   }
   & .item5 {
    grid-area: item5;
        @media (max-width: 425px) {
            height: 120px;
       }
   }

   & .item:hover ${Hero1ItemChildren} {
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
   }

`

export const HomeItem1Heading = styled.div`
    
    position: absolute;
    bottom: 0;
    padding: 10px;
    margin: 0;
    font-weight: bold;
    text-align: center;
    font-size: calc(1rem*1.112);
    color: white;
    font-family: var(--surjo);

        @media (max-width: 425px) {
             padding: 5px;
            font-size: 1rem;
        }

`


export const Hero1Item = styled.div`

    height: 215px;
    position: relative;
    margin: 2px;
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    

`




// Colum post module ////////

export const ColumPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;


`

export const ColumPostItem = styled.div`
    display: flex;
    flex-direction: column;

    & img {
        width: 100%!important;
        height: auto!important;
    }

    & h2 {
    padding: 10px 0;
    margin: 0;
    font-weight: bold;
    text-align: justify;
    font-size: calc(1rem*1.112);
    font-family: var(--surjo);
    }


`

/// Colum post module 2

export const ColumPost2Container = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`

export const ColumPost2Item = styled.div`
    width: 48.5%;
    height: 215px;
    position: relative;
    margin: 2px;
    background-image: ${(props) => `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(${props.url})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
        @media (max-width: 425px) {
             height: 120px;
        }

`
export const ColumPost2ItemFirstDiv = styled.div`
    position: absolute;
    bottom: 0;
    padding: 10px;
    margin: 0;
    font-weight: bold;
    text-align: justify;
    font-size: calc(1rem*1.112);
    color: white;
    font-family: var(--surjo);
        @media (max-width: 425px) {
             text-align: center;
             font-size: 1rem;
        }

`






// Colum post 3 //

export const ColumPost3MainContainer = styled.div`

    display: flex;
    flex-direction: column;
    & .ColumPost3Item:last-child{
        border: none;
    }

`

export const ColumPost3FirstItem = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid lightgrey;
    & img {
        width: 100%!important;
        height: auto!important;
    }
    & h2 {
    padding: 10px 5px;
    margin: 0;
    font-weight: bold;
    text-align: justify;
    font-size: calc(1rem*1.112);
    font-family: var(--surjo);
    }


`


export const ColumPost3Item = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid lightgrey;

    & h2 {
    padding: 8px;
    margin: 0;
    font-weight: bold;
    text-align: justify;
    font-size: calc(1rem*1.112);
    font-family: var(--surjo);
    }


`