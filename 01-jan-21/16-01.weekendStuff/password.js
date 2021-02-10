const passwordGen = () => {
  let allCharacters = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    6,
    7,
    8,
    9,
    "!",
    "§",
    "$",
    "%",
    "&",
    "?",
    "@",
    "€",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let result = "";
  let randomNum;
  for (let i = 0; i <= 30; i++) {
    randomNum = Math.floor(Math.random() * allCharacters.length); //need to be inside the loop!!
    result += allCharacters[randomNum]; //>> result = result + allCharacters[randomNum]>> so every character is random!
  }
  return result;
};

console.log(`New Password: ${passwordGen()}`);

// lottoZahlenGenerator >>> 6 aus 49

const lottoZahlenGenerator = () => {
  let num = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    49,
  ];

  let lotto = "";
  let random;

  for (i = 1; i <= 6; i++) {
    //(i =0; i <= 5; i++) >> geht auch
    random = Math.floor(Math.random() * num.length);
    lotto += `${num[random]},`;
  }
  return lotto;
};

console.log(`Your Pick: ${lottoZahlenGenerator()}`);

const lottoGen = () => {
  let result = "";
  let randomNum;
  for (i = 1; i <= 6; i++) {
    for (j = 1; j <= 49; j++) {
      randomNum = Math.ceil(Math.random() * j); // mit Math.floor 0 dabei...
    }
    result += `${randomNum},`; // numbers can repeat... but why? bzw how to fix that?
  }
  return result;
};
console.log(`Your Numbers: ${lottoGen()}`);
