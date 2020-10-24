let IDs = ['intro', 'x1', 'x2','contact']
let urlID = document.location.hash.substring(document.location.hash.indexOf('#') + 1);

function mouseWheel(event) {
    urlID = document.location.hash.substring(document.location.hash.indexOf('#') + 1);
    let index = 0;
    if (IDs.indexOf(urlID) > -1) {
        index = IDs.indexOf(urlID);
    }
    if (index != IDs.length - 1 && event.deltaY > 0) {
        document.location.hash = IDs[index + 1];
    }
    else if (index != 0 && event.deltaY < 0) {
        document.location.hash = IDs[index - 1];
    }
}

function noJSCheck() {
    return true;
}