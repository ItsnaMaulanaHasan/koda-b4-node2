import { converterDateAsync } from "./lib-async/converter.js";
import { converterDateManualAsync } from "./lib-async/converterManual.js";
import { interfaceInputAsync } from "./lib-async/interfaceInput.js";

const main = async () => {
  try {
    console.log(" Proses Asynchronus");
    const input1 = await interfaceInputAsync(" Masukkan Tanggal (DD-MM-YYYY) (dengan moment): ");
    const convertMoment = await converterDateAsync(input1);
    console.log(` Hasil Convert dengan moment: ${convertMoment}`);
    const input2 = await interfaceInputAsync(" Masukkan Tanggal (DD-MM-YYYY) (tanpa moment): ");
    const convertManual = await converterDateManualAsync(input2);
    console.log(` Hasil Convert dengan moment: ${convertManual}`);
  } catch (err) {
    console.log(err);
  }
};

main();
