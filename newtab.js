'use strict'; /* global document, chrome */

(function () {

var links = document.getElementsByTagName("A");

for (var i = 0; i < links.length; i++) {
  (function () {

    var link = links[i],
        location = link.href;

    link.addEventListener("click", function (event) {

      event.preventDefault();
      event.stopPropagation();

      chrome.tabs.create( { active: true, url: location } );
    });

  })();
}

})();
