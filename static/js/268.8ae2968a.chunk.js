"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[268],{4268:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var r=n(2791),a=n(9434),i=n(3634),o="NOT_FOUND";var c=function(e,t){return e===t};function s(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?c:r,i=n.maxSize,s=void 0===i?1:i,l=n.resultEqualityCheck,u=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),h=1===s?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:o},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(u):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return o}return{get:r,put:function(t,a){r(t)===o&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(s,u);function d(){var t=h.get(arguments);if(t===o){if(t=e.apply(null,arguments),l){var n=h.getEntries(),r=n.find((function(e){return l(e.value,t)}));r&&(t=r.value)}h.put(arguments,t)}return t}return d.clearCache=function(){return h.clear()},d}function l(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function u(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var i,o=0,c={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(c=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var u=c,h=u.memoizeOptions,d=void 0===h?n:h,f=Array.isArray(d)?d:[d],m=l(r),p=e.apply(void 0,[function(){return o++,s.apply(null,arguments)}].concat(f)),v=e((function(){for(var e=[],t=m.length,n=0;n<t;n++)e.push(m[n].apply(null,arguments));return i=p.apply(null,e)}));return Object.assign(v,{resultFunc:s,memoizedResultFunc:p,dependencies:m,lastResult:function(){return i},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),v};return a}var h=u(s),d=function(e){return e.contacts.items},f=function(e){return e.contacts.total},m=function(e){return e.contacts.page},p=function(e){return e.filter},v=(h([d,p],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),"PhoneBook_form__snyuG"),_="PhoneBook_inputName__DY-8z",x="PhoneBook_inputNumber__nuSwo",j="PhoneBook_btn__GW+tf",g=n(7689),y=n(184),N=function(){var e=(0,a.I0)(),t=(0,a.v9)(d),n=(0,a.v9)(m);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(r.Suspense,{fallback:(0,y.jsx)("p",{children:"Loading"}),children:(0,y.jsx)(g.j3,{})}),(0,y.jsxs)("form",{onSubmit:function(r){r.preventDefault();var a=r.target.elements.name.value,o=r.target.elements.email.value,c=r.target.elements.phone.value,s={name:a,email:o,phone:c};t.some((function(e){return e.name===a}))?alert("".concat(a," is already is contacts")):t.some((function(e){return e.number===c}))?alert(" Number ".concat(c," is already is contacts")):(e((0,i.uK)(s)).then((function(){e((0,i.yF)({page:n}))})),r.target.reset())},className:v,children:[(0,y.jsx)("label",{htmlFor:"name",children:"Name"}),(0,y.jsx)("input",{className:_,type:"text",name:"name",placeholder:"Like Name Surname",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",autoComplete:"off",required:!0}),(0,y.jsx)("label",{htmlFor:"name",children:"Email"}),(0,y.jsx)("input",{className:_,type:"text",name:"email",placeholder:"Like example@ex.com",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",autoComplete:"off",required:!0}),(0,y.jsx)("label",{htmlFor:"number",children:"Number"}),(0,y.jsx)("input",{className:x,type:"tel",name:"phone",placeholder:"Like 111-11-11",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",autoComplete:"off",required:!0}),(0,y.jsx)("button",{type:"submit",className:j,children:"Add contact"})]})]})},w="Section_section__Z2PLw",b="Section_title__SLHvV",C="Section_mainCont__ddnQv",k="Section_titleWelcome__tiGF7",A="Section_text__eiTEQ",S="Section_textContainer__X5LAA",F="Section_iconContainer__YrAsY",M="Section_iconContainerSec__SZWro",L="Section_icon__6wRkh",E="Section_container__vEvWA",Z="Section_formContainer__J8Tjh",B="Section_div__kTOR9",H=function(e){var t=e.title,n=e.children;return(0,y.jsx)("section",{className:w,children:(0,y.jsx)("div",{className:E,children:(0,y.jsxs)("div",{className:C,children:[(0,y.jsxs)("div",{className:S,children:[(0,y.jsx)("h2",{className:k,children:"Welcome!"}),(0,y.jsx)("p",{className:A,children:"Here you can add, delete and filter your own contacts!"})]}),(0,y.jsxs)("div",{className:Z,children:[(0,y.jsxs)("div",{className:F,children:[(0,y.jsxs)("svg",{className:L,width:30,height:30,xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",children:[(0,y.jsx)("path",{d:"M23,11H21V9a1,1,0,0,0-2,0v2H17a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V13h2a1,1,0,0,0,0-2Z"}),(0,y.jsx)("path",{d:"M9,12A6,6,0,1,0,3,6,6.006,6.006,0,0,0,9,12ZM9,2A4,4,0,1,1,5,6,4,4,0,0,1,9,2Z"}),(0,y.jsx)("path",{d:"M9,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,9,14Z"})]}),(0,y.jsx)("h2",{className:b,children:t})]}),n]})]})})})},T=function(e){var t=e.title,n=e.children;return(0,y.jsx)("section",{className:w,children:(0,y.jsx)("div",{className:E,children:(0,y.jsxs)("div",{className:B,children:[(0,y.jsx)("h2",{children:t}),n,(0,y.jsx)("div",{className:M,children:(0,y.jsx)("a",{href:"https://github.com/dianaforost",target:"blank",children:(0,y.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:30,height:30,viewBox:"0 0 512 512",fill:"#fff",children:(0,y.jsx)("path",{d:"M256.004 6.321c-141.369 0-256.004 114.609-256.004 255.999 0 113.107 73.352 209.066 175.068 242.918 12.793 2.369 17.496-5.555 17.496-12.316 0-6.102-0.24-26.271-0.348-47.662-71.224 15.488-86.252-30.205-86.252-30.205-11.641-29.588-28.424-37.458-28.424-37.458-23.226-15.889 1.755-15.562 1.755-15.562 25.7 1.805 39.238 26.383 39.238 26.383 22.836 39.135 59.888 27.82 74.502 21.279 2.294-16.543 8.926-27.84 16.253-34.232-56.865-6.471-116.638-28.425-116.638-126.516 0-27.949 10.002-50.787 26.38-68.714-2.658-6.45-11.427-32.486 2.476-67.75 0 0 21.503-6.876 70.42 26.245 20.418-5.674 42.318-8.518 64.077-8.617 21.751 0.099 43.668 2.943 64.128 8.617 48.867-33.122 70.328-26.245 70.328-26.245 13.936 35.264 5.175 61.3 2.518 67.75 16.41 17.928 26.347 40.766 26.347 68.714 0 98.327-59.889 119.975-116.895 126.312 9.182 7.945 17.362 23.523 17.362 47.406 0 34.254-0.298 61.822-0.298 70.254 0 6.814 4.611 14.797 17.586 12.283 101.661-33.888 174.921-129.813 174.921-242.884 0-141.39-114.617-255.999-255.996-255.999z"})})})})]})})})},z=n(9439),O="Contacts_list__R3QeP",P="Contacts_item__WTDnh",V="Contacts_itemTitle__ePmVL",R="Contacts_value__w481G",q="Contacts_btn__rNftF",G="Contacts_icon__1Uzfe",W="Contacts_pagination__kYMrm",D="Contacts_pageButton__RXhUu",I="Contacts_errorText__neyLh",Q=function(){var e=(0,r.useState)(1),t=(0,z.Z)(e,2),n=t[0],o=t[1],c=(0,a.v9)(d),s=(0,a.v9)(f),l=(0,a.I0)();(0,r.useEffect)((function(){l((0,i.yF)({page:n}))}),[l,n]);var u=(0,a.v9)(p),h=function(){var e=u.filter.toLowerCase().trim();return c?c.filter((function(t){return t.name.toLowerCase().includes(e)})):null}()||c||[];return(0,y.jsxs)("div",{children:[void 0===c||0===c.length?(0,y.jsx)("p",{className:I,children:"There are no contacts here yet"}):(0,y.jsx)("ul",{className:O,children:0===h.length?null:(0,y.jsx)(y.Fragment,{children:h.map((function(e){return(0,y.jsxs)("li",{className:P,children:[(0,y.jsxs)("p",{className:V,children:[e.name,":"]}),(0,y.jsx)("span",{className:R,children:e.phone}),(0,y.jsx)("button",{className:q,type:"button",onClick:function(){return t=e._id,void l((0,i.GK)(t)).then((function(){l((0,i.yF)({page:n}))}));var t},children:(0,y.jsxs)("svg",{className:G,xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:24,height:24,children:[(0,y.jsx)("path",{d:"M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"}),(0,y.jsx)("path",{d:"M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"}),(0,y.jsx)("path",{d:"M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"})]})})]},e._id)}))})}),(0,y.jsx)("div",{className:W,children:Array.from({length:Math.ceil(s/5)}).map((function(e,t){return(0,y.jsx)("button",{className:D,onClick:function(){return function(e){o(e)}(t+1)},children:t+1},t)}))})]})},Y=n(1429),J="Filter_label__vEd1E",U="Filter_inputFilter__8QMOp",K="Filter_filterContainer__8G57N",X=function(){var e=(0,a.I0)(),t=(0,a.v9)(p);return(0,y.jsxs)("div",{className:K,children:[(0,y.jsx)("label",{className:J,children:"Find contacts by name"}),(0,y.jsx)("input",{className:U,type:"text",value:t.filter,onChange:function(t){return e((0,Y.T)(t.currentTarget.value))}})]})};function $(){return(0,y.jsxs)("div",{style:{height:"100vh",background:"-webkit-linear-gradient(left, #3931af, #00c6ff)"},children:[(0,y.jsx)(H,{title:"PhoneBook",children:(0,y.jsx)(N,{})}),(0,y.jsxs)(T,{title:"Contacts",children:[(0,y.jsx)(X,{}),(0,y.jsx)(Q,{})]})]})}}}]);
//# sourceMappingURL=268.8ae2968a.chunk.js.map