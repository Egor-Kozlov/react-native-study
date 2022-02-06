const getText = (setState) => {
  fetch("https://api.github.com/zen")
    .then((response) => response.text())
    .then((res) => setState(res))
    .catch((error) => console.log(error.message));
};

export default getText;
