"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Error_1 = require("../Error/Error");
var readline = require("readline-sync");
var TITLES_1 = require("./TITLES");
function getData(data) {
    try {
        fs.writeFile("lofiLinks.io", data, function (err) {
            if (err) {
                throw new Error("Cannot run File");
            }
            return;
        });
    }
    catch (err) {
        (0, Error_1.isError)(err);
    }
}
console.log(TITLES_1.TITLE);
var link = readline.question("Enter Link from YouTube: ");
console.log(getData(link));
