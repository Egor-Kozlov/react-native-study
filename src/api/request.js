const request = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((response) => response)
    .catch((errorResponse) => console.log(errorResponse));
};

export default request;
