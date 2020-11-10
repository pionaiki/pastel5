let IDs = ['intro', 'me', 'projects', 'contact']
var rulesIndex;
var styleBySelector = {};

var myname = 'martha';
var surname = 'sokolska';
var atat = '@'
var mailserver = 'pionaiki.com'

function urlID() {
    return document.location.hash.substring(document.location.hash.indexOf('#') + 1);
}

function JSCheck() {
    return true;
}

function startup() {

}

function ending() {
    document.getElementById(IDs[1]).classList.add('right');
    document.getElementById(IDs[2]).classList.add('left');

    let myLoopInterval = setInterval('myLoop()', 20);
}

function myLoop() {
    animations();
}

function animations() {
    if (getScroll() >= document.getElementById('body').clientHeight / IDs.length) {
        document.getElementById(IDs[1]).style.cssText = 'transform: translate(-100vw, 0);';
    }
    else {
        document.getElementById(IDs[1]).style.cssText = '';
    }
    if (getScroll() >= document.getElementById('body').clientHeight + document.getElementById('body').clientHeight / IDs.length) {
        document.getElementById(IDs[2]).style.cssText = 'transform: translate(100vw, 0);';
    }
    else {
        document.getElementById(IDs[2]).style.cssText = '';
    }
    if (getScroll() + document.getElementById('body').clientHeight >= 3.1 * document.getElementById('body').clientHeight) {
        document.getElementById('scroll-map').style.cssText = 'position: absolute; top: 210vh;';
    }
    else {
        document.getElementById('scroll-map').style.cssText = '';
    }
}

function getScroll(type) {
    if (type == '%') {
        return (
            document.getElementById('body').scrollTop / (document.getElementById('body').scrollHeight - document.getElementById('body').clientHeight)
        )
    }
    else {
        return document.getElementById('body').scrollTop;
    }
}

function onscroll() {
    document.getElementById('rss').contentWindow.location.reload();
}