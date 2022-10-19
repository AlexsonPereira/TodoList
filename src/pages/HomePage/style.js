import styled from 'styled-components'

export const TodoList = styled.div`
  width: 350px;
  height: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0px 0px 25px -10px #00000087;
  padding: 15px 10px;

  > ul {
    width: 100%;
    background-color: #ffffff;
    height: 100%;
    margin-top: 20px;
    border-radius: 4px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 10px;
  }
`
