import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function interfaceInputAsync(quest) {
  return new Promise((resolve, reject) => {
    rl.question(quest, (input) => {
      if (input === "") {
        reject(" Input tidak boleh kosong");
        rl.close();
      } else {
        resolve(input);
        rl.close();
      }
    });
  });
}
