import axios from "axios";

const makeRequest = async (url, method, type) => {
  const startTime = performance.now();
  try {
    const response = await axios({ url, method });
    const endTime = performance.now();
    return {
      url,
      method,
      type,
      status: response.status,
      duration: endTime - startTime,
      headers: response.headers,
      data: response.data,
    };
  } catch (error) {
    const endTime = performance.now();
    return {
      url,
      method,
      type,
      status: error.response ? error.response.status : "Error",
      duration: endTime - startTime,
      headers: error.response ? error.response.headers : {},
      data: error.response ? error.response.data : {},
    };
  }
};

const simulateRequests = async () => {
  const requests = await Promise.all([
    makeRequest("https://fakestoreapi.com/products/1", "GET", "Fetch/XHR"),
    makeRequest("https://dummyjson.com/products/1", "GET", "Fetch/XHR"),
    makeRequest("https://api.json.com/script.js", "GET", "JS"),
    makeRequest("https://api.dummystyles.com/styles.css", "GET", "CSS"),
    makeRequest("https://api.doc.com/document.html", "GET", "Doc"),
  ]);
  return requests;
};

export { simulateRequests };
