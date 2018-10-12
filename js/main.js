'use strict';

let pages = {
    'Admins': '/admins.html',
    'Holy Scriptures': '/scripts.html',
    'FAQ': '/faq.html'
}

function populateNavbar() {
    var navTag = document.getElementsByTagName('nav')[0];
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

    /*var metaCharsetTag = document.createElement('meta');
    metaCharsetTag.setAttribute('charset', 'utf-8');
    document.head.appendChild(metaCharsetTag);*/
})