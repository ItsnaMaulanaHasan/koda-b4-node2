import { converterDate } from "./lib-sync/converter.js";
import { converterDateManual } from "./lib-sync/converterManual.js";
import { interfaceInput } from "./lib-sync/interfaceInput.js";

console.log(" ----- Selamat Datang di Converter Date ----- \n");
console.log(" Proses Synchronus");
interfaceInput(" Masukkan Tanggal (DD-MM-YYYY) (dengan moment): ", (input1) => {
  converterDate(input1);
  interfaceInput(" Masukkan Tanggal (DD-MM-YYY) (Tanpa Moment): ", (input2) => {
    converterDateManual(input2);
  });
});
