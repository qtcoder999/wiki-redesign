// ==UserScript==
// @name         Wiki content remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
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
        "div[role=\"note\"]"
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
                 #left-navigation{
                           padding-left: 1.5em;
                 }
   `

        var styleSheet = document.createElement("style")
        styleSheet.type = "text/css"
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)
    };
    main();
})();
