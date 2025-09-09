import { converterDate } from "./lib/converter.js";
import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputAgain = () => {
  rl.question(" Input lagi (y/n): ", (input) => {
    switch (input) {
      case "y":
      case "Y":
        main();
        break;
      case "n":
      case "N":
        rl.close();
        break;
      default:
        rl.question(" Input tidak sesuai ", () => {
          inputAgain();
        });
        break;
    }
  });
};

const main = () => {
  console.clear();
  console.log(" ----- Selamat Datang di Converter Date ----- ");
  rl.question(" Masukkan tanggal (dd-mm-yyy): ", async (inputDate) => {
    try {
      const convert = await converterDate(inputDate);
      console.log(` Hasil convert tanggal: ${convert}`);
      inputAgain();
    } catch (err) {
      console.log(err);
      inputAgain();
    }
  });
};

main();
