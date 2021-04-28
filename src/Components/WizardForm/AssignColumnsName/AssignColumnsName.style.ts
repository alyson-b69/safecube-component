import styled from 'styled-components';

export const AssignContainer = styled.div`
  display:flex;
  flex-direction: column;
`

export const SessionAssignment = styled.div`
  // width: calc(100% - 20px);
  padding: 20px;
  margin-bottom: 20px;
  background: #f4f4f4;
  border-radius: 5px;
  display:flex;
  flex-direction: column;
  text-align: left;
  & h4{
    margin: 0;
    height: ;
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
  & h4{
    background:${(props)=> props.disabled ? '#C4C4C4' : props.status === 'selected' ? '#2088E9' : props.status === 'assigned' ? '#7EB279' : '#FB9600'};
    padding: 5px;
    color: #ffffff;
    font-size: 12px;
  }
  & p{
    font-size: 14px;
    margin: 5px 10px;
    &.not-assigned{
      color: #C4C4C4;
      font-style: italic;
    }
  }
`