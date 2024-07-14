import styled from "styled-components";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const FilterChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const FilterChip = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => (props.active ? "#007bff" : "#f0f0f0")};
  color: ${(props) => (props.active ? "white" : "black")};
  font-size: 14px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#e9ecef")};
  }
`;

export { AppContainer, FilterChips, FilterChip };
