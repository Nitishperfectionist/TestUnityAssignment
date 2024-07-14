import { useState, useEffect } from "react";
import { AppContainer, FilterChips, FilterChip } from "./styles";
import NetworkPanel from "./components/NetworkPanel";
import { simulateRequests } from "./api";

function App() {
  const [requests, setRequests] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);

  const filterTypes = ["All", "Fetch/XHR", "JS", "CSS", "Doc"];

  useEffect(() => {
    const fetchRequests = async () => {
      const newRequests = await simulateRequests();
      setRequests(newRequests);
    };

    fetchRequests();
  }, []);

  const toggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredRequests = requests.filter(
    (request) =>
      activeFilters.length === 0 ||
      activeFilters.includes("All") ||
      activeFilters.includes(request.type)
  );

  return (
    <AppContainer>
      <h1
        style={{ textAlign: "center", marginBottom: "20px", color: "#3F1E36" }}
      >
        DevTools Replica
      </h1>
      <FilterChips>
        {filterTypes.map((filter) => (
          <FilterChip
            key={filter}
            active={activeFilters.includes(filter)}
            onClick={() => toggleFilter(filter)}
          >
            {filter}
          </FilterChip>
        ))}
      </FilterChips>
      <NetworkPanel requests={filteredRequests} />
    </AppContainer>
  );
}

export default App;
