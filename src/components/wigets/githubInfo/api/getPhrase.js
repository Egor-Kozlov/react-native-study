const getPhrase = () => {
    return fetch('https://api.github.com/zen')
    .then(response => response.text())
    .then(res => console.log(res))
}

export default getPhrase