!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("preact/compat")):"function"==typeof define&&define.amd?define(["preact/compat"],t):"object"==typeof exports?exports["components/preact/LeftRail/LeftRail.entry.jsx"]=t(require("preact/compat")):e["components/preact/LeftRail/LeftRail.entry.jsx"]=t(e["preact/compat"])}(this,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=399)}({0:function(t,n){t.exports=e},1:function(e,t,n){e.exports=n(86)()},134:function(e,t){e.exports=function(e,t,n){var r=window.scrollY||window.pageYOffset,a=e-r,o=(new Date).getTime(),i=t||400,c=function(e,t,n,r){return e/2*(Math.pow(t,4)-r)+n},s=window.setInterval((function(){var e=(new Date).getTime()-o,t=function(e,t,n,r){var a=e/(r/2);return a<1?c(n,a,t,0):c(-n,a-=2,t,2)}(e,r,a,i);e>=i&&(window.clearInterval(s),"function"==typeof n&&n()),window.requestAnimationFrame((function(){return window.scrollTo(0,t)}))}),16.666666666666668)}},135:function(e,t){e.exports={TICKERS_BLOCKLIST:["USD:CUR"],EMBARGO_PAGE_BRANDS_BLOCKLIST:["cojp"],RSS_NUM_STORIES:20,RSS_DEFAULT_IMAGE_QUALITY:60,RSS_TOPICS_URLS:{business:"https://www.bloomberg.com/opinion-business","politics-policy":"https://www.bloomberg.com/opinion-politics-and-policy","technology-ideas":"https://www.bloomberg.com/opinion-technology-and-ideas",markets:"https://www.bloomberg.com/opinion-markets",finance:"https://www.bloomberg.com/opinion-finance",economics:"https://www.bloomberg.com/opinion-economics","money-stuff":"https://www.bloomberg.com/view/topics/money-stuff"},AD_CODES:{VIDEO:{AD_NETWORK_ID:"5262",AD_TAG_MIDROLL:"business/midroll/vod"}},TRANSPORT_STRATEGY:{BOOMERANG:"boomerang",RECOMMENDER:"recommender"},FORTRESS_STATES:{ADDITIVE:"additive",REDUCTIVE:"reductive"}}},138:function(e,t,n){var r=n(186),a={base:"all",mobile:"(max-width:759px)",mobileTablet:"(max-width:1019px)",tablet:"(min-width:760px) and (max-width:1019px)",tabletDesktop:"(min-width:760px)",smallDesktop:"(min-width:1020px) and (max-width:1279px)",largeDesktop:"(min-width:1280px)",desktop:"(min-width:1020px)",print:"print"},o=/\.([a-z_-]+)\.(css|js)$/;function i(e){var t=o.exec(e),n=t?t[1]:"",i=r(n);return Boolean(a[i])?i:"base"}e.exports={BREAKPOINTS:a,getBreakpointFromFile:i,getMatchMediaFromFile:function(e){return a[i(e)]}}},148:function(e,t){var n;"undefined"!=typeof window?(void 0===window.__bloomberg__.idCounter&&(window.__bloomberg__.idCounter=0),n=window.__bloomberg__):n={idCounter:0},e.exports=function(e){return e+n.idCounter++}},149:function(e,t){e.exports=function(e,t){for(var n=e.toString();n.length<t;)n="0".concat(n);return n}},150:function(e,t){e.exports={BRAND_TO_AUTHOR_MAP:{politics:"https://www.bloomberg.com/authors/",business:"https://www.bloomberg.com/authors/",view:"https://www.bloomberg.com/opinion/authors/",gadfly:"https://www.bloomberg.com/opinion/authors/",businessweek:"https://www.bloomberg.com/authors/"},AUTHOR_HEADSHOT_ALLOWLIST:["18705815","18840433","19757586","17322232","18943875","18866275","19352917","19866575","19625997","19939982"]}},173:function(e,t){var n=new Set(["view","gadfly","opinion"]),r="Bloomberg <span>Opinion</span>",a=new Set(["businessweek"]),o="favicon-blue.png",i={eyebrowData:{name:null,url:null,disableEyebrow:!1},structuredData:{name:null,url:null,type:"Thing"},ampEnabled:!0,newsletterBrand:"Bloomberg",favicon:"favicon-black.png"},c={business:{eyebrowData:{name:"Business",url:"/"},structuredData:{name:"Business news",url:"https://www.bloomberg.com/"}},markets:{eyebrowData:{name:"Markets",url:"/markets"},structuredData:{name:"Markets",url:"https://www.bloomberg.com/markets"}},technology:{eyebrowData:{name:"Technology",url:"/technology"},structuredData:{name:"Technology",url:"https://www.bloomberg.com/technology"},newsletterBrand:"Bloomberg Technology"},politics:{eyebrowData:{name:"Politics",url:"/politics"},structuredData:{name:"Politics",url:"https://www.bloomberg.com/politics"},newsletterBrand:"Bloomberg Politics"},pursuits:{eyebrowData:{name:"Pursuits",url:"/pursuits"},structuredData:{name:"Luxury",url:"https://www.bloomberg.com/pursuits"},newsletterBrand:"Bloomberg Pursuits"},opinion:{eyebrowData:{name:"Opinion",url:"/opinion"},structuredData:{name:"Opinion",url:"https://www.bloomberg.com/opinion"},newsletterBrand:r,favicon:o},businessweek:{eyebrowData:{name:"Businessweek",url:"/businessweek"},structuredData:{name:"Bloomberg Businessweek",url:"https://www.bloomberg.com/businessweek"},ampEnabled:!1,newsletterBrand:"Bloomberg Businessweek"},gadfly:{eyebrowData:{name:"Opinion",url:"/opinion"},structuredData:{name:"Opinion",url:"https://www.bloomberg.com/opinion"},newsletterBrand:r,favicon:o},view:{eyebrowData:{name:"Opinion",url:"/opinion"},structuredData:{name:"Opinion",url:"https://www.bloomberg.com/opinion"},newsletterBrand:r,favicon:o},cojp:{eyebrowData:{disableEyebrow:!0},ampEnabled:!1}};e.exports={isAmpEnabledBrand:function(e){var t=e.brand,n=c[void 0===t?null:t]||{};return"ampEnabled"in n?n.ampEnabled:i.ampEnabled},getBrandStructuredData:function(e){var t=e.brand,n=c[void 0===t?null:t]||{};return Object.assign({},i.structuredData,n.structuredData)},getBrandEyebrowData:function(e){var t=e.brand,n=c[void 0===t?null:t]||{};return Object.assign({},i.eyebrowData,n.eyebrowData)},getNewsletterBrand:function(e){var t=e.brand;return(c[void 0===t?null:t]||{}).newsletterBrand||i.newsletterBrand},getFaviconForBrand:function(e){var t=e.brand,n=c[void 0===t?null:t]||{};return"favicon"in n?n.favicon:i.favicon},BRAND_DEFAULTS:i,BRANDS_THAT_MAP_TO_OPINION:n,OPINION_BRAND_NEWSLETTER_STRING:r,BRANDS_THAT_RENDER_IN_V1_LAYOUT:a}},18:function(e,t){e.exports=function(e,t){try{return JSON.parse(e)}catch(e){return t}}},186:function(e,t,n){"use strict";function r(e){let t=!1,n=!1,r=!1;for(let a=0;a<e.length;a++){const o=e[a];t&&/[a-zA-Z]/.test(o)&&o.toUpperCase()===o?(e=e.substr(0,a)+"-"+e.substr(a),t=!1,r=n,n=!0,a++):n&&r&&/[a-zA-Z]/.test(o)&&o.toLowerCase()===o?(e=e.substr(0,a-1)+"-"+e.substr(a-1),r=n,n=!1,t=!0):(t=o.toLowerCase()===o,r=n,n=o.toUpperCase()===o)}return e}e.exports=function(e){if(0===(e=arguments.length>1?Array.from(arguments).map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";if(1===e.length)return e.toLowerCase();if(/^[a-z0-9]+$/.test(e))return e;const t=e!==e.toLowerCase();return t&&(e=r(e)),e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase()))}},29:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},399:function(e,t,n){e.exports=n(406)},406:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=n(29),s="broker-box-ad__bcaeb774",l=function(e){var t=e.id,n=e.urlPath,o=e.isMobile,i=e.containerId,c={contentId:t,position:"brokerboxarticle",dimensions:o?{mobile:[[120,60],[240,60]]}:{large_desktop:[[120,60]],small_desktop:[[120,60]],tablet:[[120,60]]},strategy:"viewable",positionIncrement:1,targeting:{position:"brokerboxarticle1",url:n},containerId:i};return Object(r.useEffect)((function(){window.__bloomberg__.ads.enqueue(i)}),[]),a.a.createElement("div",{id:i,className:s,"data-position":"brokerboxarticle"},a.a.createElement("script",{className:"params",type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(c)}}))};l.propTypes={id:i.a.string,urlPath:i.a.string,isMobile:i.a.bool,containerId:i.a.string};var u=l,d=n(149),p=n.n(d);function m(e){if(!e)return":00";var t=Math.round(e/1e3),n=Math.floor(t/60),r=t%60;return"".concat(n||"",":").concat(p()(r,2))}var f=n(148),b=n.n(f),h=n(46),w={"text-to-speech":"text-to-speech__8a3670cd",textToSpeech:"text-to-speech__8a3670cd","text-to-speech__label":"text-to-speech__label__8876e17d",textToSpeech__label:"text-to-speech__label__8876e17d","text-to-speech__controls":"text-to-speech__controls__14c1553b",textToSpeech__controls:"text-to-speech__controls__14c1553b","text-to-speech__input-button":"text-to-speech__input-button__eb4841b4",textToSpeech__inputButton:"text-to-speech__input-button__eb4841b4","text-to-speech__input-button--playing":"text-to-speech__input-button--playing__c05683a3",textToSpeech__inputButtonPlaying:"text-to-speech__input-button--playing__c05683a3","text-to-speech__runtime":"text-to-speech__runtime__f3f4901e",textToSpeech__runtime:"text-to-speech__runtime__f3f4901e"},_=function(e){var t=e.readings,n=e.currentTransporterItem,o=Object(r.useRef)(null),i=Object(r.useRef)(null),c=Object(r.useRef)(null);if(Object(r.useEffect)((function(){function e(){this.viewId=b()("text-to-speech-"),this.audioElement=o.current,this.inputButton=i.current,this.runTime=c.current,this.duration=parseInt(this.runTime.getAttribute("data-duration"),10),this.timeLeft=this.duration,this.playing=!1,this.initialize()}function r(e){window.dataLayer.push({event:"trackTextToSpeech",bvpEventCategory:"video",mediaType:"audio_text-to-speech",bvpEventAction:"play",bvpEventLabel:e})}var a;e.prototype.initialize=function(){var e=this;this.inputButton.addEventListener("click",(function(){e.playing?e.pause():e.play()})),this.audioElement.addEventListener("timeupdate",(function(t){e.timeLeft=e.duration-1e3*t.target.currentTime,e.updateTimeLeft()})),this.audioElement.addEventListener("ended",(function(){e.reset(),r("end")}))},e.prototype.play=function(){this.playing=!0,this.audioElement.play(),this.inputButton.classList.add(w["text-to-speech__input-button--playing"]),window.__bloomberg__.eventBus.publish("media-play",{viewId:this.viewId}),r("initial")},e.prototype.pause=function(){this.playing=!1,this.audioElement.pause(),this.inputButton.classList.remove(w["text-to-speech__input-button--playing"])},e.prototype.updateTimeLeft=function(){this.runTime.textContent=m(this.timeLeft)},e.prototype.reset=function(){this.playing=!1,this.audioElement.currentTime=0,this.inputButton.classList.remove(w["text-to-speech__input-button--playing"])},t&&(a=new e,n.addEventListener("jvln-transport-onblur",(function(){a.pause()})),window.__bloomberg__.eventBus.subscribe("media-play",(function(e){a.viewId!==e.viewId&&a.pause()}),{replay:!1}))}),[]),!t)return null;var s=t.durationMs;return a.a.createElement("div",{className:w["text-to-speech"]},a.a.createElement("h2",{className:w["text-to-speech__label"]},"LISTEN TO ARTICLE"),a.a.createElement("div",{className:w["text-to-speech__controls"]},a.a.createElement("button",{ref:i,className:w["text-to-speech__input-button"],"aria-label":"Listen to article"}),a.a.createElement("div",{ref:c,className:w["text-to-speech__runtime"],"data-duration":s},m(s))),a.a.createElement("audio",{ref:o,className:w["text-to-speech__audio-element"]},a.a.createElement("source",{src:t.url,type:"audio/mpeg"})))};_.propTypes={readings:i.a.object,currentTransporterItem:i.a.instanceOf(h.a)};var y=_,v=n(88),g=n.n(v),E=n(134),T=n.n(E),S=n(75),O=n.n(S),x="comment-count-v2__aa8cbfef",I="comment-count-v2__label__8342ed16",A="comment-count-v2__speech-bubble__5ecb22d1",j="comment-count-v2__number__daabc154",N="comment-count-v2__link__87fec6e2",R={view:"bloombergview"},k=function(e){var t=e.brand,n=e.id,o=e.currentTransporterItem,i=Object(r.useRef)(null);return Object(r.useEffect)((function(){function e(e,t,n){e.addEventListener("click",(function(){var e=t.querySelector("#article-comments-"+n);!function(e){if(e.classList.contains("open"))return;e.click()}(e);var r=function(e,t){var n=O()(e),r=e.scrollHeight,a=t.scrollHeight;return n+r-40-(40+a)}(t,e);T()(r,2e3)}))}!function(t){var n=i.current;if(n){var r=n.getAttribute("data-story-id"),a=n.getAttribute("data-forum"),o={url:"/javelin/api/comment-count/".concat(a,"/").concat(r),success:function(a,o){var i=o>=200&&o<300||304===o;if(i){var c=function(e){try{return JSON.parse(e).posts}catch(e){return console&&console.error("JSON.parse() failed for comment counts"),null}}(a);null!==c&&function(e,t){e.querySelectorAll("[data-disqus-count-v2]").forEach((function(e){e.textContent=t}))}(t,c),e(n,t,r)}else console&&console.error("Failed to fetch comment counts: "+o)},error:function(e){console.log("error",e)}};g()(o)}}(o)}),[]),a.a.createElement("div",{ref:i,className:x,"data-story-id":n,"data-forum":R[t]},a.a.createElement("h2",{className:I},"COMMENTS"),a.a.createElement("button",{className:N,"aria-label":"Go to comments"},a.a.createElement("div",{className:A}),a.a.createElement("div",{className:j,"data-disqus-count-v2":!0})))};k.propTypes={brand:i.a.string,id:i.a.string,currentTransporterItem:i.a.instanceOf(h.a)};var B=k,L=n(150),D=n(173),C="authors__8f8d7168",P="author-info__678318cd",H="headshot__e37d3440",U="summary__4352590a",M="bio__b4b11253",q="name__345e666a",F="twitter-link__2e5648a3",G="twitter-icon__13e63be2",K="read-more__18dc22ba",z=function(e){var t=e.name,n=e.disableHeadshots,r=e.headshot;return!n&&r&&r.baseUrl?a.a.createElement("div",{className:H,"data-testid":"headshot"},a.a.createElement("img",{src:r.baseUrl,alt:"headshot of ".concat(t)})):null},Q=function(e){var t=e.brand,n=e.slug;return a.a.createElement("a",{className:K,href:"".concat(L.BRAND_TO_AUTHOR_MAP[t]).concat(n)},"Read more opinion")},Y=function(e){var t=e.isOpinion,n=e.twitterHandle,r=e.twitterUrl;return n&&r?a.a.createElement("a",{className:F,"aria-label":"Navigate to twitter account",href:r,target:"_blank",rel:"noreferrer","data-testid":"twitter-info"},a.a.createElement("span",{className:G}),"".concat(t?"Follow @".concat(n," on Twitter"):"@".concat(n))):null},W=function(e){var t=e.brand,n=e.bio,r=e.disableHeadshots,o=e.headshot,i=e.name,c=e.slug,s=e.twitterHandle,l=e.twitterUrl,u=n.includes(i),d=u?n.slice(i.length):n,p=u?i:null,m=D.BRANDS_THAT_MAP_TO_OPINION.has(t);return a.a.createElement("div",{className:P},a.a.createElement(z,{name:i,disableHeadshots:r,headshot:o}),a.a.createElement("div",{className:U},a.a.createElement("div",{className:M},p&&a.a.createElement("span",{className:q,"data-testid":"display-name"},p),d),m?a.a.createElement(Q,{brand:t,slug:c}):null,a.a.createElement(Y,{isOpinion:m,twitterHandle:s,twitterUrl:l})))},$=function(e){var t=e.authors,n=e.brand,r=e.theme;if(!(t&&t.length&&t.some((function(e){return Boolean(e.bio)}))))return null;var o=D.BRANDS_THAT_MAP_TO_OPINION.has(n),i=o||t.filter((function(e){return e.bio})).length>1;return a.a.createElement("div",{className:C,"data-brand":o?"opinion":n,"data-theme":r},t.map((function(e){var t=e.name,r=e.bio,o=e.headshot,c=e.slug,s=e.twitterUrl,l=e.twitterHandle;return r?a.a.createElement(W,{bio:r,brand:n,disableHeadshots:i,headshot:o,name:t,slug:c,twitterUrl:s,twitterHandle:l}):null})))};z.propTypes={disableHeadshots:i.a.bool,headshot:i.a.object,name:i.a.string},Q.propTypes={brand:i.a.string,slug:i.a.string},Y.propTypes={isOpinion:i.a.bool,twitterHandle:i.a.string,twitterUrl:i.a.string},W.propTypes={brand:i.a.string,bio:i.a.string,disableHeadshots:i.a.bool,headshot:i.a.object,name:i.a.string,slug:i.a.string,twitterHandle:i.a.string,twitterUrl:i.a.string},$.propTypes={authors:i.a.array,brand:i.a.string,theme:i.a.string};var J=$,V="share-article-button__cef88d58",Z="label__df842ffa",X="option__f769e845",ee="link__93448599",te="icon__7109fee3",ne="facebook__c0d34fcf",re="twitter__e48f2370",ae="linkedin__9b80dbd9",oe="email__6566fe3e",ie=n(138),ce=function(e,t,n){return function(r){r.preventDefault(),window.dataLayer.push({event:"article_social_share",eventCategory:"social",eventAction:t,eventLabel:n});var a=window._regUserInfo,o=a&&a.user&&a.user.referralToken?"".concat(e).concat(encodeURIComponent("?sref=".concat(a.user.referralToken))):e;if(window.matchMedia(ie.BREAKPOINTS.mobile).matches)window.open(o,"_self");else{window.open(o,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=626,height=438")}}},se=function(e){var t=e.canonical,n="https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(t));return a.a.createElement("a",{href:n,className:ee,rel:"nofollow","data-new-window":!0,onClick:ce(n,"share","facebook"),"aria-label":"Share this article on Facebook (opens in a new window)"},a.a.createElement("div",{className:"".concat(te," ").concat(ne)}),"Share")},le=function(e){var t=e.canonical,n=e.twitterHandle,r=e.twitterText,o=encodeURIComponent(n&&r||""),i=encodeURIComponent(n),c=encodeURIComponent(t),s="https://twitter.com/share?text=".concat(o,"&via=").concat(i,"&url=").concat(c);return a.a.createElement("a",{href:s,className:ee,rel:"nofollow","data-new-window":!0,onClick:ce(s,"share","twitter"),"aria-label":"Share this article on Twitter (opens in a new window)"},a.a.createElement("div",{className:"".concat(te," ").concat(re)}),"Tweet")},ue=function(e){var t=e.canonical,n=e.headline,r=e.summary,o=encodeURIComponent(n),i=encodeURIComponent(r),c="https://www.linkedin.com/shareArticle?mini=true&title=".concat(o,"&summary=").concat(i,"&url=").concat(encodeURIComponent(t));return a.a.createElement("a",{href:c,className:ee,rel:"nofollow","data-new-window":!0,onClick:ce(c,"share","linkedin"),"aria-label":"Share this article on LinkedIn (opens in a new window)"},a.a.createElement("div",{className:"".concat(te," ").concat(ae)}),"Post")},de=function(e){var t=e.byline,n=e.canonical,r=e.headline,o=e.summary,i=encodeURIComponent("".concat(r," - Bloomberg")),c=encodeURIComponent("".concat(r,"\r\n\r\nby ").concat(t,"\r\n\r\n").concat(o,"\r\n\r\n").concat(n)),s="mailto:?subject=".concat(i,"&body=").concat(c);return a.a.createElement("a",{href:s,className:ee,rel:"nofollow",onClick:ce(s,"share","email"),"aria-label":"Share this article via email (opens native email client)"},a.a.createElement("div",{className:"".concat(te," ").concat(oe)}),"Email")},pe=function(e){var t=e.byline,n=e.canonical,r=e.headline,o=e.summary,i=e.theme,c=e.twitterHandle,s=e.twitterText;return a.a.createElement("div",{className:V,"data-theme":i},a.a.createElement("h2",{className:Z},"SHARE THIS ARTICLE"),a.a.createElement("div",{className:X},a.a.createElement(se,{canonical:n})),a.a.createElement("div",{className:X},a.a.createElement(le,{canonical:n,twitterHandle:c,twitterText:s})),a.a.createElement("div",{className:X},a.a.createElement(ue,{canonical:n,headline:r,summary:o})),a.a.createElement("div",{className:X},a.a.createElement(de,{byline:t,headline:r,summary:o,canonical:n})))};se.propTypes={canonical:i.a.string},le.propTypes={canonical:i.a.string,twitterHandle:i.a.string,twitterText:i.a.string},ue.propTypes={canonical:i.a.string,headline:i.a.string,summary:i.a.string},de.propTypes={byline:i.a.string,canonical:i.a.string,headline:i.a.string,summary:i.a.string},pe.propTypes={byline:i.a.string,canonical:i.a.string,headline:i.a.string,summary:i.a.string,twitterHandle:i.a.string,twitterText:i.a.string,theme:i.a.string};var me=pe,fe=n(74),be=n(83),he=n(18),we=n.n(he),_e=n(135);function ye(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ve(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ve(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ge=function(e){var t=ye(Object(r.useState)(null),2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var t,n=e.map((function(e){return e.id})).filter((function(e){return!_e.TICKERS_BLOCKLIST.includes(e)}));n.length&&(t=n,new Promise((function(e,n){var r="".concat(window.__bloomberg__.environment.blensSnippetUrl,"?theme=blens&tickers=");g()({url:[r,t].join(""),complete:function(t,r){r>=200&&r<300||304===r?e(t.response):n("Unable to connect to server.  Cannot retrieve related tickers.")}})}))).then((function(e){var t,n,r,o=we()(e).snippets;if(window["jvln-dependencies"])window["jvln-dependencies"].injectCSS((t=o.css,n=[],r=document.createElement("div"),r.innerHTML=t,r.querySelectorAll("link").forEach((function(e){n.push(e.href)})),n)).onLoad((function(){a(o.html)}));else{document.addEventListener("jvln-dependencies-available",(function e(){a(o.html),document.removeEventListener("jvln-dependencies-available",e)}))}})).catch((function(e){console.log(e)}))}),[]),{blensSnippet:n}},Ee={"left-rail":"left-rail__af2a150e",leftRail:"left-rail__af2a150e",dark:"dark__27f9b95c",article:"article__d1d311d8",bbgreen:"bbgreen__fafc8524",feature:"feature__bd15aed7","stacked-left-rail":"stacked-left-rail__8b1554c8",stackedLeftRail:"stacked-left-rail__8b1554c8",blens:"blens__5bf3a791","blens-header":"blens-header__c123dd9d",blensHeader:"blens-header__c123dd9d"};function Te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Se(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Se(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Se(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Oe=function(e){var t=e.id,n=e.urlPath,o=e.containerId,i=e.mobileContainerId,s=e.authors,l=e.brand,d=e.theme,p=e.contentType,m=void 0===p?"article":p,f=e.readings,b=e.byline,h=e.canonical,w=e.headline,_=e.summary,v=e.twitterHandle,g=e.twitterText,E=e.blensQuoteIds,T=void 0===E?[]:E,S=e.shouldShowAuthorBio,O=void 0===S||S,x=e.shouldShowCommentCount,I=void 0!==x&&x,A=e.shouldShowTextToSpeech,j=void 0!==A&&A,N=e.shouldShowShareArticle,R=void 0===N||N,k=e.shouldShowBrokerBoxAd,L=void 0!==k&&k,D=e.shouldShowBlens,C=void 0!==D&&D,P=e.currentTransporterItem,H=e.fortressEnabled,U=Te(Object(r.useState)(null),2),M=U[0],q=U[1];Object(r.useEffect)((function(){var e=P.querySelector(".stacked-left-rail-portal");q(e)}),[]);var F=Object(be.a)(t).isAllowed,G=!H||F;return a.a.createElement("aside",{className:Object(c.a)(Ee.leftRail,Ee[m],Ee[d])},O&&a.a.createElement(J,{authors:s,brand:l,theme:d}),G&&I&&a.a.createElement(B,{brand:l,id:t,currentTransporterItem:P}),j&&a.a.createElement(y,{readings:f,currentTransporterItem:P}),R&&a.a.createElement(me,{byline:b,canonical:h,headline:w,summary:_,theme:d,twitterHandle:v,twitterText:g}),G&&L&&a.a.createElement(u,{id:t,urlPath:n,containerId:o}),G&&C&&a.a.createElement(xe,{blensQuoteIds:T}),G&&M&&Object(r.createPortal)(a.a.createElement("aside",{className:Object(c.a)(Ee.stackedLeftRail,Ee[m],Ee[d])},O&&a.a.createElement(J,{authors:s,brand:l,theme:d}),R&&a.a.createElement(me,{byline:b,canonical:h,headline:w,summary:_,theme:d,twitterHandle:v,twitterText:g}),L&&a.a.createElement(u,{id:t,urlPath:n,containerId:i,isMobile:!0}),C&&a.a.createElement(xe,{blensQuoteIds:T})),M))},xe=function(e){var t=e.blensQuoteIds,n=ge(t).blensSnippet;return n?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:Ee.blens},a.a.createElement("h2",{className:Ee.blensHeader},"In this article"),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))):null};Oe.propTypes={id:i.a.string,urlPath:i.a.string,containerId:i.a.string,mobileContainerId:i.a.string,authors:i.a.array,brand:i.a.string,theme:i.a.string,contentType:i.a.oneOf(["article","feature"]),readings:i.a.object,byline:i.a.string,canonical:i.a.string,headline:i.a.string,summary:i.a.string,twitterHandle:i.a.string,twitterText:i.a.string,blensQuoteIds:i.a.array,shouldShowAuthorBio:i.a.bool,shouldShowCommentCount:i.a.bool,shouldShowTextToSpeech:i.a.bool,shouldShowShareArticle:i.a.bool,shouldShowBrokerBoxAd:i.a.bool,shouldShowBlens:i.a.bool,currentTransporterItem:i.a.instanceOf(h.a),fortressEnabled:i.a.bool.isRequired},xe.propTypes={blensQuoteIds:i.a.array};t.default=Object(fe.a)(Oe,"LeftRail")},45:function(e,t){e.exports=function(){return window.scrollY||document.documentElement.scrollTop}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="undefined"==typeof HTMLElement?function(){}:HTMLElement},74:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(18),i=n.n(o);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e,t){var n=function(n){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=n.querySelectorAll('[data-component-root="'.concat(t,'"]'));c.forEach((function(t){var c=s(s({},i()(t.nextSibling.textContent)),{},{currentTransporterItem:n,isTransporterLayout:o});Object(r.hydrate)(a.a.createElement(e,c),t)}))};if("undefined"!=typeof window&&"undefined"!=typeof document){window.__bloomberg__.eventBus.subscribe("jvln-transport",(function(e){n(e.transportElement,!0)}));var o=document.querySelector(".transporter-item");return o?n(o):console.warn("Unable to find transporter during component hydration"),null}return function(n){var r=JSON.stringify(n).replace(/\//g,"\\/");return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{"data-component-root":t},a.a.createElement(e,n)),a.a.createElement("script",{type:"application/json","data-component-props":t,dangerouslySetInnerHTML:{__html:r}}))}}},75:function(e,t,n){var r=n(45);e.exports=function(e){return e.getBoundingClientRect().top+r()}},83:function(e,t,n){"use strict";var r=n(0);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i="allow",c="block";t.a=function(e){var t=a(Object(r.useState)(null),2),n=t[0],o=t[1];return Object(r.useEffect)((function(){window.__bloomberg__.eventBus.subscribe("fortress-decision-".concat(e),(function(e){var t=e.result;o(t)}))}),[]),{isAllowed:n===i,isBlocked:n===c}}},86:function(e,t,n){"use strict";var r=n(87);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},87:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},88:function(e,t){e.exports=function(e){if(e||(e={}),!e.url)throw new Error("Invalid URL");var t=new XMLHttpRequest;t.open(e.method||"GET",e.url,!0),"POST"===e.method&&t.setRequestHeader("Content-Type","application/json"),e.success&&(t.onload=function(){e.success(t.response,t.status,t)}),e.error&&(t.onerror=function(){e.error(t,t.status)}),e.complete&&(t.onloadend=function(){e.complete(t,t.status)}),t.send(e.data)}}})}));