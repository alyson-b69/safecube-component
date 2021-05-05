import styled from "styled-components";

const color = {
    border: '#dddddd',
    background: '#f4f4f4',
    backgroundCell: '#f4f4f470',
    green: '#7EB279',
    lightGeen : '#7EB27963',
    blue: '#2088E9',
    lightBlue: '#2088E963'
}

const styledExcel = styled.div`
  overflow: auto;
  font-size: 0.8em;
  margin: 0 auto 20px auto;
  max-height: 300px;
  width: 100%;

  & table {
    width: fit-content;
    display: flex;
    flex-direction: column;
    border: solid 1px ${color.border};
    margin: 0 auto;
    border-radius: 5px;

    & thead > tr {
      display: flex;
      height: 30px;

      & th {
        background: ${color.background};
        border: solid 1px ${color.border};
        width: 150px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: relative;
        
        & span{
          color: #F3685C;
          right: 8px;
          position: absolute;
          cursor: pointer;
          &:hover{
            color:#CE2C1E;
          }
        }

        &.hover {
          background: ${color.blue};
          border-color: ${color.blue};
          color: #ffffff;
          cursor:pointer;
          transition: all ease-in-out 0.4s;
        }
        
        &.assigned {
          background: ${color.green};
          border-color: ${color.green};
          color: #ffffff;
        }
      }

      & th:first-of-type {
        width: 20px;
        border-right: solid 1px ${color.border};
        color: ${color.background};
        &:hover{
          background: ${color.background};
          color: ${color.background};
        }
      }
    }

    & tbody {
      border-left: solid 1px ${color.border};

      & tr {
        display: flex;
        &:nth-child(even){
          background: ${color.backgroundCell};
        }
        
        & th {
          width: 20px;
          border: solid 1px ${color.border};
          margin-left: -1px;
          border-right: solid 1px ${color.border};
          border-bottom: solid 1px ${color.border};
          background: ${color.background};
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        & td {
          border: solid 1px ${color.border};
          width: 150px;
          transition: all ease-in-out 0.4s;
          cursor: default;
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          &.hover{
            background: ${color.lightBlue};
            border-color: ${color.lightBlue};
            cursor: pointer;
          }
          &.assigned{
            background: ${color.lightGeen};
            border-color: ${color.lightGeen};
          }
        }

        & :nth-child(2) {
          border-left: solid 1px ${color.border};
        }
        
        &.not-good-data{
          & td{
            &.hover{
              background-color: transparent;
              border: solid 1px ${color.border};
            }
            &.assigned{
              background-color: transparent;
              border: solid 1px ${color.border};
            }
          }
          
        }
      }
    }
  }
`;

export default styledExcel;
