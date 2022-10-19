import styled from 'styled-components'

export const FormStyle = styled.form`
  width: 100%;
  display: flex;

  > div {
    width: 100%;
    margin: 0 auto;
    position: relative;

    input {
      width: 100%;
      height: 40px;
      border-radius: 4px;
      outline: none;
      padding: 0 80px 0 10px;
    }

    button {
      position: absolute;
      top: 9px;
      right: 10px;
      border: none;
      padding: 5px 20px;
      border-radius: 4px;
      font-weight: bold;
      background: #c1dbe3;
      color: #ffff;
      cursor: pointer;
      transition: 0.5s;

      :hover {
        background-color: #63bfdc;
      }
    }
  }
`
