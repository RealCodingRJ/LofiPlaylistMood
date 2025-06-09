import * as fs from "fs";
import { isError } from "../Error/Error";
import * as readline from "readline-sync";
import { TITLE } from "./TITLES";
import { GetDB } from "../DB/DB";
import { getTime } from "./TimeStudy";

function getData(data: string) {
  try {
    fs.appendFile("lofiLinks.io", data.toString(), (err) => {
      if (err) {
        throw new Error("Cannot run File");
      } else {
        console.log(data);
      }
    });
  } catch (err) {
    isError(err);
  }
}

const link = readline.question("Enter Link from YouTube: ");
GetDB(link, "LofiMood");

const now = new Date().getDate();
const nextDay = new Date().getDate() + 1;
const a = now + " " + nextDay;

console.log(getTime(now, nextDay));
getData(link);
