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

function startup() {
    document.getElementById('body').style.overflow = 'hidden';

    //Repositioning:
    document.getElementById('intro').style.cssText = 'position: absolute; left: 0; top: 0';
    document.getElementById('x1').style.cssText = 'position: absolute; left: 50vw; top: 100vh';
    document.getElementById('x2').style.cssText = 'position: absolute; left: 0; top: 200vh';
    document.getElementById('contact').style.cssText = 'position: absolute; left: 50vw; top: 300vh';

    let originalID = urlID;
    document.getElementById('html').style.cssText = 'scroll-behavior: auto;';
    document.location.hash = 'intro';
    document.getElementById('html').style.cssText = '';
    if (IDs.indexOf(originalID) > 0) {
        document.location.hash = originalID;
    }
}