# midishow-downloader-js

[English](README.md) | [中文](README_CN.md)

A Tampermonkey script to download MIDI files from Midishow.

Midishow recently implemented Cloudflare's JS challenge, requiring every user to complete a Cloudflare CAPTCHA before accessing the site. The [original downloader](https://github.com/Saobby/midishow-downloader-selfhost) can no longer bypass this, so a Tampermonkey version was created.

Import the repository's [user.js](https://github.com/Saobby/midishow-downloader-js/blob/main/user.js) into Tampermonkey to use it. Open the MIDI you want to download, then click the triangular play button (as shown in the image), and the browser will automatically download the MIDI.

<img width="1821" height="1082" alt="image" src="https://github.com/user-attachments/assets/d7a7651e-f1d7-4ebd-a966-75b26972d592" />

You need to log in with your own Midishow account.

# Disclaimer

This tool is for educational purposes only. It is intended to facilitate the download of MIDI files. Please respect intellectual property rights. **Do not redistribute the MIDI files you download to other websites without the author's permission. Do not sell the MIDI files you download to others.** The developers of this project assume no responsibility for any damages, losses, or legal issues arising from the use or misuse of this tool. This includes, but is not limited to, any direct, indirect, incidental, or consequential damages. **Users assume all risks associated with using this tool.** This disclaimer may be updated or modified at any time without prior notice. Users are encouraged to review it periodically to understand their responsibilities and obligations.