const { showHelp, showVersion } = require("./message");
const args = process.argv.slice(2);

if (args.includes("--help")) {
  showHelp();
}

if (args.includes("-v")) {
  showVersion();
}

const capFirst = (str) => {
  let arr = str.map((word) => {
    let fixedWord = word.trim();
    return fixedWord.charAt(0).toUpperCase() + fixedWord.slice(1).toLowerCase();
  });
  console.log(arr.join(", "));
};
capFirst(args);

console.log(args);
