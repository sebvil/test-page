function populatePre(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        this.responseText.split('\n').forEach(file => addText(file));
    };
    xhr.open('GET', url);
    xhr.send();
}

function addText(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var h = document.createElement('H2');
        h.appendChild(document.createTextNode(url))
        document.getElementById('contents').appendChild(h);
        document.getElementById('contents').appendChild(document.createTextNode(this.responseText));
    };
    xhr.open('GET', url);
    xhr.send();
}

populatePre('files');
