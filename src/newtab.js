'use strict'; /* global document, chrome */

/** 
 * @file This code need only for opening links with "chrome" protocol
 * on New Tab page.
 */

(function () {

var links = document.getElementsByTagName("A");

for (var i = 0; i < links.length; i++) {
  (function () {

    var link = links[i],
        location = link.href;

    link.addEventListener("click", function (event) {

      event.preventDefault();
      event.stopPropagation();

      chrome.tabs.getCurrent(function (tab) {

        if (tab) chrome.tabs.remove(tab.id);

      });

      chrome.tabs.create( { url: location } );

    });

  })();
}

})();