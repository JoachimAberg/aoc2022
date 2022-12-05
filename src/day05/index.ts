import run from "aocrunner";
import { exit } from "process";

const parseInput = (rawInput: string) => rawInput;

//Byt till 3 för tester
const length = 9;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).split(/\r?\n/);
  let transformerad = new Array<Array<string>>();
  for (let index = 0; index < length; index++) {
    transformerad.push([]);
  }

  let flyttasFromNasta = false;
  input.forEach((rad) => {
    if (rad[1] == undefined) {
      flyttasFromNasta = true;
      transformerad.map((arr) => arr.reverse());
    } else if (rad[1] == "1") {
    } else {
      if (flyttasFromNasta) {
        let indexFrom = rad.indexOf("from");
        let indexTo = rad.indexOf("to");
        let amount = +rad.substring(5, indexFrom - 1);
        let from = +rad.substring(indexFrom + 5, indexTo - 1) - 1;
        let to = +rad.substring(indexTo + 3) - 1;
        moveAmountFromToPoppers(amount, transformerad[from], transformerad[to]);
      } else {
        populeraArrayFranRad(rad, transformerad);
      }
    }
  });

  let ret = "";
  transformerad.forEach((el) => (el.length>0?ret += el.pop():""));
  return ret;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput).split(/\r?\n/);
  let transformerad = new Array<Array<string>>();
  for (let index = 0; index < length; index++) {
    transformerad.push([]);
  }

  let flyttasFromNasta = false;
  input.forEach((rad) => {
    if (rad[1] == undefined) {
      flyttasFromNasta = true;
      transformerad.map((arr) => arr.reverse());
    } else if (rad[1] == "1") {
    } else {
      if (flyttasFromNasta) {
        let indexFrom = rad.indexOf("from");
        let indexTo = rad.indexOf("to");
        let amount = +rad.substring(5, indexFrom - 1);
        let from = +rad.substring(indexFrom + 5, indexTo - 1) - 1;
        let to = +rad.substring(indexTo + 3) - 1;
        moveAmountFromToNonPoppers(
          amount,
          transformerad[from],
          transformerad[to],
        );
      } else {
        populeraArrayFranRad(rad, transformerad);
      }
    }
  });

  let ret = "";
  transformerad.forEach((el) => (el.length>0?ret += el.pop():""));
  return ret;
};

function moveAmountFromToPoppers(
  amount: number,
  from: Array<string>,
  to: Array<String>,
) {
  for (let index = 0; index < amount; index++) {
    let val = from.pop();
    if (val) {
      to.push(val);
    }
  }
}
function populeraArrayFranRad(rad: string, transformerad: string[][]){
  let startIndex = 1;
  for (let index = 0; index < length; index++) {
    if (isValueIndex(rad[startIndex])) {
      transformerad[index].push(rad[startIndex]);
    }
    startIndex = startIndex + 4;
  }
}
let isValueIndex = (val: string) => val != " " && val != undefined;


function moveAmountFromToNonPoppers(
  amount: number,
  from: Array<string>,
  to: Array<String>,
) {
  let splicen = from.splice(-amount);
  splicen.forEach((s) => to.push(s));
}
run({
  part1: {
    tests: [
      {
        input: `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`,
        expected: "CMZ",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`,
        expected: "MCD",
      },
    ],
    solution: part2,
  },
  trimTestInputs: false,
  onlyTests: false,
});
