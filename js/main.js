'use strict';

let pages = {
    'Admins': '/admins.html',
    'Holy Scriptures': '/scripts.html',
    'FAQ': '/faq.html',
}

function generateTopLink(to) {
    //window.location.
}

function populateNavbar() {
    var navTag = document.getElementsByTagName('nav')[0];

    var homeTag = document.createElement('i');
    var homeContainer = document.createElement('a');
    homeContainer.href = '/index.html'
    homeTag.classList.add('fas', 'fa-calculator', 'home-button');
    homeContainer.appendChild(homeTag);
    navTag.appendChild(homeContainer);

    if (navTag) {
        for (var linkName in pages) {
            var location = pages[linkName];

            var linkChild = document.createElement('a');
            linkChild.innerText = linkName;
            linkChild.href = location;

            navTag.appendChild(linkChild);
        }
    } else {
        console.error('Please add nav tag to the page!');
    }
}

window.addEventListener('load', function () {
    populateNavbar();

    window.document.title = Object.keys(pages).find(key => pages[key] === window.location.pathname);

    /*var metaCharsetTag = document.createElement('meta');
    metaCharsetTag.setAttribute('charset', 'utf-8');
    document.head.appendChild(metaCharsetTag);*/
})