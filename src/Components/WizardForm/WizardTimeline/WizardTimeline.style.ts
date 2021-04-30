import styled from 'styled-components';
import checkmarkDone from '../../../assets/checkmark-done.svg';

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px auto 40px auto;
`

export const TimelineBubble = styled.div<{isActive: boolean, isDone:boolean}>`
  border-radius: 50%;
  background: ${props => props.isActive || props.isDone ? '#7EB279' : '#EEEEEE'};
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  color: ${props => props.isActive || props.isDone ? '#ffffff' : '#979797'};
  position: relative;
  transition: all ease-in-out 1.5s;
`

export const TimelineBar = styled.span`
  position:absolute;
  background: #EEEEEE;
  width: 22vw;
  height: 8px;
  font-weight: bold;
  top: 45%;
  left:40px;
  z-index: -1;
`

export const TimelineBarFill = styled.span<{isDone: boolean, width:number}>`
  background: ${props => props.isDone ? '#7EB279' : '#EEEEEE'};
  height: 8px;
  display:block;
  content: '';
  width: ${props => props.width}%;
`;

export const ValidatedIcon = styled.span`
  content: '';
  display: block;
  margin: 5px;
  min-width: 40px;
  min-height: 40px;
  background: #fff;
  mask-image: url(${checkmarkDone});
  mask-size: contain;
`
export const TimelineTitle = styled.span<{isActive:boolean}>`
  text-transform: uppercase;
  position: absolute;
  color: ${props => props.isActive ? '#3D3D3B' : '#979797'};
  text-align: center;
  top: 40px;
  font-size: 10px;
  width: 100px;
  left: -50%;
`