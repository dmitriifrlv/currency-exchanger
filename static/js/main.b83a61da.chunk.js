(this["webpackJsonpcurrency-exchanger"]=this["webpackJsonpcurrency-exchanger"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c.n(r),s=c(6),u=c.n(s),o=c(7),i=c(2);c(13);function j(e){var t=e.currencies,c=e.selectedCurrency,r=e.onChangeCurrency,a=e.amount,s=e.onChangeAmount;return Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"number",value:a,onChange:s}),Object(n.jsx)("select",{value:c,onChange:r,children:t.map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))})]})}function l(e){return Object(n.jsx)("a",{href:"https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",children:"European Central Bank"})}var b=function(){var e,t,c=Object(r.useState)([]),a=Object(i.a)(c,2),s=a[0],u=a[1],b=Object(r.useState)(0),h=Object(i.a)(b,2),d=h[0],O=h[1],x=Object(r.useState)(0),m=Object(i.a)(x,2),p=m[0],v=m[1],C=Object(r.useState)(1),g=Object(i.a)(C,2),f=g[0],y=g[1],N=Object(r.useState)(!0),w=Object(i.a)(N,2),S=w[0],E=w[1],k=Object(r.useState)(),_=Object(i.a)(k,2),A=_[0],R=_[1],q=Object(r.useState)(""),B=Object(i.a)(q,2),F=B[0],J=B[1];function P(e){y(e.target.value),E(!0)}function T(e){y(e.target.value),E(!1)}Number.parseFloat({amount:f}).toPrecision(3),S?(t=f,e=f*A):(e=f,t=f/A),Object(r.useEffect)((function(){fetch("https://api.exchangeratesapi.io/latest").then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];console.log(e),u([e.base].concat(Object(o.a)(Object.keys(e.rates)))),O(e.base),v(t),R(e.rates[t])}))}),[]),Object(r.useEffect)((function(){d&&p&&fetch("https://api.exchangeratesapi.io/latest".concat("?base=",d,"&symbols=").concat(p)).then((function(e){return e.json()})).then((function(e){return R(Number.parseFloat(e.rates[p]).toPrecision(3))}))}),[d,p]);var D=document.querySelector("#text"),I=function(){D.style.display="block"};return Object(r.useEffect)((function(){J("".concat(t).concat(d," equals to ").concat(e).concat(p," as of ").concat(Date()," according to the rate published by the"))}),[t,e,d,p]),""===Object.values({text:F}).toString()?Object(n.jsxs)("div",{className:"Card",children:[Object(n.jsx)("h1",{children:"Currency Converter"}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("p",{className:"label",children:"Convert"}),Object(n.jsx)(j,{currencies:s,selectedCurrency:d,onChangeCurrency:function(e){return O(e.target.value)},amount:t,onChangeAmount:P,className:"CurrencyRow"})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("p",{children:"To"}),Object(n.jsx)(j,{currencies:s,selectedCurrency:p,onChangeCurrency:function(e){return v(e.target.value)},amount:e,onChangeAmount:T})]}),Object(n.jsx)("div",{className:"sec-row"}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("p",{id:"exch",children:"Exchange Rate:"}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"number",id:"exchange-rate",value:A})})]}),Object(n.jsx)("button",{type:"submit",onClick:I,children:"Exchange"}),Object(n.jsx)("p",{id:"text",children:F})]}):Object(n.jsxs)("div",{className:"Card",children:[Object(n.jsx)("h1",{children:"Currency Converter"}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("p",{className:"label",children:"Convert"}),Object(n.jsx)(j,{currencies:s,selectedCurrency:d,onChangeCurrency:function(e){return O(e.target.value)},amount:t,onChangeAmount:P,className:"CurrencyRow"})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("p",{children:"To"}),Object(n.jsx)(j,{currencies:s,selectedCurrency:p,onChangeCurrency:function(e){return v(e.target.value)},amount:e,onChangeAmount:T})]}),Object(n.jsx)("div",{className:"sec-row"}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("p",{id:"exch",children:"Exchange Rate:"}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"number",id:"exchange-rate",value:A})})]}),Object(n.jsx)("button",{type:"submit",onClick:I,children:"Exchange"}),Object(n.jsxs)("p",{id:"text",children:[F," ",Object(n.jsx)(l,{}),"."]})]})};u.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b83a61da.chunk.js.map