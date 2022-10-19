import styled from 'styled-components'

export const Li = styled.li`
  width: 100%;
  min-height: 40px;
  background-color: ${props => (props.check ? '#ffffff' : '#63bfdc')};
  border-radius: 4px;
  border: 2px solid ${props => (props.check ? '#63bfdc' : 'transparent')};
  transition: 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: ${props => (props.check ? '#63bfdc' : '#ffffff')};
  text-decoration: ${props => props.check && 'line-through 3px'};

  svg {
    cursor: pointer;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .checkbox {
    height: 15px;
    width: 15px;
    background-color: ${props => (props.check ? '#63bfdc' : '#ffffff')};
    border-radius: 4px;
    cursor: pointer;
    color: ${props => (props.check ? '#ffffff' : '#63bfdc')};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;

    > svg {
      font-size: 10px;
    }
  }
`

export const LiCheck = styled.li``
