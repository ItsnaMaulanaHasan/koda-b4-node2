import { converterDate } from "./lib/converter.js";
import { interfaceInput } from "./lib/interfaceInput.js";

async function main() {
  try {
    console.log(" ----- Selamat Datang di Converter Date ----- \n");
    const input = await interfaceInput(" Masukkan Tanggal (dd-mm-yy): ");
    const convert = await converterDate(input);
    console.log(`\n Hasil Konversi: ${convert}`);
  } catch (err) {
    console.log(err);
  }
}

main();
