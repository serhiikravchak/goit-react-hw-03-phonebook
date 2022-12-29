import styled from '@emotion/styled'

export const Form = styled.form`
  display: flex;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  font-size: 24px;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 0.5px solid grey;
  cursor: pointer;
  margin-right: 10px;

  :hover {
    outline: 0.5px solid blue;
  }
`;
