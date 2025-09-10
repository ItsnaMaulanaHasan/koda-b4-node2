import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function interfaceInput(quest, cb) {
  rl.question(quest, (input) => {
    cb(input);
  });
}
