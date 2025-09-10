import moment from "moment";

export const converterDate = (date) => {
  date = moment(date, "DD-MM-YYYY");
  if (date.isValid()) {
    console.log(` Hasil Convert: ${date.format("DD/MM/YYYY")}`);
  } else {
    console.log(` Error: Format input tidak sesuai`);
  }
};
