webpackJsonp([20],{452:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return{open:function(){var e=t.data.showOnTargetPage,n=function(t,e){return t.filter(function(t){var e=t[1].liveStream;return null!==e}).reduce(function(t,n){var i=n[0],r=n[1].liveStream,o=r.streamId,s=r.title,a=r.image,l=r.updatedAt,h=r.theme,d=o&&c[o];return d&&u(d,e)&&t.push({region:i,streamId:o,title:s,image:a,updatedAt:l,url:d,theme:h}),t},[])}(t.data.breakingNews,e),i=function(t,e){return t.filter(function(t){var e=t[1].news;return null!==e}).reduce(function(t,n){var i=n[0],r=n[1].news,o=r.headline,s=r.url,a=r.title;return u(s,e)&&t.push({region:i,title:a,headline:o,url:s}),t},[])}(t.data.breakingNews,e);!function(t,e){t.length>0&&(h(t,e,!0),window.matchMedia(s.a["tablet-desktop"]).matches&&Object(o.a)())}(n,t),h(i,t),setTimeout(function(){var t=document.querySelectorAll(".navi-breaking-news__item");t.length?t.forEach(function(t){t.setAttribute("data-state","open"),t.querySelector(".navi-breaking-news__close").addEventListener("click",function(){t.setAttribute("data-state",""),a.a.setBreakingNewsState()})}):a.a.setBreakingNewsState()},25)}}};var i=n(453),r=n(454),o=n(455),s=n(98),a=n(92),c={US_LINEUP:"https://www.bloomberg.com/live",EU_LINEUP:"https://www.bloomberg.com/live/europe",ASIA_LINEUP:"https://www.bloomberg.com/live/asia",AUS_LINEUP:"https://www.bloomberg.com/live/australia",EVENT_LINEUP:"https://www.bloomberg.com/live/stream",EMEA_EVENT_LINEUP:"https://www.bloomberg.com/live/emea",ASIA_EVENT_LINEUP:"https://www.bloomberg.com/live/asia_stream",POLITICS_LINEUP:"https://www.bloomberg.com/live/politics",QT_MINI:"https://www.bloomberg.com/qt/live"};function l(t){var e=t.protocol,n=t.hostname,i=t.port,r=t.pathname,o=e||window.location.protocol,s=n||window.location.hostname,a=r||"/",c=i;return c||(n||(c=window.location.port),c=c||("https:"===o?"443":"80")),o+"//"+s+":"+c+a}function u(t,e){if(!t||e)return!0;var n=document.createElement("a");return n.href=t,l(n)!==l(window.location)}function h(t,e,n){void 0===n&&(n=!1);var o=n?r.a:i.a;t.forEach(function(t){e.container.insertAdjacentHTML("beforeend",o(t))})}},453:function(t,e,n){"use strict";e.a=function(t){var e=t.title,n=t.headline,i=t.url;if(i)return'\n            <div class="navi-breaking-news__item">\n                <div class="navi-breaking-news__table">\n                    <div class="navi-breaking-news__title">\n                        <a class="navi-breaking-news__link" href="'+i+'" tabindex="-1">'+e+'</a>\n                    </div>\n                    <div class="navi-breaking-news__content">\n                        <a class="navi-breaking-news__link" href="'+i+'">\n                            <span class="navi-breaking-news__headline">'+n+'</span>\n                            <span class="navi-breaking-news__cta">Read More</span>\n                        </a>\n                    </div>\n                    <button class="navi-breaking-news__close" title="Close" aria-label="Close"></button>\n                </div>\n            </div>\n        ';return'\n        <div class="navi-breaking-news__item">\n            <div class="navi-breaking-news__table">\n                <div class="navi-breaking-news__title">'+e+'</div>\n                <div class="navi-breaking-news__content">\n                    <span class="navi-breaking-news__headline">'+n+'</span>\n                </div>\n                <button class="navi-breaking-news__close" title="Close" aria-label="Close"></button>\n            </div>\n        </div>\n    '}},454:function(t,e,n){"use strict";e.a=function(t){var e=t.region,n=t.title,i=t.image,r=t.streamId,o=t.url,s=t.theme;return'\n        <div class="navi-breaking-news__item navi-breaking-news__live-stream" data-theme='+s+'>\n            <div class="navi-breaking-news__live-stream__table">\n                <div class="navi-breaking-news__live-stream__top-row">\n                    <div class="navi-breaking-news__live-stream__live-now">\n                        <a href="'+o+'" class="navi-breaking-news__live-stream__live-now-link" tabindex="-1">LIVE NOW</a>\n                    </div>\n                    '+(i?'\n                        <a href="'+o+'" class="navi-breaking-news__live-stream__logo-link" tabindex="-1">\n                            <img class="navi-breaking-news__live-stream__logo" src="'+i.url+'" alt="'+n+'" />\n                        </a>':"")+'\n                </div>\n                <div class="navi-breaking-news__live-stream__title">\n                    <a href="'+o+'" class="navi-breaking-news__live-stream__title-link">\n                        '+("QT"===s?'<span class="navi-breaking-news__live-stream__quicktake-prefix">Quicktake: </span>':"")+"\n                        "+n+' \n                        <span class="navi-breaking-news__live-stream__cta">Watch</span>\n                    </a>\n                </div>\n                <a href="'+o+'" class="navi-breaking-news__live-stream__player-link" tabindex="-1">\n                    <div class="navi-breaking-news__live-stream__player" data-stream-id="'+r+'" data-region="'+e+'"></div>\n                </a>\n                <button class="navi-breaking-news__close navi-breaking-news__live-stream__close" title="Close" aria-label="Close"></button>\n            </div>\n        </div>\n    '}},455:function(t,e,n){"use strict";var i=n(456),r=n.n(i),o=n(457),s={rootMargin:"0px 0px 100px 0px",threshold:[.25,.75]};e.a=function(){var t=document.querySelectorAll(".navi-breaking-news__live-stream"),e=document.querySelectorAll(".navi-breaking-news__live-stream__player");t.length&&e.length&&t.forEach(function(t){var e=t.querySelector(".navi-breaking-news__live-stream__player"),n=t.querySelector(".navi-breaking-news__close"),i=e.dataset.streamId,a=e.dataset.region,c=Object(o.a)(function(t){var n=t[0].intersectionRatio;e.dispatchEvent(new CustomEvent("intersect",{detail:{intersectionRatio:n}}))},s),l={id:i,live:!0,controls:!1,autoplay:!1,video_autoplay_on_page:!0,use_google_tag_manager:!0,start_muted:!0,useCustomBufferingAnimation:"QT_MINI"===i};r.a.run(function(){var t=a+"PlayerCreated";if(!window.__bloomberg__[t]){window.__bloomberg__[t]=!0;var i=window.BPlayer.create(e,l),r=0,o=!1;i.on("videoWatchedTimeUpdate",function(t){(r+=t.data.timeWatchedSinceLastUpdate)>=180&&(i.pause(),o=!0)}),n.addEventListener("click",function(){try{i.dispose()}catch(t){console.log("Could not dispose of BPlayer: ",t)}}),i.ready(function(){c?(c.observe(e),e.addEventListener("intersect",function(t){!o&&t.detail&&t.detail.intersectionRatio>.5?i.play():i.pause()})):i.pause()})}})})}},456:function(t,e){var n=((window.__bloomberg__||{}).environment||{}).videoPlayerUrl||"https://cdn.gotraffic.net/projector/latest/bplayer.js",i={callbacks:[],loading:null,loaded:!1,loadFailed:!1,loadBplayer:function(){if(!this.loading){var t=this,e=document.createElement("script");e.setAttribute("src",n),e.setAttribute("type","text/javascript"),e.setAttribute("data-exclude",!0),e.addEventListener("load",function n(){t.loaded=!0,t.callbacks.forEach(function(t){t()}),clearTimeout(t.loading),t.loading=null,e.removeEventListener("load",n,!1),e=null}),t.loading=setTimeout(function(){t.loadFailed=!0},7e3),setTimeout(function(){document.head.appendChild(e)})}},run:function(t){this.loadFailed||(this.loaded||window.BPlayer?t():(this.callbacks.push(t),this.loadBplayer()))}};t.exports=i},457:function(t,e,n){"use strict";e.a=function(t,e){e||(e={}),"undefined"==typeof IntersectionObserver&&n(458);return new IntersectionObserver(t,e)}},458:function(t,e){!function(t,e){"use strict";if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var n=[];r.prototype.THROTTLE_TIMEOUT=100,r.prototype.POLL_INTERVAL=null,r.prototype.USE_MUTATION_OBSERVER=!0,r.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},r.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},r.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},r.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},r.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},r.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},r.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(o(t,"resize",this._checkForIntersections,!0),o(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},r.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},r.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),n=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(r){var o=r.element,s=c(o),a=this._rootContainsTarget(o),l=r.entry,u=e&&a&&this._computeTargetAndRootIntersection(o,n),h=r.entry=new i({time:t.performance&&performance.now&&performance.now(),target:o,boundingClientRect:s,rootBounds:n,intersectionRect:u});l?e&&a?this._hasCrossedThreshold(l,h)&&this._queuedEntries.push(h):l&&l.isIntersecting&&this._queuedEntries.push(h):this._queuedEntries.push(h)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},r.prototype._computeTargetAndRootIntersection=function(n,i){if("none"!=t.getComputedStyle(n).display){for(var r=c(n),o=u(n),s=!1;!s;){var l=null,h=1==o.nodeType?t.getComputedStyle(o):{};if("none"==h.display)return;if(o==this.root||o==e?(s=!0,l=i):o!=e.body&&o!=e.documentElement&&"visible"!=h.overflow&&(l=c(o)),l&&!(r=a(l,r)))break;o=u(o)}return r}},r.prototype._getRootRect=function(){var t;if(this.root)t=c(this.root);else{var n=e.documentElement,i=e.body;t={top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bottom:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(t)},r.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},r.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,i=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==i)for(var r=0;r<this.thresholds.length;r++){var o=this.thresholds[r];if(o==n||o==i||o<n!=o<i)return!0}},r.prototype._rootIsInDom=function(){return!this.root||l(e,this.root)},r.prototype._rootContainsTarget=function(t){return l(this.root||e,t)},r.prototype._registerInstance=function(){n.indexOf(this)<0&&n.push(this)},r.prototype._unregisterInstance=function(){var t=n.indexOf(this);-1!=t&&n.splice(t,1)},t.IntersectionObserver=r,t.IntersectionObserverEntry=i}function i(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,i=this.intersectionRect,r=i.width*i.height;this.intersectionRatio=n?Number((r/n).toFixed(4)):this.isIntersecting?1:0}function r(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=function(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function o(t,e,n,i){"function"==typeof t.addEventListener?t.addEventListener(e,n,i||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function s(t,e,n,i){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,i||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function a(t,e){var n=Math.max(t.top,e.top),i=Math.min(t.bottom,e.bottom),r=Math.max(t.left,e.left),o=Math.min(t.right,e.right),s=o-r,a=i-n;return s>=0&&a>=0&&{top:n,bottom:i,left:r,right:o,width:s,height:a}}function c(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function l(t,e){for(var n=e;n;){if(n==t)return!0;n=u(n)}return!1}function u(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}}(window,document)}});