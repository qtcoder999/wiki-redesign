// ==UserScript==
// @name         Wiki content remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Paras Anand
// @match        https://en.wikipedia.org/*
// @grant        none
// ==/UserScript==

(function() {
    "use strict";

    const advertisementSelectors = [
        "#siteSub",
        "table[role=\"presentation\"]",
        "#mw-panel",
        ".mw-indicators.mw-body-content",
        "#centralNotice",
        "#siteNotice",
        "#mw-navigation",
        "#mw-page-base",
        "#mw-head-base",
        "#coordinates"
    ];

    const remove = selector => {
        selector &&
            selector.map(singleSelection => {
            const selection = document.querySelector(singleSelection);
            if (selection) {
                document.querySelector(singleSelection).remove();
                console.log("Ads removed");
            }
        });
    };

    const main = () => {
        window.addEventListener('load', function () {
            remove(advertisementSelectors);
        })

        var styles = `

                .mw-body, #mw-head-base, #left-navigation, #mw-data-after-content, .mw-footer {
                           margin-left: 0!important;
                 }
                 .mw-body {
                           padding: 1em 1.5em 1em 1.5em;
                 }
                 #left-navigation{
                           padding-left: 1.5em;
                 }
                 div[role="note"]{
                           display: none;
                 }
                 #contentSub, #contentSub2 {
                           margin: 0 0 1em 1em;
                 }
   `

        var styleSheet = document.createElement("style")
        styleSheet.type = "text/css"
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)
    };
    main();
})();
