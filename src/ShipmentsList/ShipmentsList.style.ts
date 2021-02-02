import styled from 'styled-components'
import viewMore from '../assets/view-more.svg'

export const StyledTable = styled.table`
  display:block;
  width: 90%;
  margin: 10px auto;
  border: none;
  border-collapse: collapse;
  border-radius: 5px;
  text-align: left;
  font-size: 0.8rem;
  box-shadow: 0 0 10px rgba( 77, 77, 77, 0.2 );
  
  & thead {
    border-bottom: solid 1px #888F9930;
    border-radius: 5px 5px 0 0;
    display: inline-block;
    & tr{
      height: 60px;
      
      & span.mobile-title{
        display:none;
      }
      
      @media only screen and (max-width: 1000px){
            
        & th{
         display:none;
        }

        & span.mobile-title{
          display: block;
          width: 100%;
          height: 100%;
          font-size: 1rem;
          padding: 22px;
          font-weight: 700;
        }
    }
    }
  }
  
  & thead, tbody {
    width:100%;
    background: #ffffff;
  }
  
  & thead > tr, tbody > tr {
    padding: 5px;
    width: 100%;
    margin: 0;
  }

  & thead tr th:first-child {
    border-radius: 5px 0 0 0;
  }

  & thead tr th:last-child {
    border-radius: 0 5px 0 0;
  }
  
  & thead tr th:nth-child(1), tbody tr td:nth-child(1) {
    width: 6%;
    min-width: 6vw;
  }

  & thead tr th:nth-child(2), tbody tr td:nth-child(2) {
    width: 10%;
  }
  
  & thead tr th:nth-child(3), tbody tr td:nth-child(3) {
    width: 15%;
  }
  & thead tr th:nth-child(4), tbody tr td:nth-child(4) {
    width: 9%;
  }
  & thead tr th:nth-child(5), tbody tr td:nth-child(5) {
    width: 12%;
  }
  & thead tr th:nth-child(6), tbody tr td:nth-child(6) {
    width: 18%;
  }
  & thead tr th:nth-child(7), tbody tr td:nth-child(7) {
    width: 12%;
  }
  & thead tr th:nth-child(8), tbody tr td:nth-child(8) {
    width: 18%;
  }

  & tbody tr:nth-child(odd) {
    background: #F3F4F8;
  }
  
  & tbody{
    overflow-y: scroll;
    overflow-x: hidden;
    display:block;
    height: 50vh;
    border-radius: 0 0 10px 10px;
  }
  
  
  & tbody > tr {
    height: 80px;
    transition: all ease-in-out 0.4s;
    display: inline-table;
    &:hover{
      background: #7EB27940;
      cursor:pointer;
      & span{
        background: #ffffff;
        & span {
          background: #7EB279;
        }
      }
    }
    
    @media only screen and (max-width: 1000px){
      display:flex;
      flex-direction: column;
      height: auto;
      text-align: justify;54a1a
      padding:10px 20px;
      max-width: 100% ;
      & td:nth-child(1){
        width: 100%;
      }
      & td:nth-child(2),td:nth-child(3),td:nth-child(4),td:nth-child(5),td:nth-child(6),td:nth-child(7),td:nth-child(8){
        width: 100%;
        &:before{
          content:attr(data-label) ' : ';
          text-transform: capitalize;
          float:left;
          font-weight: 700;
          padding-right: 10px;
        }
      }
    }
  }
  
    & tbody tr td {
      padding: 5px 0;
    }
   
`

export const ViewMore = styled.span`
  width: 35px;
  height: 35px;
  background: #ECEFF7;
  box-shadow: 0 0 4px rgba(0,0,0, 0.25 );
  border-radius: 50px;
  content: '';
  display: block;
  margin: auto;
  position: relative;
  transition: all ease-in-out 0.4s;
  
  & span {
    position: absolute;
    content: '';
    mask-image: url(${viewMore});
    height: 25px;
    width: 25px;
    background: #888F99;
    mask-size: contain;
    display: block;
    top: 5px;
    left : 5px;
    transition: all ease-in-out 0.4s;
  }
`