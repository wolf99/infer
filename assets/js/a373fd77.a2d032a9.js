(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{172:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),o=(r(0),r(254)),a={title:"Inefficient keySet Iterator",description:"Check for inefficient uses of iterators that iterate on keys then lookup their values, instead of iterating on key-value pairs directly."},c={unversionedId:"checker-inefficient-keyset-iterator",id:"checker-inefficient-keyset-iterator",isDocsHomePage:!1,title:"Inefficient keySet Iterator",description:"Check for inefficient uses of iterators that iterate on keys then lookup their values, instead of iterating on key-value pairs directly.",source:"@site/docs/checker-inefficient-keyset-iterator.md",slug:"/checker-inefficient-keyset-iterator",permalink:"/docs/next/checker-inefficient-keyset-iterator",version:"current",sidebar:"docs",previous:{title:"Impurity",permalink:"/docs/next/checker-impurity"},next:{title:"AST Language (AL)",permalink:"/docs/next/checker-linters"}},s=[{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Check for inefficient uses of iterators that iterate on keys then lookup their values, instead of iterating on key-value pairs directly."),Object(o.b)("p",null,"Activate with ",Object(o.b)("inlineCode",{parentName:"p"},"--inefficient-keyset-iterator"),"."),Object(o.b)("p",null,"Supported languages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"C/C++/ObjC: No"),Object(o.b)("li",{parentName:"ul"},"C#/.Net: Yes"),Object(o.b)("li",{parentName:"ul"},"Erlang: No"),Object(o.b)("li",{parentName:"ul"},"Java: Yes")),Object(o.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(o.b)("p",null,"The following issue types are reported by this checker:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#inefficient_keyset_iterator"},"INEFFICIENT_KEYSET_ITERATOR"))))}u.isMDXComponent=!0},254:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,y=p["".concat(a,".").concat(b)]||p[b]||f[b]||o;return r?i.a.createElement(y,c(c({ref:t},l),{},{components:r})):i.a.createElement(y,c({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);