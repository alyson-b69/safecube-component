import styled from "styled-components";

const styledExcel = styled.div`
  overflow: auto;
  font-size: 0.8em;
  margin: 0 auto;
  max-height: 300px;
  width: 100%;

  & table {
    width: fit-content;
    display: flex;
    flex-direction: column;
    border: solid 1px gray;
    margin: 0 auto;

    & thead > tr {
      display: flex;
      border-bottom: solid 1px gray;

      & th {
        background: #dddddd;
        border: solid 1px gray;
        width: 150px;
        display: flex;
        flex-direction: column;

        &.hover {
          background: #2088E9;
          border-color: #2088E9;
          color: #ffffff;
          cursor:pointer;
          transition: all ease-in-out 0.4s;
        }
        
        &.assigned {
          background: #7EB279;
          border-color: #7EB279;
          color: #ffffff;
        }
      }

      & :first-child {
        width: 20px;
        border-right: solid 1px gray;
        color: #dddddd;
        &:hover{
          background: #dddddd;
          color: #dddddd;
        }
      }
    }

    & tbody {
      border-bottom: solid 1px gray;
      border-right: solid 1px gray;
      border-left: solid 1px gray;

      & tr {
        display: flex;

        & th {
          width: 20px;
          border: solid 1px gray;
          margin-left: -1px;
          border-right: solid 1px gray;
          border-bottom: solid 1px gray;
          background: #dddddd;
        }

        & td {
          border: solid 1px lightgray;
          width: 150px;
          transition: all ease-in-out 0.4s;
          background: #ffffff;
          cursor: default;
          &.hover{
            background: #2088E963;
            border-color: #2088E963;
            cursor: pointer;
          }
          &.assigned{
            background: #7EB27963;
            border-color: #7EB27963;
            
          }
        }

        & :nth-child(2) {
          border-left: solid 1px gray;
        }
      }
    }
  }
`;

export default styledExcel;
