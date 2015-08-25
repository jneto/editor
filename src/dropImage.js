"use strict";

var cancel = function(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    return false;
};

var dropImage = function(event) {
    var types = event.dataTransfer.types;
    var hasFiles = false;

    if (types.contains) {
        hasFiles = types.contains('Files');
    } else if (types.indexOf) {
        hasFiles = types.indexOf('Files') !== -1;
    }

    if (hasFiles) {
        var file = event.dataTransfer.files[0];
        var type = file.type;
        if (type.split('/')[0] === 'image') {

            var clientX = event.clientX;
            var clientY = event.clientY;
            var offset;
            var node;
            if (document.caretPositionFromPoint) {
                var caretPosition = document.caretPositionFromPoint(clientX, clientY);
                offset = caretPosition.offset;
                node = caretPosition.offsetNode;
            } else if (document.caretRangeFromPoint) {
                var range = document.caretRangeFromPoint(clientX, clientY);
                console.log(range);
                offset = range.startOffset;
                node = range.startContainer;
            }

            var reader = new FileReader();
            reader.onload = function(readerEvent) {
                var binaryString = readerEvent.target.result;

                var img = document.createElement('img');
                img.setAttribute('src', 'data:;base64,' + btoa(binaryString));

                if (node && node.nodeType === 3) {
                    var replacementNode = node.splitText(offset);
                    node.parentNode.insertBefore(img, replacementNode);
                    console.log('text node');
                } else if (node) {
                    node.insertBefore(img, node.childNodes[offset]);
                    console.log('normal node');
                }
            };

            reader.readAsBinaryString(file);
        }
    }

    if (event.preventDefault) {
        event.preventDefault();
    }
    return false;
};

document.getElementById('editor').addEventListener('dragover', cancel);
document.getElementById('editor').addEventListener('drop', dropImage);
document.body.addEventListener('dragover', cancel);
document.body.addEventListener('drop', cancel);
