import PropTypes from "prop-types";
import styled from "styled-components";

const FilterContainer = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
  margin-bottom: 20px;
   background-color:#BEE7DA;
`;

const FilterInput = styled.input`
  width: 98%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

function FilterBar({ setFilter }) {
  return (
    <FilterContainer>
      <FilterInput
        type="text"
        placeholder="Filter requests..."
        onChange={(e) => setFilter(e.target.value)}
      />
    </FilterContainer>
  );
}

FilterBar.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default FilterBar;
