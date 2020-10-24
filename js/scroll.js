new p5();
let IDs = ['intro', 'contact']
let urlID = document.location.hash.substring(document.location.hash.indexOf('#') + 1);

function mouseWheel(event) {
    urlID = document.location.hash.substring(document.location.hash.indexOf('#') + 1);
    let index = 0;
    if (IDs.indexOf(urlID) > -1) {
        index = IDs.indexOf(urlID);
    }
    if (index != IDs.length - 1 && event.deltaY > 0) {
        document.getElementById(IDs[index + 1]).scrollIntoView();
        document.location.hash = IDs[index + 1];
    }
    else if (index != 0 && event.deltaY < 0) {
        document.getElementById(IDs[index - 1]).scrollIntoView();
        document.location.hash = IDs[index - 1];
    }
}
function isInArray(value, array) {
    return array.indexOf(value);
}