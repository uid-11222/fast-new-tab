'use strict'; /* global document, chrome */

/** 
 * @file This code need only for opening links with "chrome" protocol
 * on New Tab page.
 */

/**
 * Make onClicker callback, that opens new tab.
 * @param  {string=} href Link for new tab (default -- New Tab Page).
 * @param  {boolean=} closeOld If true, onClicker close current tab.
 * @return {function(event|tab)} onClicker
 */
function makeOnClicker(href, closeOld) {

  return function onClicker(event) {
    if (event.preventDefault ) event.preventDefault ();
    if (event.stopPropagation) event.stopPropagation();

    if (closeOld) chrome.tabs.getCurrent(function (tab) {

      if (tab) chrome.tabs.remove(tab.id);

    });

    chrome.tabs.create({ url: href });
    
  };
}

/**
 * If document.head.firstChild not null, then we on newtab page.
 * Else -- we on background event (browserAction.onClicked) page.
 */
if (document.head.firstChild) {
  (function () {

    var links = document.getElementsByTagName("A"),
        link;

    for (var i = 0; i < links.length; i++) {
      link = links[i];
      link.addEventListener("click", makeOnClicker(link.href, true));
    }

  })();
} else {
  /**
   * If url === undefined, chrome.tabs.create() open New Tab Page.
   */
  chrome.browserAction.onClicked.addListener(makeOnClicker());
}