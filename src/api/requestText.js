const requestText = (url) => {
  return fetch(url)
    .then((response) => response.text())
    .catch((error) => "New quotes will appear soon...");
};

export default requestText;
