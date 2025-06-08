import * as fs from "fs";
import { isError } from "../Error/Error";
import * as readline from "readline-sync";
import { TITLE } from "./TITLES";

function getData(data: string) {
  try {
    fs.writeFile("lofiLinks.io", data, (err) => {
      if (err) {
        throw new Error("Cannot run File");
      }
      return;
    });
  } catch (err) {
    isError(err);
  }
}

console.log(TITLE);
const link = readline.question("Enter Link from YouTube: ");

console.log(getData(link));
