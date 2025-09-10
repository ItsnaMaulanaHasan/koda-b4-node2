export const converterDateManualAsync = (date) => {
  return new Promise((resolve, reject) => {
    date = date.split("-");
    const [day, month, year] = date;
    let convert = new Date(`${year}-${month}-${day}`);
    if (isNaN(convert)) {
      reject(` Error: ${convert}`);
    } else {
      resolve(` ${day}/${month}/${year}`);
    }
  });
};
