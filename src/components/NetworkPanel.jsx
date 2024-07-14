import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import RequestList from "./RequestList";
import RequestDetails from "./RequestDetails";
import FilterBar from "./FilterBar";

const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  background-color:#3F1E36;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const ContentContainer = styled.div`
  display: flex;
  height: 500px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

function NetworkPanel({ requests }) {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [filter, setFilter] = useState("");

  const filteredRequests = requests.filter((request) =>
    request.url.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <PanelContainer>
      <FilterBar setFilter={setFilter} />
      <ContentContainer>
        <RequestList
          requests={filteredRequests}
          setSelectedRequest={setSelectedRequest}
        />
        <RequestDetails request={selectedRequest} />
      </ContentContainer>
    </PanelContainer>
  );
}

NetworkPanel.propTypes = {
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NetworkPanel;

