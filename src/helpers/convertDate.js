const convertDate = (date) => {
  return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
};

export default convertDate;
