import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  return input
    .split(/\r?\n/)
    .map((a) => a.split(","))
    .filter((s) => {
      let range1 = s[0].split("-").map((val) => +val);
      let range2 = s[1].split("-").map((val) => +val);
      let r1a = range1[0];
      let r1b = range1[1];
      let r2a = range2[0];
      let r2b = range2[1];

      return (r1a <= r2a && r1b >= r2b) || (r1a >= r2a && r1b <= r2b);
    }).length;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  return input
    .split(/\r?\n/)
    .map((a) => a.split(","))
    .filter((s) => {
      let range1 = s[0].split("-").map((val) => +val);
      let range2 = s[1].split("-").map((val) => +val);
      let r1a = range1[0];
      let r1b = range1[1];
      let r2a = range2[0];
      let r2b = range2[1];

      return (
        (r1a >= r2a && r1a <= r2b) ||
        (r1b >= r2a && r1b <= r2b) ||
        (r2a >= r1a && r2a <= r1b) ||
        (r2b >= r1a && r2b <= r1b)
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
