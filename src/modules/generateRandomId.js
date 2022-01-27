const generateRandomId = () => {
  return Math.random().toString(26).slice(2);
};

export default generateRandomId;
