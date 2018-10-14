'use strict';

let pages = {
    'Admins': '/admins.html',
    'Holy Scriptures': '/scripts.html',
    'FAQ': '/faq.html',
}

function addCSS(fileName, crossorigin, integrity) {
    var head = document.head;
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = generateTopLink(fileName);

    if (crossorigin) {
        link.crossorigin = crossorigin;
    }
    if (integrity) {
        //link.integrity = integrity;
    }

    head.appendChild(link);
}

function generateTopLink(to) {
    if (to.startsWith('http')) {
        return to;
    } else if (window.location.hostname === '') {
        var gitRepo = 'babakism.github.com'
        return window.location.pathname.substring(0, window.location.pathname.indexOf(gitRepo)) + gitRepo + to;
    } else {
        return to;
    }
}

function populateNavbar() {
    var navTag = document.getElementsByTagName('nav')[0];

    var homeTag = document.createElement('i');
    var homeContainer = document.createElement('a');
    homeContainer.href = generateTopLink('/index.html');
    homeTag.classList.add('fas', 'fa-calculator', 'home-button');
    homeContainer.appendChild(homeTag);
    navTag.appendChild(homeContainer);

    if (navTag) {
        for (var linkName in pages) {
            var location = pages[linkName];

            var linkChild = document.createElement('a');
            linkChild.innerText = linkName;
            linkChild.href = generateTopLink(location);

            navTag.appendChild(linkChild);
        }
    } else {
        console.error('Please add nav tag to the page!');
    }
}


window.addEventListener('load', function () {
    populateNavbar();

    window.document.title = Object.keys(pages).find(key => pages[key] === window.location.pathname);
});

(function installCSS() {
    addCSS('https://use.fontawesome.com/releases/v5.3.1/css/all.css', 'anonymous', 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU');
    addCSS('/css/main.css');
})();