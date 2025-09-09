export const converterDateManual = (date) => {
  return new Promise((resolve, reject) => {
    date = date.split("-");
    const day = date[0];
    const month = date[1];
    const year = date[2];

    let convert = new Date(`${year}-${month}-${day}`);
    if (isNaN(convert)) {
      reject(` Error: ${convert}`);
    }
    resolve(`${day}/${month}/${year}`);
  });
};
