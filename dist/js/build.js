!function(t){var e={};function n(l){if(e[l])return e[l].exports;var o=e[l]={i:l,l:!1,exports:{}};return t[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,l){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(l,o,function(e){return t[e]}.bind(null,o));return l},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){document.addEventListener("DOMContentLoaded",()=>{if(localStorage.getItem("todoList")){const t=document.querySelector(".list"),e=localStorage.getItem("todoList");t.innerHTML=e}});const n=()=>{const t=document.querySelector(".list");localStorage.setItem("todoList",t.innerHTML)},l=()=>{const t=document.querySelector(".modal"),e=document.forms.modal;t.className="modal modal-opened",e.title.focus()};window.closeModal=()=>{const t=document.querySelector(".modal"),e=document.forms.modal;t.className="modal",o(e.title,e.description)},window.createCard=()=>{const t=document.forms.modal;l(),t.save.onclick=()=>{if(c(t.title)){let e=document.querySelector(".list");const l=i(t.title,t.description,t.priority);e.innerHTML=l+e.innerHTML,n(),window.closeModal()}}};const o=(t,e)=>{const n=document.forms.modal;t.value="",e.value="",n.title.style.border="2px solid #dde0e3"};window.cardFilter=()=>{const t=document.forms.filter.search.value,e=document.forms.filter.status.value,n=document.forms.filter.priority.value,l=new RegExp(t,"i");document.querySelectorAll(".card").forEach(t=>{const o=t.querySelector(".card-title").textContent,c=t.className.slice(5),i=t.querySelector(".state-priority").textContent;t.style.display="none",r(o,l)&&a(c,e)&&s(i,n)&&(t.style.display="flex")})};const r=(t,e)=>-1!==t.search(e),a=(t,e)=>t===e||"All"==e,s=(t,e)=>t===e||"All"===e,c=t=>{if(t.value)return t.style.border="2px solid #dde0e3",!0;t.style.border="2px solid #ea2929"},i=(t,e,n)=>`\n\t<div class="card Open" onclick="cardSetting(event)">\n\t\t<input type="checkbox" class="card-checkbox" checked>\n\t\t<strong class="card-title">${t.value}</strong>\n\t\t<span class="card-text">${e.value}</span>\n\t\t<div class="state">\n\t\t\t<span class="state-priority ${n.value}">${n.value}</span>\n\t\t\t<nav>\n\t\t\t\t<ul class="setting">\n\t\t\t\t\t<li class="setting-list">\n\t\t\t\t\t\t<a href="#" class="setting-btn">...</a>\n\t\t\t\t\t\t<ul class="setting-drop">\n\t\t\t\t\t\t\t<li><a href="#" class="done">Done</a></li>\n\t\t\t\t\t\t\t<li><a href="#" class="edit">Edit</a></li>\n\t\t\t\t\t\t\t<li><a href="#" class="delete">Delete</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n\t`,d=(t,e,n)=>`\n\t<input type="checkbox" class="card-checkbox" checked>\n\t<strong class="card-title">${t.value}</strong>\n\t<span class="card-text">${e.value}</span>\n\t<div class="state">\n\t\t<span class="state-priority ${n.value}">${n.value}</span>\n\t\t<nav>\n\t\t\t<ul class="setting">\n\t\t\t\t<li class="setting-list">\n\t\t\t\t\t<a href="#" class="setting-btn">...</a>\n\t\t\t\t\t<ul class="setting-drop">\n\t\t\t\t\t\t<li><a href="#" class="done">Done</a></li>\n\t\t\t\t\t\t<li><a href="#" class="edit">Edit</a></li>\n\t\t\t\t\t\t<li><a href="#" class="delete">Delete</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</nav>\n\t</div>\n\t`;window.cardSetting=t=>{t.preventDefault();const e=t.target.className,o=t.currentTarget;"done"===e&&(t=>{t.className="card Done",n()})(o),"edit"===e&&(t=>{const e=t.querySelector(".card-title").textContent,o=t.querySelector(".card-text").textContent,r=t.querySelector(".state-priority").textContent,a=document.forms.modal;a.title.value=e,a.description.value=o,a.priority.value=r,l(),a.save.onclick=()=>{c(a.title)&&(t.innerHTML=d(a.title,a.description,a.priority),t.className="card Open",n(),window.closeModal())}})(o),"delete"===e&&(t=>{t.remove(),n()})(o)}}]);