import styled from 'styled-components';
import checkmarkDone from '../../../assets/checkmark-done.svg';

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px auto;
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
`

export const TimelineBar = styled.span<{isDone: boolean}>`
  position:absolute;
  background: ${props => props.isDone ? '#7EB279' : '#EEEEEE'};
  width: 22vw;
  height: 8px;
  font-weight: bold;
  top: 45%;
  left:40px;
  z-index: -1;
`

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