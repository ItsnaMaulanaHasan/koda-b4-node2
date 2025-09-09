import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function interfaceConvert(quest) {
  return new Promise((resolve) => {
    rl.question(quest, (input) => {
      resolve(input);
      rl.close();
    });
  });
}
