import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
    .split("\n")
    .map((r) => r.split(" "));
  let val = 1;
  let arr: number[] = [];
  input.forEach((element) => {
    if (element[0] == "noop") {
      arr.push(val);
    } else {
      arr.push(val);
      val = val + +element[1];
      arr.push(val);
    }
  });
  return (
    arr[18] * 20 +
    arr[58] * 60 +
    arr[98] * 100 +
    arr[138] * 140 +
    arr[178] * 180 +
    arr[218] * 220
  );
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
    .split("\n")
    .map((r) => r.split(" "));
  let val = 1;
  let arr: number[] = [];
  input.forEach((element) => {
    if (element[0] == "noop") {
      arr.push(val);
    } else {
      arr.push(val);
      val = val + +element[1];
      arr.push(val);
    }
  });
  let crt=[...Array(240).keys()].map(a=>".").join("");
  for (let i = 1; i <= arr.length; i++) {
    if (Math.abs(i%40-arr[i-1])<=1){
      crt = drawLitPixel(crt, i);
    }  
  }
  console.log(crt.substring(0,40))
  console.log(crt.substring(40,80))
  console.log(crt.substring(80,120))
  console.log(crt.substring(120,160))
  console.log(crt.substring(160,200))
  console.log(crt.substring(200))
  return;
};
function drawLitPixel(str:string,index: number) {
  if(index > str.length-1) return str;
  return str.substring(0,index) + "#" + str.substring(index+1);
}
run({
  part1: {
    tests: [
      {
        input: `addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`,
        expected: 13140,
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
