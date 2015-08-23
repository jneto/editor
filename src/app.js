"use strict";

var key = {};
var addToMap = function(event) {
    key[event.keyCode] = true;

    if (key[17] && key[66]) {
        document.execCommand('bold');
        event.preventDefault();
    } else if (key[17] && key[73]) {
        document.execCommand('italic');
        event.preventDefault();
    } else if (key[17] && key[85]) {
        document.execCommand('underline');
        event.preventDefault();
    }
};
var removeFromMap = function(event) {
    key[event.keyCode] = false;
};

document.getElementById('editor').addEventListener('keydown', addToMap);
document.getElementById('editor').addEventListener('keyup', removeFromMap);
