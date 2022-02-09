const requestText = (url) => {
  return fetch(url)
    .then((response) => response.text())
    .then((res) => res)
    .catch((error) => console.log(error.message));
};

export default requestText;
