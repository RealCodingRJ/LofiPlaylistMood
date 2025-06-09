"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Error_1 = require("../Error/Error");
var readline = require("readline-sync");
var DB_1 = require("../DB/DB");
function getData(data) {
    try {
        fs.appendFile("lofiLinks.io", data.toString(), function (err) {
            if (err) {
                throw new Error("Cannot run File");
            }
            else {
                console.log(data);
            }
        });
    }
    catch (err) {
        (0, Error_1.isError)(err);
    }
}
var link = readline.question("Enter Link from YouTube: ");
(0, DB_1.GetDB)(link, "LofiMood");
getData(link);
