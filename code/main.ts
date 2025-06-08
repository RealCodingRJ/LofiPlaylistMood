import * as fs from "fs";
import { isError } from "../Error/Error";
import * as readline from "readline-sync";
import { TITLE } from "./TITLES";
import { Name } from "./Message.mjs";
import { GetDB } from "../DB/DB";

export enum Command {
  Name,
}

function getData(data: Command) {
  try {
    fs.appendFile("lofiLinks.io", data.toString(), (err) => {
      if (data === Command.Name) {
        if (err) {
          throw new Error("Cannot run File");
        }
      } else {
        console.log(data);
      }
    });
  } catch (err) {
    isError(err);
  }
}

function indexArrayLink(url: any, index: any) {
  for (let i = 0; i < 5; i++) {
    getData(url[i]);
  }
}
console.log(require("./Message.mjs").Name);

console.log(TITLE);
const link = readline.question("Enter Link from YouTube: ");
GetDB(link);

for (let i = 0; i < 1; i++) {
  indexArrayLink(link, i);
}
