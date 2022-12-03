import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let splittad = input.split(/\r?\n/);

  return splittad.map(element =>{
    let forstaHalvan = Array.from(element.substring(0, element.length/2));
    let andraHalvan = Array.from(element.substring(element.length/2));
    let lika = forstaHalvan.filter(char => andraHalvan.includes(char))[0];
    return lika.charCodeAt(0)>96?lika.charCodeAt(0)-96:lika.charCodeAt(0)-38;
  }).reduce((a,b)=> a+b,0);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let splittad = input.split(/\r?\n/);

  let omgjord = [];
  for (let index = 0; index < splittad.length; index=index+3) {
    let forstaHalvan = Array.from(splittad[index]);
    let andraHalvan = Array.from(splittad[index+1]);
    let tredjeHalvan = Array.from(splittad[index+2]);
    let lika = forstaHalvan.filter(char => andraHalvan.includes(char)).filter(char => tredjeHalvan.includes(char))[0];
    omgjord.push(lika.charCodeAt(0)>96?lika.charCodeAt(0)-96:lika.charCodeAt(0)-38);
  }

  return omgjord.reduce((a,b)=> a+b,0);
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
