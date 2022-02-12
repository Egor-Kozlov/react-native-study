const request = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .catch((errorResponse) => console.log(errorResponse));
};

export default request;
