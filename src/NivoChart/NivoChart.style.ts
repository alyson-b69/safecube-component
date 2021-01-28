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
    height:300px;
    min-height:300px;
  }
`