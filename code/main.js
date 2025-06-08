"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Error_1 = require("../Error/Error");
var readline = require("readline-sync");
var TITLES_1 = require("./TITLES");
var Message_mjs_1 = require("./Message.mjs");
function getData(data) {
    try {
        fs.appendFile("lofiLinks.io", data, function (err) {
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
function indexArrayLink(url, index) {
    for (var i = 0; i < 5; i++) {
        getData(url[i]);
    }
}
console.log(Message_mjs_1.Name);
console.log(TITLES_1.TITLE);
var link = readline.question("Enter Link from YouTube: ");
var savedLink = window.open(link);
console.log(getData(link));
console.log(savedLink);
for (var i = 0; i < 1; i++) {
    indexArrayLink(link, i);
}
