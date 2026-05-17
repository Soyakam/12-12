import{a as w,S,i as l}from"./assets/vendor-QphqWX9g.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function f(o,r){const i="https://pixabay.com/api/",s=new URLSearchParams({key:"54125236-595e0c257ca7120b96734fe1b",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:30}),e=`${i}?${s}`;return(await w.get(e)).data}function m(o){const{largeImageURL:r,tags:i,webformatURL:s,likes:e,views:t,comments:a,downloads:b}=o;return`
    <div class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img
        loading="lazy"
        src="${s}" alt="${i}" />
      </a>
      <ul class="img-dscr">
        <li><p><b>Likes:</b> ${e}</p></li>
        <li><p><b>Views:</b> ${t}</p></li>
        <li><p><b>Comments:</b> ${a}</p></li>
        <li><p><b>Downloads:</b> ${b}</p></li>
      </ul>
    </div>
  `}const v=document.querySelector(".form"),u=document.querySelector(".fot"),p=document.querySelector(".btn"),g=document.querySelector(".loader");let d,c=1;const h=new S(".fot a",{captionsData:"alt",captionDelay:250});n();v.addEventListener("submit",o=>{if(o.preventDefault(),d=o.target.elements["search-text"].value.trim(),d===""){l.error({position:"topRight",title:"error",message:"Please enter a search query!!!"}),n();return}c=1,L(),u.innerHTML="",f(d,c).then(r=>{if(r.hits.length===0){n(),y(),l.error({position:"topRight",title:"Error",message:"Illegal Sorry, there are no images matching your search query. Please try again!"});return}const i=r.hits.map(m).join("");u.insertAdjacentHTML("beforeend",i),h.refresh(),R(),n(),o.target.reset()}).catch(()=>{n(),l.error({position:"topRight",title:"Error",message:"Something went wrong. Please try again later!"})})});p.addEventListener("click",P);async function P(){c+=1,L();try{const o=await f(d,c),r=o.hits.map(m).join("");u.insertAdjacentHTML("beforeend",r),h.refresh(),c*30>=o.totalHits&&(y(),l.info({position:"topRight",message:"You've reached the end of search results."}))}catch{l.error({position:"topRight",title:"Error",message:"Something went wrong. Please try again later!"})}n()}function R(){p.classList.remove("hidden")}function y(){p.classList.add("hidden")}function n(){g.classList.add("loaderHidden")}function L(){g.classList.remove("loaderHidden")}
//# sourceMappingURL=index.js.map
