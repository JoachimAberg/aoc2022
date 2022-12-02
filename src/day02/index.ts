import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let splittad = input.split(/\r?\n/);
  let res = 0;
  //A X STEN  1
  //B Y PÅSE  2
  //C Z SAX   3
  //0 3 6
  const STEN = 1;
  const PASE = 2;
  const SAX = 3;
  const VINST = 6;
  const OAVGJORT = 3;
  const FORLUST = 0;

  splittad.forEach((a) => {
    var spsValPoang = 0;
    var resulatPoang = 0;
    switch (a) {
      case "A X": {
        spsValPoang = STEN;
        resulatPoang= OAVGJORT;
        break;
      }
      case "A Y": {
        spsValPoang = PASE;
        resulatPoang = VINST;
        break;
      }
      case "A Z": {
        spsValPoang = SAX;
        resulatPoang = FORLUST;
        break;
      }
      
      case "B X": {
        spsValPoang = STEN;
        resulatPoang = FORLUST;
        break;
      }

      case "B Y": {
        spsValPoang = PASE;
        resulatPoang= OAVGJORT;
        break;
      }
      case "B Z": {
        spsValPoang = SAX;
        resulatPoang= OAVGJORT;
        break;
      }
      case "C X": {
        spsValPoang = STEN;
        resulatPoang = VINST;
        break;
      }
      case "C Y": {
        spsValPoang = PASE;
        resulatPoang = FORLUST;
        break;
      }
      case "C Z": {
        spsValPoang = SAX;
        resulatPoang= OAVGJORT;
        break;
      }
    }
    res = res + spsValPoang + resulatPoang;
  });
  return res;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let splittad = input.split(/\r?\n/);
  let res = 0;
  //A X STEN  1
  //B Y PÅSE  2
  //C Z SAX   3
  //0 3 6
  const STEN = 1;
  const PASE = 2;
  const SAX = 3;
  const VINST = 6;
  const OAVGJORT = 3;
  const FORLUST = 0;

  splittad.forEach((a) => {
    var spsValPoang = 0;
    var resulatPoang = 0;
    switch (a) {
      case "A X": { //STEN
        spsValPoang = SAX;
        resulatPoang = FORLUST;
        break;
      }
      case "A Y": { //STEN
        spsValPoang = STEN;
        resulatPoang = OAVGJORT;
        break;
      }
      case "A Z": { //STEN
        spsValPoang = PASE;
        resulatPoang = VINST;
        break;
      }
      
      case "B X": { //PASE
        spsValPoang = STEN;
        resulatPoang = FORLUST;
        break;
      }

      case "B Y": {//PASE
        spsValPoang = PASE;
        resulatPoang = OAVGJORT;
        break;
      }
      case "B Z": {//PASE
        spsValPoang = SAX;
        resulatPoang = VINST;
        break;
      }
      case "C X": {//SAX
        spsValPoang = PASE;
        resulatPoang = FORLUST;
        break;
      }
      case "C Y": {//SAX
        spsValPoang = SAX;
        resulatPoang = OAVGJORT;
        break;
      }
      case "C Z": {//SAX
        spsValPoang = STEN;
        resulatPoang = VINST;
        break;
      }
    }
    res = res + spsValPoang + resulatPoang;
  });
  return res;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
