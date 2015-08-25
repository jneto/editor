"use strict";

var formatText = function(event) {
    var ctrlPressed = false;
    if (navigator.appVersion.indexOf('Mac') !== -1) {
        ctrlPressed = event.metaKey;
    } else {
        ctrlPressed = event.ctrlKey;
    }

    if (ctrlPressed && event.keyCode === 66) { // (ctrl or cmd) + b
        document.execCommand('bold');
        event.preventDefault();
    } else if (ctrlPressed && event.keyCode === 73) { // (ctrl or cmd) + i
        document.execCommand('italic');
        event.preventDefault();
    } else if (ctrlPressed && event.keyCode === 85) { // (ctrl or cmd) + u
        document.execCommand('underline');
        event.preventDefault();
    }
};

document.getElementById('editor').addEventListener('keydown', formatText);
