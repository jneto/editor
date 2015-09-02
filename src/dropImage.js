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

    // detects a file drop
    if (types.contains) {
        hasFiles = types.contains('Files');
    } else if (types.indexOf) {
        hasFiles = types.indexOf('Files') !== -1;
    }

    if (hasFiles) {
        var file = event.dataTransfer.files[0];
        var type = file.type;

        // detects a image file
        if (type.split('/')[0] === 'image') {

            // gets drop position
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
                offset = range.startOffset;
                node = range.startContainer;
            }

            var reader = new FileReader();
            reader.onloadend = function() {
                // creates img tag with file content
                var img = document.createElement('img');
                img.setAttribute('src', reader.result);

                // places img tag
                if (node && node.nodeType === 3) {
                    var replacementNode = node.splitText(offset);
                    node.parentNode.insertBefore(img, replacementNode);
                } else {
                    if (node.childNodes[offset]) {
                        node.insertBefore(img, node.childNodes[offset]);
                    } else {
                        node.insertBefore(img, null);
                    }
                }
            };

            reader.readAsDataURL(file);
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
