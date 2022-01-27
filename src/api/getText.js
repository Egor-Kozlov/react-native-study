const getText = (setState) => {
  fetch("https://api.github.com/zen")
    .then((response) => response.text())
    .then((res) => setState(res));
};

export default getText;
