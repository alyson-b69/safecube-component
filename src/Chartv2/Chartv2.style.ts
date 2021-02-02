import styled from "styled-components";

export const StyledChart = styled.div`
  width: 90%;
  border-radius: 10px;
  margin: 20px auto;
  padding: 15px;
  height: auto;
  overflow-x: hidden;
  background: rgba(196, 196, 196, 0.19);

  & > div {
    padding: 10px 10px;
    // overflow-x: scroll;
    background: #ffffff;
    border-radius: 10px;
  }

  & ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 0;

    & li {
      list-style-type: none;
      margin: 0;
      font-size: 12px;
      display: flex;
      align-items: center;

      &.min::before {
        display: block;
        content: "";
        height: 0.1px;
        width: 20px;
        border: dashed 3px rgba(70, 130, 180, 1);
        margin-right: 5px;
      }

      &.max {
        &::before {
          display: block;
          content: "";
          height: 0.1px;
          width: 20px;
          border: dashed 3px rgba(206, 62, 50, 1);
          margin-right: 5px;
        }
      }

      &.temp-max::before {
        display: block;
        content: "";
        height: 0.1px;
        width: 20px;
        border: solid 3px rgb(255, 125, 100);
        margin-right: 5px;
      }

      &.temp-average::before {
        display: block;
        content: "";
        height: 0.1px;
        width: 20px;
        border: solid 3px rgba(126, 178, 121, 1);
        margin-right: 5px;
      }

      &.temp-min::before {
        display: block;
        content: "";
        height: 0.1px;
        width: 20px;
        border: solid 3px rgba(135, 206, 235, 1);
        margin-right: 5px;
      }
    }
  }
`;
