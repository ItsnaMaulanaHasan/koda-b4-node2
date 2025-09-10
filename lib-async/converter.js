import moment from "moment";

export const converterDateAsync = (date) => {
  return new Promise((resolve, reject) => {
    date = moment(date, "DD-MM-YYYY");
    if (date.isValid()) {
      resolve(` Hasil Convert: ${date.format("DD/MM/YYYY")}`);
    } else {
      reject(" Error: Format input tidak sesuai");
    }
  });
};
