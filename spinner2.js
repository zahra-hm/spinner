let symbols = "|/-\|/-\|";
let time = 100;
let x = 0;
for (const char of symbols) {
  setTimeout(() => {
    symbols[x] = char
    x++;
    if (x !== symbols.length) {
      process.stdout.write(`\r${char}    `);
    } else {
      process.stdout.write(`\r${char}   \n`);
    }
  }, time += 200)

}