import styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
  font-size: 24px;
  margin-right: 10px;
`;

export const FilterInput = styled.input`
  border-radius: 5px;
  border: 0.5px solid grey;
  cursor: pointer;
  margin-right: 10px;

  :hover {
    outline: 0.5px solid blue;
  }
`;
