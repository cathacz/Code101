console.log("===== Zodiac =====");

// const arrZodiac = {
//   Aries: [{ start: "21-03", end: "19-04" }],
//   Taurus: [{ start: "20-04", end: "20-05" }],
//   Gemini: [{ start: "21-05", end: "20-06" }],
//   Cancer: [{ start: "21-06", end: "22-07" }],
//   Leo: [{ start: "23-07", end: "22-08" }],
//   Virgo: [{ start: "23-08", end: "22-09" }],
//   Libra: [{ start: "23-09", end: "22-10" }],
//   Scorpio: [{ start: "23-10", end: "21-11" }],
//   Sagittarius: [{ start: "22-11", end: "21-12" }],
//   Capricorn: [{ start: "22-12", end: "19-01" }],
//   Aquarius: [{ start: "20-01", end: "18-02" }],
//   Pisces: [{ start: "19-02", end: "20-03" }],
// };

// const arrZodiac = [
//   { Aries: { start: "21-03", end: "19-04" } },
//   { Taurus: { start: "20-04", end: "20-05" } },
//   { Gemini: { start: "21-05", end: "20-06" } },
//   { Cancer: { start: "21-06", end: "22-07" } },
//   { Leo: { start: "23-07", end: "22-08" } },
//   { Virgo: { start: "23-08", end: "22-09" } },
//   { Libra: { start: "23-09", end: "22-10" } },
//   { Scorpio: { start: "23-10", end: "21-11" } },
//   { Sagittarius: { start: "22-11", end: "21-12" } },
//   { Capricorn: { start: "22-12", end: "19-01" } },
//   { Aquarius: { start: "20-01", end: "18-02" } },
//   { Pisces: { start: "19-02", end: "20-03" } },
// ];

const arrZodiac = [
  { name: "Aries", start: "21-03", end: "19-04" },
  { name: "Taurus", start: "20-04", end: "20-05" },
  { name: "Gemini", start: "21-05", end: "20-06" },
  { name: "Cancer", start: "21-06", end: "22-07" },
  { name: "Leo", start: "23-07", end: "22-08" },
  { name: "Virgo", start: "23-08", end: "22-09" },
  { name: "Libra", start: "23-09", end: "22-10" },
  { name: "Scorpio", start: "23-10", end: "21-11" },
  { name: "Sagittarius", start: "22-11", end: "21-12" },
  { name: "Capricorn", start: "22-12", end: "19-01" },
  { name: "Aquarius", start: "20-01", end: "18-02" },
  { name: "Pisces", start: "19-02", end: "20-03" },
];

const zodiac = function (str) {
  let result;
  let arr = str.split("-");
  let birthDay = arr[0];
  let birthMonth = arr[1];
  let birthDate = arr[1] + arr[0];
  console.log(birthDate);
  console.log(birthDay + birthMonth);

  for (let prop of arrZodiac) {
    let propArrStart = prop.start.split("-");
    // let propArrEnd = prop.end.split("-");
    let dayStart = propArrStart[0];
    let monthStart = propArrStart[1];
    let dateStart = propArrStart[1] + propArrStart[0];
    // let dayEnd = propArrEnd[0];
    // let monthEnd = propArrEnd[1];
    //console.log(dayStart + monthStart);
    if ((birthMonth = monthStart)) {
      result = prop.name;
    } else {
      result = "Crap";
    }
  }

  //let result = "coming soon – under construction";
  return result;
};
console.log(zodiac("14-02-2002")); // -> Aquarius
console.log(zodiac("10-06-1984")); // -> Gemini
console.log(zodiac("28-04-1987")); // > Taurus
console.log(zodiac("28-13-1987")); // > not a valid date
console.log(arrZodiac[10].name);

//console.log(Object.keys(arrZodiac.Leo.start));
