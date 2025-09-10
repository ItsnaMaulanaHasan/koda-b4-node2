import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function interfaceInputAsync(quest) {
  return new Promise((resolve) => {
    rl.question(quest, (input) => {
      resolve(input);
    });
  });
}
