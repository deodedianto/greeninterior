/*!
 * @preserve
 * jquery.scrolldepth.js | v1.2.0
 * Copyright (c) 2020 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(f){"use strict";var i,a,c,p,g,e={minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0,nonInteraction:!0,gaGlobal:!1,gtmOverride:!1,trackerName:!1,dataLayer:"dataLayer"},m=f(window),d=[],D=!1,h=0;return f.scrollDepth=function(u){var s=+new Date;function v(e,n,t,o){var r=u.trackerName?u.trackerName+".send":"send";g?(g({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:e,eventLabel:n,eventValue:1,eventNonInteraction:u.nonInteraction}),u.pixelDepth&&2<arguments.length&&h<t&&g({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:"Pixel Depth",eventLabel:l(h=t),eventValue:1,eventNonInteraction:u.nonInteraction}),u.userTiming&&3<arguments.length&&g({event:"ScrollTiming",eventCategory:"Scroll Depth",eventAction:e,eventLabel:n,eventTiming:o})):p?(gtag("event",e,{event_category:"Scroll Depth",event_label:n,value:1,non_interaction:u.nonInteraction}),u.pixelDepth&&2<arguments.length&&h<t&&(h=t,gtag("event","Pixel Depth",{event_category:"Scroll Depth",event_label:l(t),value:1,non_interaction:u.nonInteraction})),u.userTiming&&3<arguments.length&&gtag("event","timing_complete",{event_category:"Scroll Depth",name:e,event_label:n,value:o})):(i&&(window[c](r,"event","Scroll Depth",e,n,1,{nonInteraction:u.nonInteraction}),u.pixelDepth&&2<arguments.length&&h<t&&(h=t,window[c](r,"event","Scroll Depth","Pixel Depth",l(t),1,{nonInteraction:u.nonInteraction})),u.userTiming&&3<arguments.length&&window[c](r,"timing","Scroll Depth",e,o,n)),a&&(_gaq.push(["_trackEvent","Scroll Depth",e,n,1,u.nonInteraction]),u.pixelDepth&&2<arguments.length&&h<t&&(h=t,_gaq.push(["_trackEvent","Scroll Depth","Pixel Depth",l(t),1,u.nonInteraction])),u.userTiming&&3<arguments.length&&_gaq.push(["_trackTiming","Scroll Depth",e,o,n,100])))}function l(e){return(250*Math.floor(e/250)).toString()}function n(){function t(){p=new Date,c=null,a=o.apply(l,i)}var o,r,l,i,a,c,p;D=!0,m.on("scroll.scrollDepth",(o=function(){var e,n,t,o,r,l,i,a=f(document).height(),c=window.innerHeight?window.innerHeight:m.height(),p=m.scrollTop()+c,g=(e=a,{"25%":parseInt(.25*e,10),"50%":parseInt(.5*e,10),"75%":parseInt(.75*e,10),"100%":e-5}),h=new Date-s;if(d.length>=u.elements.length+(u.percentage?4:0))return m.off("scroll.scrollDepth"),void(D=!1);u.elements&&(n=u.elements,t=p,o=h,f.each(n,function(e,n){-1===f.inArray(n,d)&&f(n).length&&t>=f(n).offset().top&&(v("Elements",n,t,o),d.push(n))})),u.percentage&&(r=g,l=p,i=h,f.each(r,function(e,n){-1===f.inArray(e,d)&&n<=l&&(v("Percentage",e,l,i),d.push(e))}))},r=500,c=null,p=0,function(){var e=new Date,n=r-(e-(p=p||e));return l=this,i=arguments,n<=0?(clearTimeout(c),c=null,p=e,a=o.apply(l,i)):c=c||setTimeout(t,n),a}))}u=f.extend({},e,u),f(document).height()<u.minHeight||(u.gaGlobal?(i=!0,c=u.gaGlobal):"function"==typeof gtag?(p=!0,c="gtag"):"function"==typeof ga?(i=!0,c="ga"):"function"==typeof __gaTracker&&(i=!0,c="__gaTracker"),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(a=!0),"function"==typeof u.eventHandler?g=u.eventHandler:void 0===window[u.dataLayer]||"function"!=typeof window[u.dataLayer].push||u.gtmOverride||(g=function(e){window[u.dataLayer].push(e)}),f.scrollDepth.reset=function(){d=[],h=0,m.off("scroll.scrollDepth"),n()},f.scrollDepth.addElements=function(e){void 0!==e&&f.isArray(e)&&(f.merge(u.elements,e),D||n())},f.scrollDepth.removeElements=function(e){void 0!==e&&f.isArray(e)&&f.each(e,function(e,n){var t=f.inArray(n,u.elements),o=f.inArray(n,d);-1!=t&&u.elements.splice(t,1),-1!=o&&d.splice(o,1)})},n())},f.scrollDepth});