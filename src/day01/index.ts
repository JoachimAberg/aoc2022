import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let splittad = input.split(/\r?\n/);
  let summerad : number[] = [0];
  let index = 0;
  splittad.forEach(kcal => {
    if(kcal==''){
      index++
      summerad.push(0);
    } else {
      summerad[index] = summerad[index]+ (+kcal)
    }
    
  });
  summerad = summerad.sort((a,b)=>a>b?1:-1).reverse();
  return summerad[0]
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let splittad = input.split(/\r?\n/);
  let summerad : number[] = [0];
  let index = 0;
  splittad.forEach(kcal => {
    if(kcal==''){
      index++
      summerad.push(0);
    } else {
      summerad[index] = summerad[index]+ (+kcal)
    }
    
  });
  summerad = summerad.sort((a,b)=>a>b?1:-1).reverse();
  return summerad[0]+summerad[1]+summerad[2];
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
