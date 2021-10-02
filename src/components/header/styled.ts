import styled from 'styled-components';

type props = {
    theme: string
    backTheme: string
}
export const Button = styled.button`

  background-color: #225ed8;
  padding: 8px 16px;
  margin: 0 16px;
  border-radius: 8px;

  &:hover {
    background-color: #2c5282;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Toggle = styled.button<props>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${props => `${props.theme} `};
  color: ${props => `${props.backTheme}`};

  &:focus {
    outline: none;
  }

  transition: all .5s ease;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
  }

  span {
    font-weight: bold;
    color: #ffff;
  }
`;
