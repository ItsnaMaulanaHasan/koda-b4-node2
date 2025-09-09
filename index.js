import { converterDate } from "./lib/converter.js";
import { converterDateManual } from "./lib/converterManual.js";
import { interfaceInput } from "./lib/interfaceInput.js";

async function main() {
  try {
    console.log(" ----- Selamat Datang di Converter Date ----- \n");
    const input = await interfaceInput(" Masukkan Tanggal (dd-mm-yy): ");
    const convert = await converterDate(input);
    const convertManual = await converterDateManual(input);
    console.log(`\n Hasil Konversi dengan moment: ${convert}`);
    console.log(`\n Hasil Konversi tanpa moment: ${convertManual}`);
  } catch (err) {
    console.log(err);
  }
}

main();
