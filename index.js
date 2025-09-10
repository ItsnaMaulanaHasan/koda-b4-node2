import { converterDate } from "./lib/converter.js";
import { converterDateManual } from "./lib/converterManual.js";
import { interfaceInput } from "./lib/interfaceInput.js";

console.log(" ----- Selamat Datang di Converter Date ----- \n");
interfaceInput(" Masukkan Tanggal (dengan moment): ", (input1) => {
  converterDate(input1);
  interfaceInput(" Masukkan Tanggal (Tanpa Moment): ", (input2) => {
    converterDateManual(input2);
  });
});
