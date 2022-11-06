import styled from "styled-components";

// header //
export const HeaderTopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    `

export const HeaderTopFirstDiv = styled.div`
    display: flex;
    justify-content: start;
    align-items: flex-start;
      width: 33.333%;
      & span {
        font-size: 2.3em;
        display: flex;
        justify-content: center;
        align-items: center;}
      & .SearIconHeader {
        padding: 0px 10px;
      }

`

export const HeaderTopSecondDiv = styled.div`
    display: flex;
    padding: 10px 0;
    justify-content: center;
    align-items: center;
    width: 33.333%;
    & img {
      width: 260px;
      height: 65px;
    }
`

export const HeaderTopThirdDiv = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-start;
  width: 33.333%;
  & span {
    padding: 0 5px;
  }

`

export const HeaderLoginButton = styled.div`
    display: flex;
    padding: 5px 15px;
    font-weight: bold;
    justify-content: center; 
    align-items: center;

    border: 1px solid lightgrey;

`

export const HeaderSocialIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
        font-size: 2.3em;
        display: flex;
        justify-content: center;
        align-items: center;
    }


`
export const HeaderSecondContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    & span {
        
    }
`



// Header Search icon //
export const HeaderSearchIconInput = styled.span`
position: relative;

margin: 5px 5px;
  & input {
   padding: 8px 10px;
   outline: none;
   border: 1px solid lightgrey;
   width: 200px;
   height: 30px;
   font-size: 15px;
   border-radius: 4px;
  }
   & span {
    height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      font-size: 0.3em;
      padding: 5px;
      background-color: gray;
     
   }
`




// HeaderNabBAr //

export const HeaderNavSubMenuContainer = styled.div`
    width: 200px;
    height: auto;
    z-index: 100;
    display: flex;
    flex-direction: column;
    visibility: hidden;
    position: absolute;
    top: 42px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

`


export const HeaderNavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
       padding : 8px 15px;
       font-weight: bold;
       position: relative;
       font-size: 1.2rem;
    }
    & span:hover ${HeaderNavSubMenuContainer} {
        visibility: visible;
    }
`
//  HeaderSubMenuitem //

export const HeaderSubMenuItemContainer = styled.div`

display: flex;
justify-content: start;
align-items: center;
border-bottom: 1px solid lightgreen;
background-color: white;

& svg {

  color: green;
  font-size: 30px;
  margin-left: -11px;
& span {
  font-weight: normal!important;
}
}



`


