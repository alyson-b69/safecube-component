import styled from 'styled-components';

export const WizardFormCard = styled.div`
  width: 90%;
  margin: 20px auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(77 77 77 / 20%);
  padding: 20px;
`

export const StyledButton = styled.button`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 40px;
  height: 40px;
  border: 1px solid rgb(228, 230, 229);
  border-radius: 4px;
  color: rgb(255, 255, 255);
  background-color: #7EB279;
  font-size: 0.9rem;
  font-weight: 700;
  min-width: 160px;
  cursor: pointer;
  &:disabled{
    background-color: #C4C4C4;
  }
`