(this.webpackJsonpimagefinder4=this.webpackJsonpimagefinder4||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(5),o=n.n(r),i=(n(14),n(8)),s=n(3),u=(n(15),n(9)),j=n.n(u),b=(n(36),n(0));function l(){return Object(b.jsx)(j.a,{className:"Skeleton",type:"Circles",color:"#006eff",height:40,width:40,timeout:3e3})}n(38);function f(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1];return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==r.trim()&&(t(r),o(""))},className:"SearchForm",children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{className:"SearchForm-input",type:"text",value:r,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.currentTarget.value)}})]})})}n(39),n(40);var m=document.getElementById("modal-root");function O(e){var t=e.onClose,n=e.bigImage;Object(c.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}));var a=function(e){"Escape"===e.code&&t()};return Object(r.createPortal)(Object(b.jsx)("div",{className:"Overlay",onClick:function(e){e.target===e.currentTarget&&t()},children:Object(b.jsx)("div",{className:"Modal",children:Object(b.jsx)("img",{src:n,alt:""})})}),m)}function h(e){var t=e.webformatURL,n=e.bigImage,a=Object(c.useState)(!1),r=Object(s.a)(a,2),o=r[0],i=r[1],u=function(){i((function(e){return!e}))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("li",{className:"ImageGalleryItem",onClick:u,children:Object(b.jsx)("img",{className:"ImageGalleryItem-image",src:t,alt:""})}),o&&Object(b.jsx)(O,{onClose:u,bigImage:n})]})}n(41);function d(e){var t=e.images;return Object(b.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(b.jsx)(h,{webformatURL:e.webformatURL,bigImage:e.largeImageURL},e.id)}))})}n(42);var g=function(e){var t=e.onClick;return Object(b.jsx)("button",{type:"button",onClick:t,className:"Button",children:"Load more"})};var p={fetchImage:function(e,t){var n="https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("24369535-8c0b0d7fa83b493b4b387e45e","&image_type=photo&orientation=horizontal&per_page=12");return fetch(n).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u0412\u044b\u0431\u0440\u0430\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0442\u0438\u043f \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439 ".concat(e)))}))}};function x(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),o=Object(s.a)(r,2),u=o[0],j=o[1],m=Object(c.useState)(""),O=Object(s.a)(m,2),h=O[0],x=O[1],v=Object(c.useState)(null),S=Object(s.a)(v,2),y=S[0],I=S[1],w=Object(c.useState)(1),N=Object(s.a)(w,2),k=N[0],C=N[1];Object(c.useEffect)((function(){h&&1===k&&(a([]),j(!0),setTimeout((function(){p.fetchImage(h,k).then((function(e){var t=e.hits;a(t)})).catch((function(e){return I(e)})).finally((function(){j(!1)}))}),1e3))}),[h,k]),Object(c.useEffect)((function(){1!==k&&(j(!0),setTimeout((function(){p.fetchImage(h,k).then((function(e){var t=e.hits;return a((function(e){return[].concat(Object(i.a)(e),Object(i.a)(t))}))})).finally((function(){j(!1)}))}),1500))}),[h,k]);return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(f,{onSubmit:function(e){x(e),C(1)}}),y&&Object(b.jsx)("div",{children:y.message}),u&&Object(b.jsx)(l,{}),Object(b.jsx)(d,{images:n}),0===n.length||u?0!==n.length&&u?Object(b.jsx)(l,{}):"":Object(b.jsx)(g,{onClick:function(){C((function(e){return e+1}))}})]})}o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.2d27b595.chunk.js.map