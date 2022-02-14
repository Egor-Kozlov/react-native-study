const convertDateToString = (objDate) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return objDate.toLocaleDateString("en-EN", options); // <- return some like 'February 2, 2020'
};

export default convertDateToString;
