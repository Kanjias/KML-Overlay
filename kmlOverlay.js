// ==UserScript==
// @name         KML Overlay
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.flightradar24.com/*
// @icon         https://www.google.com/s2/favicons?domain=flightradar24.com
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function displayKml(){
        if (!window.google || !window.map || !window.map.__gm) return window.setTimeout(displayKml, 1000);
        var src = 'https://example.com/example.kml';

        var ctaLayer = new google.maps.KmlLayer({
            url: src,
            map: window.map
        });
    }

    function init() {
        const e = document.getElementById("map_canvas");
        if (!e) return window.setTimeout(init, 1000);
        e.onload = displayKml();
    }

    init();
})();
