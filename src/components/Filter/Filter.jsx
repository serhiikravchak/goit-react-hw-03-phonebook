
import PropTypes from 'prop-types';
import { FilterInput, Label, Wrapper } from "./Filter.styled";

export const Filter = ({ value, onChange }) => (
  <Wrapper>
    <Label>
      Find contacts by name
      <FilterInput type="text" value={value} onChange={onChange} />
    </Label>
  </Wrapper>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};