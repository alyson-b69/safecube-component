import styled from "styled-components";
import location from "../../assets/location.svg"

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
  
  & form{
    margin-bottom: 15px;
  }
`

export const StyledTooltip = styled.div<{x:number, y:number, width:number|null, height:number|null}>`
  position: absolute;
  width: 200px;
  background: #ffffff;
  border: solid 2px rgba(126, 178, 121, 1);
  border-radius: 5px;
  font-size: 12px;
  padding: 3px;
  left: ${props => props.x < 50 ? '10px' : props.width !== null && props.x > (props.width - 150) ? '-220px' : '-100px'};
  top: ${props => props.x < 50 || props.width !== null && props.x > (props.width - 150)  ? '-45px' : '10px'};
  
  & h4{
    margin: 3px 0;
  }
  
  & p {
    margin: 0 0 0 5px;
    text-align: left;
    & span{
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display:inline-block;
      margin-right: 5px;
      content:'';
    }
  }

  & footer {
    font-weight: 700;
    align-content: center;
    margin: 3px 0;
    & span {
      display: inline-block;
      content: '';
      mask-image: url(${location});
      width: 13px;
      height: 13px;
      background: #000000;
      mask-size: contain;
      
    }
  }
  
`