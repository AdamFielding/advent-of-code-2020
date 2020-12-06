import { readFileSync } from "fs";

const data = readFileSync(__dirname + "/data", { encoding: "utf-8" });

const records = data.split("\n").map((line) => line.split(":"));

const isPasswordValid = (
  password: string,
  char: string,
  min: number,
  max: number
): boolean => {
  const truncatedPw = [...password].filter((pwChar) => pwChar === char);
  const numberOfCharsInPw = truncatedPw.length;
  return numberOfCharsInPw >= min && numberOfCharsInPw <= max;
};

console.log(
  "part 1",
  records.reduce((total, [rule, pw]) => {
    const [min, _] = rule.split("-");
    const [max, char] = _.split(" ");

    return isPasswordValid(pw, char, Number(min), Number(max))
      ? total + 1
      : total;
  }, 0)
);

// 434
