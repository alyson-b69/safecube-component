import styled from 'styled-components';

export const AssignContainer = styled.div`
  display:flex;
  flex-direction: column;
`

export const WrapperSessionAssignment = styled.div`
  display: flex;
`

export const SessionAssignment = styled.div<{disabled: boolean}>`
  padding: 20px;
  background: #f4f4f4;
  border-radius: 5px;
  display:flex;
  flex-direction: column;
  text-align: left;
  color: ${props => props.disabled ? '#C4C4C4' : '' };
  &:first-of-type{
    margin-right: 20px;
  }
  & h4{
    margin: 0;
  }
  & div{
    display:flex;
    flex-wrap: wrap;
  }
`

export const Bloc = styled.div<{status: string, disabled:boolean}>`
  display: flex;
  flex-direction: column;
  border: solid 1px ${(props)=> props.disabled ? '#C4C4C4' : props.status === 'selected' ? '#2088E9' : props.status === 'assigned' ? '#7EB279' : '#FB9600'};
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 10px;
  width: 150px;
  box-shadow: ${props => props.status === 'selected' ? '0 0 10px rgba(32, 136, 233, 0.63)' : 'inherit'};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  transition: all ease-in-out 0.4s;
  transform: ${props => props.status === 'selected' ? 'translateY(-5px)' : 'inherit'};
  &:hover{
    transform: ${props => props.disabled ? 'inherit' : 'translateY(-5px)'};
    box-shadow: ${props => props.disabled ? 'inherit' : '0px 16px 40px rgba(0, 0, 0, 0.2)'};
  }
  & h4{
    transition: all ease-in-out 0.4s;
    background:${(props)=> props.disabled ? '#C4C4C4' : props.status === 'selected' ? '#2088E9' : props.status === 'assigned' ? '#7EB279' : '#FB9600'};
    padding: 5px;
    color: #ffffff;
    font-size: 12px;
  }
  & p{
    transition: all ease-in-out 0.4s;
    font-size: 12px;
    margin: 5px 10px;
    &.not-assigned{
      color: #C4C4C4;
      font-style: italic;
    }
  }
`

export const ThingToDo = styled.div`

  @keyframes updown {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform : translateY(-5px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  cusor: default;
  text-align: center;
  
  & h3{
    line-height: 1.17em;
    transition: all ease-in-out 1s;
  }
  
  & strong{
    color: #2088E9;
  }
 
  & span{
    font-weight: bold;
    color: #2088E9;
    display:inline-block;
    // transition: all ease-in-out 1s;
    animation: updown 1s infinite;
  }

`

