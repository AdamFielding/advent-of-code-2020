import { readFileSync } from "fs";

const data = readFileSync(__dirname + "/data", { encoding: "utf-8" });

const records = data.split("\n").map((line) => line.split(":"));

const isPasswordValid = (
  password: string,
  char: string,
  posOne: number,
  posTwo: number
): boolean => {
  const pw = [...password];
  const firstChar = pw[posOne - 1] === char;
  const secondChar = pw[posTwo - 1] === char;

  return (firstChar && !secondChar) || (!firstChar && secondChar);
};

console.log(
  "part 2",
  records.reduce((total, [rule, pw]) => {
    const [posOne, _] = rule.split("-");
    const [posTwo, char] = _.split(" ");

    return isPasswordValid(pw.trim(), char, Number(posOne), Number(posTwo))
      ? total + 1
      : total;
  }, 0)
);
