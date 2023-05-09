export default (error) => {
  const data = error.data;

  if (data) {
    return data.message;
  } else {
    return error.status + " " + error.statusText;
  }
};
