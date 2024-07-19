import{S as L,a as p,i as A}from"./assets/vendor-ee72e1a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEjSURBVHgBzVWBDYIwEDw3YAM7ghvICG6AG8gGuIFuwAjECRjBEXQD3eB9zCEf0lpASLzkE/iv99/eWYB/gogcNDIsASU+S4cT5oQSOhKXDTmfHeaCklUaNzZKNB4aNeaAEu05cWZyOXMpfgUnv3nyV9YSTIX++MhJt3zftztppmetwBRYYfm+My5Kmauoh8NY0DEft/QabM0Q4wU3ZIXJbfoNmC9GC+4T1hxZg7XJJxIwQog879vS1N7w5FvB8xi54zQlBu7M1GrqkXxrUFphAyQVwsM1OCGyYJqvERG83b588bSYP1qg7r+nxHPfBMhlxLqsTbghNhvagGvrj+DS3TcOEcSOyKzr7ik+lJgZdORjRUFSLIP7ikezxIf8qXHB0ngB0x4XMNg0o7IAAAAASUVORK5CYII=";function u(t){const s=document.querySelector(".photos-list"),r=t.map(({downloads:e,comments:o,views:c,likes:S,tags:b,webformatURL:C,largeImageURL:w})=>`
    <li class="gallery">
      <a class="gallery-link" href="${w}"><img src="${C}" alt="${b}" loading="lazy">
      <div class="gallery-wrap"><span class="span">Likes <span class="value">${S}</span></span>
      <span class="span">Views <span class="value">${c}</span></span>
      <span class="span">Comments <span class="value">${o}</span></span>
      <span class="span">Downloads <span class="value">${e}</span></span></div></a>
    </li>`).join("");s.insertAdjacentHTML("beforeend",r),new L(".gallery a").refresh()}function B(){const t=document.querySelector(".gallery");if(t){const{height:s}=console.log(t.getBoundingClientRect());window.scrollBy({top:s*2,behavior:"smooth"})}}function h(){const t=document.querySelector(".photos-list");return t.innerHTML=""}const v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBrZZhDoIwDIUL0fjXo3gUb7R5Er0BHsXD7A+bASlhYeC6V4WXGCHr3reNtkAkqG2D9T70mh/HSj4HybyqyPQ9PeuaXlRQ19GFY4c5dDodLSHNK3/fSam29Q+0k7/N1ZAt5hCyh7kIKZl77y/IMBezgEwXTW4ienBxcc65DCQ0PDYCQghGMDASJJpzTG4ue0KABEHmKeBAQEPx3LiIhmKy/M+aitDyGJoPAWsI32vNWTXpVQnXRal2kPQmO7pPx6XpPRCQmsdjSZ8JhIA0FbOllMKsRZqCQoMpXCy0GJRrFc7hVpGLSVqFWaxk52ZnVgPbIaL5HhBovgVSMv+qg7kt9JznZ+VL//pL+5hWFXei+mwRj+UDSHQ9vnHBEYAAAAAASUVORK5CYII=",x="44930216-c8fe7065044399c3ab26c911d",I="https://pixabay.com",M="api/";p.defaults.baseURL=I;async function d({q:t="",page:s=1,per_page:r=15}={}){try{const e=await(await p.get(M,{params:{key:x,q:t,page:s,per_page:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data;if(e.hits.length===0){h(),A.error({position:"topRight",title:"Sorry, there are no images matching",message:"your search query. Please try again!",titleColor:"white",titleSize:"16px",messageColor:"white",backgroundColor:"#ef4040",iconUrl:v,layout:2,progressBarColor:"#b51b1b",maxWidth:"432px"});return}return e}catch(i){console.log(i)}}const n={form:document.querySelector(".js-form"),spinner:document.querySelector(".js-loader"),btnMore:document.querySelector(".js-btn-more")},l="hidden",a={q:"",page:1,per_page:15,maxPage:0};n.form.addEventListener("submit",E);async function E(t){t.preventDefault(),a.page=1;const s=t.currentTarget;if(a.q=s.elements.textValue.value.trim(),!a.q){A.info({position:"topRight",title:"It is can not be empty",message:"you must to write something in the stroke",titleColor:"white",titleSize:"16px",messageColor:"white",backgroundColor:"#09f",iconUrl:g,layout:2,progressBarColor:" #3958c9",maxWidth:"432px",closeOnEscape:!0});return}h(),f(),n.btnMore.classList.add(l);try{const{hits:r,totalHits:i}=await d(a);a.maxPage=Math.ceil(i/a.per_page),u(r),r.length>0&&r.length!==i?(n.btnMore.classList.remove(l),n.btnMore.addEventListener("click",m)):n.btnMore.classList.add(l)}catch(r){console.log(r)}finally{y(),s.reset()}}async function m(){n.btnMore.classList.add(l),f(),a.page+=1;try{const{hits:t}=await d(a);u(t),B()}catch(t){console.log(t)}finally{y(),n.btnMore.classList.remove(l)}a.maxPage===a.page&&(n.btnMore.classList.add(l),A.info({position:"topRight",message:"We're sorry, but you've reached the end of search results.",titleColor:"white",titleSize:"16px",messageColor:"white",backgroundColor:"#09f",iconUrl:g,progressBarColor:" #3958c9",maxWidth:"432px"}),n.btnMore.removeEventListener("click",m))}function f(){return n.spinner.classList.remove(l)}function y(){return n.spinner.classList.add(l)}
//# sourceMappingURL=commonHelpers.js.map
