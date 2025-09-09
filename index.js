import { converterDate } from "./lib/converter.js";
import { interfaceConvert } from "./lib/interfaceConvert.js";

async function main() {
  try {
    const input = await interfaceConvert("Masukkan Tanggal (dd-mm-yy): ");
    const convert = await converterDate(input);
    console.log(`Hasil Konversi: ${convert}`);
  } catch (err) {
    console.log(err);
  }
}

main();
