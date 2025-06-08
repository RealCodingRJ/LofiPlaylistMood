"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var fs = require("fs");
var Error_1 = require("../Error/Error");
var readline = require("readline-sync");
var TITLES_1 = require("./TITLES");
var DB_1 = require("../DB/DB");
var Command;
(function (Command) {
    Command[Command["Name"] = 0] = "Name";
})(Command || (exports.Command = Command = {}));
function getData(data) {
    try {
        fs.appendFile("lofiLinks.io", data.toString(), function (err) {
            if (data === Command.Name) {
                if (err) {
                    throw new Error("Cannot run File");
                }
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
function indexArrayLink(url, index) {
    for (var i = 0; i < 5; i++) {
        getData(url[i]);
    }
}
console.log(require("./Message.mjs").Name);
console.log(TITLES_1.TITLE);
var link = readline.question("Enter Link from YouTube: ");
(0, DB_1.GetDB)(link);
for (var i = 0; i < 1; i++) {
    indexArrayLink(link, i);
}
