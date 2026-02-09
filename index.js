import{a as h,R as B,S as M,i as d}from"./assets/vendor-IF1acRtE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const T=10,g=8,R="https://sound-wave.b.goit.study/api",v={GENRES:"/genres",ARTISTS:"/artists",ARTIST_BY_ID:"/artists/",FEEDBACKS:"/feedbacks"};h.defaults.baseURL=R;async function $(){const{data:e}=await h.get(`${v.FEEDBACKS}?limit=${T}&page=1`);return e}async function C(e){const{data:t}=await h.get(`${v.ARTISTS}?limit=${g}&page=${e}`);return t}function N(e){const t=Math.floor(e/6e4),r=Math.floor(e%6e4/1e3);return`${t}:${r.toString().padStart(2,"0")}`}function O(e){return e.intDiedYear===null?`${e.intFormedYear} - present`:`${e.intFormedYear} - ${e.intDiedYear}`}function x(e){return e.strBiographyEN.split(".").slice(0,2).join(".")+"."}function I(e){return e.genres.map(t=>`
    <li>
      <button class="artist-short-info-genre-btn">${t}</button>
    </li>`).join("")}function j(e){return e.albumsList.map(r=>{const o=r.tracks.map(s=>{const i=s.movie===null?"":`
        <a href="${s.movie}" target="_blank" rel="noopener noreferrer">
          <svg class='artist-modal-youtube-icon' width="24" height="24">
            <use href="/img/sprite.svg#icon-youtube"></use>
          </svg>
        </a>`;return`
        <tr>
          <td>${s.strTrack}</td>
          <td>${N(s.intDuration)}</td>
          <td>${i}</td>
        </tr>`}).join("");return`
      <div class="artist-song-table">
        <h3 class="artist-table-header">${r.strAlbum}</h3>
        <table>
          <colgroup>
            <col style="width: 97px">
            <col style="width: 74px">
            <col style="width: 24px">
          </colgroup>
          <thead>
            <tr><th>Track</th><th>Time</th><th>Link</th></tr>
          </thead>
          <tbody>${o}</tbody>
        </table>
      </div>`}).join("")}function Q(e,t){const r=O(e);x(e);const o=I(e),s=j(e);t.insertAdjacentHTML("beforeend",`
    <div class="artist-info-wrapper">
      <h1 class="artist-name-title">${e.strArtist}</h1>
      <div class="artist-info">
        <div class = "artist-img-wrapper">
          <img class="artist-img" src="${e.strArtistThumb}" alt="${e.strArtist} artist photo">
        </div>
        <div class="artist-short-info">
          <div class="artist-short-info-grid-wrapper">
            <div class="artist-short-info-years">
              <h3 class="short-info-small-header">Years active</h3>
              <p class="short-info-small-text">${r}</p>
            </div>
            <div class="artist-short-info-sex">
              <h3 class="short-info-small-header">Sex</h3>
              <p class="short-info-small-text">${e.strGender}</p>
            </div>
            <div class="artist-short-info-members">
              <h3 class="short-info-small-header">Members</h3>
              <p class="short-info-small-text">${e.intMembers}</p>
            </div>
            <div class="artist-short-info-country">
              <h3 class="short-info-small-header">Country</h3>
              <p class="short-info-small-text">${e.strCountry}</p>
            </div>
          </div>
          <div class="artist-bio">
            <h3 class="short-info-small-header">Biography</h3>
            <div class = "short-info-small-text-wrapper">
              <p class="short-info-small-text">${e.strBiographyEN}</p>
            </div>
          </div>
          
          <div class="artist-short-info-genres">
            <ul class="artist-short-info-genres-list">${o}</ul>
          </div>
        </div>
      </div>
      <div class="artist-albums-wrapper">
        <h2 class="artist-albums-header">Albums</h2>
        ${s}
      </div>
      
    </div>`)}const l=document.querySelector(".modal-overlay"),b=document.querySelector(".artists-modal-close-btn");document.querySelector(".modal");function y(e){e.target===l&&u()}function L(e){e.key==="Escape"&&u()}function S(e){l.contains(e.relatedTarget)||u()}function P(){b.addEventListener("click",u),l.addEventListener("click",y),document.addEventListener("keydown",L),l.addEventListener("blur",S)}function u(){var e;l.classList.remove("is-open"),document.body.style.overflow="",(e=document.querySelector(".artist-info-wrapper"))==null||e.remove(),b.removeEventListener("click",u),l.removeEventListener("click",y),document.removeEventListener("keydown",L),l.removeEventListener("blur",S)}function Y(e){const t=document.createElement("div");t.classList.add("loader");const r=document.createElement("div");return r.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
`,r.appendChild(t),(e.style.position===""||e.style.position==="static")&&(e.style.position="relative"),e.appendChild(r),r}function q(e){const t=document.querySelector(e);return Y(t)}function w(e){e&&(e.style.display="flex")}function E(e){e&&(e.style.display="none")}const n={list:document.querySelector(".js-artists-list"),loadMoreBtn:document.querySelector(".js-artists-load"),modalOverlay:document.querySelector(".modal-overlay"),modalRoot:document.querySelector(".modal")},p=q("body");let m=1,A=!1;n.list&&n.loadMoreBtn&&F();function F(){n.list.innerHTML="",n.loadMoreBtn.hidden=!0,n.loadMoreBtn.disabled=!1,n.loadMoreBtn.addEventListener("click",D),n.list.addEventListener("click",G),k(!0)}async function D(){A||(m+=1,await k(!1))}async function k(e){if(!A){A=!0,e&&(m=1),n.loadMoreBtn.hidden=!0,n.loadMoreBtn.disabled=!0,n.loadMoreBtn.setAttribute("aria-busy","true"),w(p);try{const t=await C(m),r=(t==null?void 0:t.artists)??[];e&&(n.list.innerHTML=""),n.list.insertAdjacentHTML("beforeend",r.map(K).join(""));const o=U(t,m,g,r.length);n.loadMoreBtn.hidden=!o}catch(t){console.log(t)}finally{E(p),n.loadMoreBtn.disabled=!1,n.loadMoreBtn.removeAttribute("aria-busy"),A=!1}}}function U(e,t,r,o){if(!e)return!1;const s=e.pagination||e.meta||e.pageInfo,i=(s==null?void 0:s.totalPages)??e.totalPages??e.pages??e.total_pages;if(Number.isFinite(i))return t<i;const a=(s==null?void 0:s.hasNextPage)??e.hasNextPage;if(typeof a=="boolean")return a;const c=(s==null?void 0:s.nextPage)??e.nextPage;if(Number.isFinite(c))return c>t;const f=(s==null?void 0:s.total)??(s==null?void 0:s.totalItems)??e.total??e.totalItems??e.totalCount??e.totalArtists;return Number.isFinite(f)?t*r<f:o===r}function K(e){var c;const t=e._id,r=e.strArtist,o=e.strBiographyEN||"",s=o.length>120?`${o.slice(0,120)}...`:o,i=((c=e.genres)==null?void 0:c.slice(0,4))||[];return`
    <li class="artist-card">
      <div class="artist-card-image">
        <img src="${e.strArtistThumb||""}" alt="${r}" loading="lazy" />
      </div>

      <div class="artist-card-content">
        <ul class="artist-card-tags">
          ${i.map(f=>`<li class="artist-card-tag">${f}</li>`).join("")}
        </ul>

        <div class="artist-desc">
          <h3 class="artist-card-name">${r}</h3>
          <p class="artist-card-text">${s}</p>
        </div>

        <button
          class="artist-card-load-more js-artist-load-more"
          type="button"
          data-artist-id="${t}"
        >
          Learn More
          <svg class="artist-card-icon" width="24" height="24" aria-hidden="true">
            <use href="/img/sprite.svg#icon-caret-right"></use>
          </svg>
        </button>
      </div>
    </li>
  `}async function G(e){const t=e.target.closest(".js-artist-load-more");if(!t)return;const r=t.dataset.artistId;r&&X(r)}async function X(e){var t;if(!(!n.modalOverlay||!n.modalRoot)){w(p),n.modalOverlay.classList.add("is-open"),n.modalOverlay.focus(),document.body.style.overflow="hidden",(t=document.querySelector(".artist-info-wrapper"))==null||t.remove(),P();try{const o=await(await fetch(`https://sound-wave.b.goit.study/api/artists/${e}/albums`,{headers:{Accept:"application/json"}})).json();Q(o,n.modalRoot)}catch(r){console.log(r)}finally{E(p)}}}const H={feedbacksList:document.querySelector(".swiper-wrapper")};function J(e){const t=e.map(({_id:r,name:o,rating:s,descr:i})=>`
        <div class="swiper-slide">
          <div class="feedback-block">
            <div data-raty class="feedback-rating" data-id=${r} data-score=${s}></div>
            <p class="feedback-descr">"${i}"</p>
            <p class="feedback-name">${o}</p>
          </div>
        </div>`).join("");H.feedbacksList.insertAdjacentHTML("beforeend",t)}const V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFuSURBVHgBpVTRTcNADH12K747QjoB7QS9TgBsUCZoKwT9LHyifCTdgA0YgWMDmICwQb6RiPG1oUlISK6tpdOdzr7nZz/rAA+7m24+3PKJ5U4wE13qFrh1YyJzMiARz4tgXnfGtzlXJgqEuFKqSDYO7fINRzHk3rrOgC9wDMOc3Qt2/SsYAikry0e7TBoBb000Y/QmeXigKYL8YYB2JokDJ0EqTCllukNsX5se6WGAA+03obgaRXY7MGNt8lIPKU639Fsw2+Jq2SNl+oyOMlssUWJXTv29KAsV4axBBB+wL8mmcS7SfmzchTrG2hvrCeT6aN2buKR4ZQ7VoaplG3gaC2L3pnJXD6MJvBmKqSWpwRGN4A1Yj+V6EEzD2xQNo0UEo2IO/gVcNX1PIrE2frgVTOTpr7sHVFj2q+x4UuCIBfF9aOevJZbXyuihPF76pZ2jNBn9ar7sXQvRIaU4tItGtfMRGbo/gEDzDPJZ9v8ADQiZclEuBD0AAAAASUVORK5CYII=",W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFFSURBVHgBrZSNbYQwDIXdThA2YAQ2aDYgG/Q2gA1gA9gAMQFs0BE6AmwQNkj9wD6dWi7Qu/ukJ0UQO45/QnSOSfQSnLU2QLy29AK+uq4LENb0JCkTgPc+GGPgNIsZvB84rPiq64KdUVEUWOb0aHSsiQkKouRvXv7d5cLqRMjRWlFcr23b8Ju6ruE0yL5vsRnE/vMNJ1ZVZThXpFrDS6NB0DzPtCzLVeM4Ut/3W4RJkvhhGMKjwBY+EKEeiMpNHGn4L7CR62e7RSjL8rQzrro6S++lxiDJZyJtmkYb3dAB66gdkec5HP7pyb3G/mDoiCxbU2bPOMx0OhRtjVtkT3QMleu1MBmSeLSER8F0cmRqoGgOreYPr4s8Bo0YpawOjwX+gTNPWuWcC5xDreBeMlPWhKJgL6+LmENHW19FNwkX2mbZ3X78AZ/Wm+XSeLl+AAAAAElFTkSuQmCC";function z(){const e={starOn:V,starOff:W,space:!1,readOnly:!0,halfShow:!1};Array.from(document.querySelectorAll("[data-raty]")).map(r=>{const o=Number(r.dataset.score);new B(r,{...e,score:o}).init()})}function Z(){new M(".swiper",{direction:"horizontal",loop:!1,autoHeight:!1,effect:"slide",pagination:{el:".swiper-pagination",type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,enabled:!1},breakpoints:{768:{navigation:{enabled:!0}}}})}function _(e,t="success"){const r={message:e,position:"topRight",timeout:5e3};switch(t){case"success":d.success(r);break;case"error":d.error(r);break;case"warning":d.warning(r);break;case"info":d.info(r);break;default:d.error({message:`Invalid type of toast: ${t}`,position:"topRight",timeout:5e3});break}}ee();async function ee(){try{const t=(await $()).data;J(t)}catch{_("Error create feedbacks list","error");return}z(),Z()}function te(){const e=document.querySelector(".nav-button"),t=document.querySelector(".modal-close-button"),r=document.querySelector(".modal-menu");document.querySelectorAll(".modal-nav-link").forEach(s=>{s.addEventListener("click",()=>{r.classList.remove("modal-open")})}),e.addEventListener("click",()=>{r.classList.add("modal-open")}),t.addEventListener("click",()=>{r.classList.remove("modal-open")})}te();const{height:se}=document.querySelector(".header").getBoundingClientRect();document.body.style.paddingTop=`${se}px`;
//# sourceMappingURL=index.js.map
