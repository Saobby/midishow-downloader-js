// ==UserScript==
// @name         Midishow Downloader
// @name:zh-CN   Midishow 下载器
// @name:zh-TW   Midishow 下載器
// @namespace    https://github.com/Saobby/midishow-downloader-js
// @version      1.0.0
// @description  Download MIDI files from Midishow with one click
// @description:zh-CN  一键下载 Midishow 上的 MIDI 文件
// @description:zh-TW  一鍵下載 Midishow 上的 MIDI 檔案
// @author       Saobby
// @license      MIT
// @homepageURL  https://github.com/Saobby/midishow-downloader-js
// @supportURL   https://github.com/Saobby/midishow-downloader-js/issues
// @downloadURL  https://github.com/Saobby/midishow-downloader-js/raw/main/user.js
// @match        https://www.midishow.com/midi/*
// @match        https://www.midishow.com/zh-tw/midi/*
// @match        https://www.midishow.com/en/midi/*
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
