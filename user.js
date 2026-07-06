// ==UserScript==
// @name         midishow下载器
// @namespace    http://tampermonkey.net/
// @version      2026-07-06
// @description  try to take over the world!
// @author       You
// @match        https://www.midishow.com/midi/*
// @match        https://www.midishow.com/zh-tw/midi/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=midishow.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const oldFunc = window.JZZ.MIDI.SMF;
    window.JZZ.MIDI.SMF = function(...args){
        const h1tag = document.querySelector("h1.font-size-2.mb-1.pl-md-player");
        downloadMidi(h1tag.textContent.trim()+".mid", args[0]);
        return oldFunc(...args);
    }

    function binaryStringToUint8Array(str) {
        const len = str.length;
        const bytes = new Uint8Array(len);

        for (let i = 0; i < len; i++) {
            bytes[i] = str.charCodeAt(i) & 0xff;
        }

        return bytes;
    }

    function downloadMidi(filename, text) {
        const blob = new Blob([binaryStringToUint8Array(text)], {type: "audio/midi"});
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = filename;

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
})();
