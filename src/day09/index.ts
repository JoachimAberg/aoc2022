import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
    .split("\n")
    .map((r) => r.split(" "));
  let hcur: [number, number] = [0, 0];
  let tcur: [number, number] = [0, 0];
  let hNext: [number, number] = [0, 0];
  let operations: string[] = [];
  let tSet = new Set<string>();
  tSet.add("x" + tcur[0] + "y" + tcur[1]);
  input.forEach((a) => {
    for (let i = 0; i < +a[1]; i++) {
      operations.push(a[0]);
    }
  });
  operations.forEach((o) => {
    switch (o) {
      case "U":
        hNext = [hcur[0], hcur[1] + 1];
        break;
      case "D":
        hNext = [hcur[0], hcur[1] - 1];
        break;
      case "L":
        hNext = [hcur[0] + 1, hcur[1]];
        break;
      case "R":
        hNext = [hcur[0] - 1, hcur[1]];
        break;
    }
    if (Math.abs(hNext[0] - tcur[0]) > 1 || Math.abs(hNext[1] - tcur[1]) > 1) {
      tcur = [hcur[0], hcur[1]];
      tSet.add("x" + tcur[0] + "y" + tcur[1]);
    }
    hcur = [hNext[0], hNext[1]];
  });
  return tSet.size;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
    .split("\n")
    .map((r) => r.split(" "));
  let tail: [number, number][] = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ];
  let operations: string[] = [];
  let tSet = new Set<string>();
  tSet.add("0,0");
  input.forEach((a) => {
    for (let i = 0; i < +a[1]; i++) {
      operations.push(a[0]);
    }
  });

  operations.forEach((o) => {
    switch (o) {
      case "U":
        tail[0] = [tail[0][0], tail[0][1] + 1];
        break;
      case "D":
        tail[0] = [tail[0][0], tail[0][1] - 1];
        break;
      case "R":
        tail[0] = [tail[0][0] + 1, tail[0][1]];
        break;
      case "L":
        tail[0] = [tail[0][0] - 1, tail[0][1]];
        break;
    }

    for (let i = 1; i < tail.length; i++) {
      tail[i] = korrigera(tail[i - 1], tail[i]);
    }
    tSet.add(tail[9][0] + "," + tail[9][1]);
  });

  return tSet.size;
};

function korrigera(
  head: [number, number],
  tail: [number, number],
): [number, number] {
  let diffX = head[0] - tail[0];
  let diffY = head[1] - tail[1];
  if (Math.abs(diffX) <= 1 && Math.abs(diffY) <= 1) {
    return tail;
  } else if (Math.abs(diffX) >= 2 && Math.abs(diffY) >= 2) {
    return [head[0] + (diffX > 0 ? -1 : +1), head[1] + (diffY > 0 ? -1 : +1)];
  } else if (Math.abs(diffX) >= 2) {
    return [head[0] + (diffX > 0 ? -1 : +1), head[1]];
  } else if (Math.abs(diffY) >= 2) {
    return [head[0], head[1] + (diffY > 0 ? -1 : +1)];
  }
  return tail;
}

run({
  part1: {
    tests: [
      {
        input: `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`,
        expected: 13,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`,
        expected: 36,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
