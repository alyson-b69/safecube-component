import styled from "styled-components";

const styledExcel = styled.div`
  overflow: auto;
  font-size: 0.8em;
  margin: 0 auto;
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
        display:flex;
        flex-direction: column;
      }
      & :first-child {
        width: 20px;
        border-right: solid 1px gray;
        color: #dddddd;
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
        }
        & :nth-child(2) {
          border-left: solid 1px gray;
        }
      }
    }
  }
`;

export default styledExcel;
