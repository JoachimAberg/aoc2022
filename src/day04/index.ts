import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  return input
    .split(/\r?\n/)
    .map((a) => a.split(","))
    .filter((s) => {
      let r1 = s[0].split("-").map((val) => +val);
      let r2 = s[1].split("-").map((val) => +val);
      return (r1[0] <= r2[0] && r1[1] >= r2[1]) || (r1[0] >= r2[0] && r1[1] <= r2[1]);
    }).length;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  return input
    .split(/\r?\n/)
    .map((a) => a.split(","))
    .filter((s) => {
      let r1 = s[0].split("-").map((val) => +val);
      let r2 = s[1].split("-").map((val) => +val);
      return (
        (r1[0] >= r2[0] && r1[0] <= r2[1]) ||
        (r1[1] >= r2[0] && r1[1] <= r2[1]) ||
        (r2[0] >= r1[0] && r2[0] <= r1[1]) ||
        (r2[1] >= r1[0] && r2[1] <= r1[1])
      );
    }).length;
};

run({
  part1: {
    tests: [
      {
        input: `2-4,6-8
        2-3,4-5
        5-7,7-9
        2-8,3-7
        6-6,4-6
        2-6,4-8`,
        expected: 2,
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
