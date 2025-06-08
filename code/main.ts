import * as fs from "fs";
import { isError } from "../Error/Error";
import * as readline from "readline-sync";
import { TITLE } from "./TITLES";
import { Name } from "./Message.mjs";
import { GetDB } from "./DB";

function getData(data: string) {
  try {
    fs.appendFile("lofiLinks.io", data, (err) => {
      if (err) {
        throw new Error("Cannot run File");
      }
      return;
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
console.log(Name);

console.log(TITLE);
const link = readline.question("Enter Link from YouTube: ");
const savedLink = window.open(link);
GetDB(link);

console.log(getData(link));
console.log(savedLink);

for (let i = 0; i < 1; i++) {
  indexArrayLink(link, i);
}
