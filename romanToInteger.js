const romanHash = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

function romanToInt(s) {
  let accumulator = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanHash.hasOwnProperty(s[i] + s[i + 1])) {
      accumulator += romanHash[s[i] + s[i + 1]];
      i++;
    } else {
      accumulator += romanHash[s[i]];
    }
  }
  return accumulator;
}

console.log(romanToInt("MMCDXXXIX"));
