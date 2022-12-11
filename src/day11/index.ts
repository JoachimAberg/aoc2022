import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;
type Operation = (old: number) => number;
type Test = (
  val: number,
  testNum: number,
  ifTrue: number,
  ifFalse: number,
) => number;
const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
    .split("\n\n")
    .map((m) => m.split("\n"));
  // console.log(input.length);
  let monkeyList: Monkey[] = [];
  input.forEach((monkey) => {
    let items = monkey[1]
      .substring(monkey[1].indexOf(":") + 1)
      .split(",")
      .map(Number);
    // console.log(items);

    let operation = monkey[2].substring(monkey[2].indexOf("=") + 1);
    let testNum = +monkey[3].trim().split(" ")[3];
    let ifTrue = +monkey[4].trim().split(" ")[5];
    let ifFalse = +monkey[5].trim().split(" ")[5];
    // console.log(items, operation, testNum, ifTrue, ifFalse);

    monkeyList.push(
      new Monkey(
        monkey[0],
        items,
        testNum,
        ifTrue,
        ifFalse,
        (old) => +eval(operation),
      ),
    );
  });
  
  // console.log(monkeyList);
  for (let i = 0; i < 20; i++) {
    round(monkeyList, true);
  }
  let sorted = monkeyList.map((m) => m.inspected).sort((a, b) => b - a);

  return sorted[0] * sorted[1];
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
    .split("\n\n")
    .map((m) => m.split("\n"));
   console.log(input.length);
  let monkeyList: Monkey[] = [];
  input.forEach((monkey) => {
    let items = monkey[1]
      .substring(monkey[1].indexOf(":") + 1)
      .split(",")
      .map(Number);
    // console.log(items);

    let operation = monkey[2].substring(monkey[2].indexOf("=") + 1);
    let testNum = +monkey[3].trim().split(" ")[3];
    let ifTrue = +monkey[4].trim().split(" ")[5];
    let ifFalse = +monkey[5].trim().split(" ")[5];
    // console.log(items, operation, testNum, ifTrue, ifFalse);

    monkeyList.push(
      new Monkey(
        monkey[0],
        items,
        testNum,
        ifTrue,
        ifFalse,
        (old) => +eval(operation),
      ),
    );
    
  });
  
  console.log(monkeyList);
  for (let i = 0; i < 1000; i++) {
    // console.log(i)
    round(monkeyList, false);
  }
  let sorted = monkeyList.map((m) => m.inspected).sort((a, b) => b - a);
  console.log(monkeyList.map(m=>m.items));
  
  console.log(sorted);
  
  return sorted[0] * sorted[1];
};

function round(monkeys: Monkey[], divide: boolean) {
  monkeys.forEach((m) => {
    // console.log("APA: "+m.name);

    for (let i = 0; i < m.items.length; i++) {
      let nextMonkey = m.nextMonkey(i, divide);
      let item = m.items[i];
      // console.log("flyttar " + item + " till " + nextMonkey);

      monkeys[nextMonkey].items.push(item);
    }
    m.items = [];
  });
}

class Monkey {
  public name: string;
  public items: number[];
  public testNum: number;
  public ifTrue: number;
  public ifFalse: number;
  public operation: Operation;
  public inspected = 0;

  constructor(
    name: string,
    items: number[],
    testNum: number,
    ifTrue: number,
    ifFalse: number,
    operation: Operation,
  ) {
    this.name = name;
    this.items = items;
    this.testNum = testNum;
    this.ifTrue = ifTrue;
    this.ifFalse = ifFalse;
    this.operation = operation;
  }

  public nextMonkey(i: number, divide: boolean) {
    // console.log(
    //   this.name + " inspects an item with a worry level of " + this.items[i],
    // );
    this.inspected++;
    if(divide){
      this.items[i] = Math.floor(this.operation(this.items[i]) / 3);
    } else {
      this.items[i] = this.operation(this.items[i]);
    }

    return this.items[i] % this.testNum == 0 ? this.ifTrue : this.ifFalse;
  }
}

run({
  part1: {
    tests: [
      {
        input: `Monkey 0:
  Starting items: 79, 98
  Operation: new = old * 19
  Test: divisible by 23
    If true: throw to monkey 2
    If false: throw to monkey 3

Monkey 1:
  Starting items: 54, 65, 75, 74
  Operation: new = old + 6
  Test: divisible by 19
    If true: throw to monkey 2
    If false: throw to monkey 0

Monkey 2:
  Starting items: 79, 60, 97
  Operation: new = old * old
  Test: divisible by 13
    If true: throw to monkey 1
    If false: throw to monkey 3

Monkey 3:
  Starting items: 74
  Operation: new = old + 3
  Test: divisible by 17
    If true: throw to monkey 0
    If false: throw to monkey 1`,
        expected: 10605,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `Monkey 0:
        Starting items: 79, 98
        Operation: new = old * 19
        Test: divisible by 23
          If true: throw to monkey 2
          If false: throw to monkey 3

      Monkey 1:
        Starting items: 54, 65, 75, 74
        Operation: new = old + 6
        Test: divisible by 19
          If true: throw to monkey 2
          If false: throw to monkey 0

      Monkey 2:
        Starting items: 79, 60, 97
        Operation: new = old * old
        Test: divisible by 13
          If true: throw to monkey 1
          If false: throw to monkey 3

      Monkey 3:
        Starting items: 74
        Operation: new = old + 3
        Test: divisible by 17
          If true: throw to monkey 0
          If false: throw to monkey 1`,
        expected: 2713310158,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: true,
});
