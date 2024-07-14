import PropTypes from "prop-types";
import styled from "styled-components";

const DetailsContainer = styled.div`
  width: 50%;
  padding: 20px;
  border-left: 1px solid #ccc;
   background-color:#BEE7DA;
  max-height: 500px;  
  overflow: auto; 

  @media (max-width: 768px) {
    width: 100%;
    border-left: none;
    border-top: 1px solid #ccc;
  }
`;

const Header = styled.h2`
  margin-bottom: 10px;
`;

const DetailsText = styled.p`
  margin-bottom: 5px;
`;

const Preformatted = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
`;

function RequestDetails({ request }) {
  if (!request) {
    return (
      <DetailsContainer>
        <Header>Select a request to view details</Header>
      </DetailsContainer>
    );
  }

  return (
    <DetailsContainer>
      <Header>Request Details</Header>
      <DetailsText>
        <strong>URL:</strong> {request.url}
      </DetailsText>
      <DetailsText>
        <strong>Method:</strong> {request.method}
      </DetailsText>
      <DetailsText>
        <strong>Status:</strong> {request.status}
      </DetailsText>
      <DetailsText>
        <strong>Duration:</strong> {request.duration.toFixed(2)} ms
      </DetailsText>
      <Header>Headers</Header>
      <Preformatted>{JSON.stringify(request.headers, null, 2)}</Preformatted>
      <Header>Response Data</Header>
      <Preformatted>{JSON.stringify(request.data, null, 2)}</Preformatted>
    </DetailsContainer>
  );
}

RequestDetails.propTypes = {
  request: PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    status: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    duration: PropTypes.number.isRequired,
    headers: PropTypes.object.isRequired,
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  }),
};

export default RequestDetails;
