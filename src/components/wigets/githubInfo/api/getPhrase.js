const getPhrase = () => {
  const response = fetch("https://api.github.com/zen")
    .then((response) => response.text())
    .then((res) => console.log(res));

  // console.log(response);
  return response;
};

export default getPhrase;
