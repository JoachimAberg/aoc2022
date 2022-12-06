import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  return getPacketNumber(4, input); 
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  return getPacketNumber(14, input); 
};

let getPacketNumber = (size: number, input: string) => {
  let ret= size;
  for (let index = size; index < input.length; index++) {
    let listan = input.substring(index-size,index).split("");
    let settet = new Set<string>(listan);
    if(settet.size==size){
      ret=index;
      break;
    }
  }
  return ret;
}

run({
  part1: {
    tests: [
      {
        input: `nppdvjthqldpwncqszvftbrmjlhg`,
        expected: 5,
      },
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
