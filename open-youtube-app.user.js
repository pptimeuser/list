// ==UserScript==
// @name         Open YouTube
// @match        *://*.youtube.com/*
// @downloadURL  https://raw.githubusercontent.com/pptimeuser/list/main/open-youtube-app.user.js
// @updateURL    https://raw.githubusercontent.com/pptimeuser/list/main/open-youtube-app.user.js
// @homepage     https://raw.githubusercontent.com/pptimeuser/list/main/open-youtube-app.user.js
// ==/UserScript==
if (window.location.pathname === '/redirect') return;
window.location.href = `youtube://${window.location.pathname.slice(1)}${
	window.location.search
}${window.location.hash}`;
