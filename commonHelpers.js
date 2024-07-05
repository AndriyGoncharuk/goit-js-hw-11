import{S as d,i as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const u="44779032-830cd8356d509db770742e712",f="https://pixabay.com/api/";function m(t){const r=`${f}?key=${u}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(n=>{if(!n.ok)throw new Error("Failed to fetch images");return n.json()})}function y(t){const r=document.getElementById("gallery"),n=t.map(s=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${s.largeImageURL}">
                <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}" />
            </a>
            <div class="info">
                <p span>Likes: ${s.likes}</p>
                <p span>Views: ${s.views}</p>
                <p span>Comments: ${s.comments}</p>
                <p span>Downloads: ${s.downloads}</p>
            </div>
        </li>
    `).join("");r.innerHTML=n,new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function p(){const t=document.getElementById("gallery");t.innerHTML=""}function g(){const t=document.getElementById("loader");t.style.display="block"}function c(){const t=document.getElementById("loader");t.style.display="none"}c();const i=document.getElementById("search-form");i.addEventListener("submit",function(t){t.preventDefault();const r=i.elements.query.value.trim();if(console.log(r),r===""){l.warning({title:"Warning",message:"Please enter a search query."});return}p(),g(),m(r).then(n=>{if(n.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(n.hits)}).catch(n=>{l.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{c()})});
//# sourceMappingURL=commonHelpers.js.map
