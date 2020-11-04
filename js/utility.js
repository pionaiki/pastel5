let IDs = ['intro', 'x1', 'x2', 'contact']
var rulesIndex;
var styleBySelector = {};

function urlID() {
    return document.location.hash.substring(document.location.hash.indexOf('#') + 1);
}

function JSCheck() {
    return true;
}

function startup() {
    rulesIndex = document.styleSheets[0].rules || document.styleSheets[0].cssRules;

    for (var i = 0; i < rulesIndex.length; i++) {
        styleBySelector[rulesIndex[i].selectorText] = rulesIndex[i].style;
    }
    //styleBySelector['canvas'].position = 'absolute';
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

    if (styleBySelector.canvas) {
        if (getScroll() + document.getElementById('body').clientHeight >= 3.2 * document.getElementById('body').clientHeight) {
            styleBySelector['canvas'].position = 'absolute';
            styleBySelector['canvas'].top = '220vh';
        }
        else {
            styleBySelector['canvas'].position = 'fixed';
            styleBySelector['canvas'].top = '0';
        }
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