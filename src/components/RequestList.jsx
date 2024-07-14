import PropTypes from "prop-types";
import styled from "styled-components";

const ListContainer = styled.div`
  width: 50%;
  overflow-y: auto;
  border-right: 1px solid #ccc;
 background-color:#BEE7DA;
  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
  }
`;

const ListItem = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const RequestInfo = styled.div`
  flex-grow: 1;
`;

const RequestUrl = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const RequestDetails = styled.div`
  font-size: 0.9em;
  color: #666;
`;

const TypeBadge = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  background-color: ${(props) => {
    switch (props.type) {
      case "Fetch/XHR":
        return "#007bff";
      case "JS":
        return "#28a745";
      case "CSS":
        return "#ffc107";
      case "Doc":
        return "#17a2b8";
      default:
        return "#6c757d";
    }
  }};
  color: white;
  margin-left: 10px;
`;

function RequestList({ requests, setSelectedRequest }) {
  return (
    <ListContainer>
      {requests.map((request, index) => (
        <ListItem key={index} onClick={() => setSelectedRequest(request)}>
          <RequestInfo>
            <RequestUrl>{request.url}</RequestUrl>
            <RequestDetails>
              {request.method} - {request.status} |{" "}
              {request.duration.toFixed(2)} ms
            </RequestDetails>
          </RequestInfo>
          <TypeBadge type={request.type}>{request.type}</TypeBadge>
        </ListItem>
      ))}
    </ListContainer>
  );
}

RequestList.propTypes = {
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
      status: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      duration: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  setSelectedRequest: PropTypes.func.isRequired,
};

export default RequestList;
