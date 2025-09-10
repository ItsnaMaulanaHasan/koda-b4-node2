export const converterDateManual = (date) => {
  date = date.split("-");
  const [day, month, year] = date;
  let convert = new Date(`${year}-${month}-${day}`);
  if (isNaN(convert)) {
    console.log(` Error: ${convert}`);
  } else {
    console.log(` ${day}/${month}/${year}`);
  }
};
