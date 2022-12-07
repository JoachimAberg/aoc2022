import run from "aocrunner";
import { Dir } from "fs";

const parseInput = (rawInput: string) => rawInput;
class Directory {
  directories: Directory[] = [];
  parentDir: Directory;
  files: File[] = [];
  name: string = "";
  size: number = 0;
  constructor(name: string, parentDir: Directory | null) {
    this.name = name;
    if (parentDir) {
      this.parentDir = parentDir;
    }
  }
}
class File {
  name: string;
  size: number;
  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }
}
let rootDir: Directory;
let currentDir: Directory;
let allDirs: Directory[];

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).split(/\r?\n/);
  rootDir = new Directory("root", null);
  currentDir = rootDir;
  allDirs = [];
  allDirs.push(rootDir);

  for (let index = 0; index < input.length; index++) {
    const rowSplit = input[index].split(" ");
    switch (rowSplit[0]) {
      case "$":
        switch (rowSplit[1]) {
          case "cd":
            currentDir = cd(rowSplit[2]);
            break;
        }
        break;
      case "dir":
        break;
      default:
        currentDir.size += +rowSplit[0];
        let file = currentDir.files.find((file) => file.name == rowSplit[1]);
        if (!file) {
          file = new File(rowSplit[1], +rowSplit[0]);
          currentDir.files.push(file);  
        }
    }
  }
  calculateIndirectSize(rootDir);
  let filtered = allDirs.filter((d) => d.size <= 100000);
  return filtered.map(d=>d.size).reduce((a,b)=>a+b, 0)
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput).split(/\r?\n/);
  rootDir = new Directory("root", null);
  currentDir = rootDir;
  allDirs = [];
  allDirs.push(rootDir);

  for (let index = 0; index < input.length; index++) {
    const rowSplit = input[index].split(" ");
    switch (rowSplit[0]) {
      case "$":
        switch (rowSplit[1]) {
          case "cd":
            currentDir = cd(rowSplit[2]);
            break;
        }
        break;
      case "dir":
        break;
      default:
        currentDir.size += +rowSplit[0];
        let file = currentDir.files.find((file) => file.name == rowSplit[1]);
        if (!file) {
          file = new File(rowSplit[1], +rowSplit[0]);
          currentDir.files.push(file);  
        }
    }
  }
  calculateIndirectSize(rootDir);
  let unusedSpace =  70000000 -rootDir.size
  let spaceNeeded = 30000000 -unusedSpace
  let filtered = allDirs.filter((d) => d.size >= spaceNeeded);
  return filtered.sort((a,b)=>a.size-b.size)[0].size
};

let cd = (arg: string): Directory => {
  switch (arg) {
    case "/":
      return rootDir;
    case "..":
      return currentDir.parentDir;
    default:
      let dir = currentDir.directories.find((dir) => dir.name == arg);
      if (!dir) {
        dir = new Directory(arg, currentDir);
        currentDir.directories.push(dir);
      }
      allDirs.push(dir)
      return dir;
  }
};

let calculateIndirectSize = (dir: Directory): number => {
  dir.size = dir.directories
    .map((d) => calculateIndirectSize(d))
    .reduce((a, b) => a + b, dir.size);
  return dir.size;
};

run({
  part1: {
    tests: [
      {
input: `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`,
        expected: 95437,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
input: `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`,
        expected: 24933642,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
