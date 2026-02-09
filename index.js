import{a as A,R as k,S as B,i as c}from"./assets/vendor-IF1acRtE.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const M=10,T=8,R="https://sound-wave.b.goit.study/api",h={GENRES:"/genres",ARTISTS:"/artists",ARTIST_BY_ID:"/artists/",FEEDBACKS:"/feedbacks"};A.defaults.baseURL=R;async function C(){const{data:e}=await A.get(`${h.FEEDBACKS}?limit=${M}&page=1`);return e}async function $(e){const{data:s}=await A.get(`${h.ARTISTS}?limit=${T}&page=${e}`);return s}function O(e){const s=Math.floor(e/6e4),t=Math.floor(e%6e4/1e3);return`${s}:${t.toString().padStart(2,"0")}`}function N(e){return e.intDiedYear===null?`${e.intFormedYear} - present`:`${e.intFormedYear} - ${e.intDiedYear}`}function j(e){return e.strBiographyEN.split(".").slice(0,2).join(".")+"."}function Q(e){return e.genres.map(s=>`
    <li>
      <button class="artist-short-info-genre-btn">${s}</button>
    </li>`).join("")}function q(e){return e.albumsList.map(t=>{const o=t.tracks.map(r=>{const i=r.movie===null?"":`
        <a href="${r.movie}" target="_blank" rel="noopener noreferrer">
          <svg class='artist-modal-youtube-icon' width="24" height="24">
            <use href="/img/sprite.svg#icon-youtube"></use>
          </svg>
        </a>`;return`
        <tr>
          <td>${r.strTrack}</td>
          <td>${O(r.intDuration)}</td>
          <td>${i}</td>
        </tr>`}).join("");return`
      <div class="artist-song-table">
        <h3 class="artist-table-header">${t.strAlbum}</h3>
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
      </div>`}).join("")}function Y(e,s){const t=N(e);j(e);const o=Q(e),r=q(e);s.insertAdjacentHTML("beforeend",`
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
              <p class="short-info-small-text">${t}</p>
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
        ${r}
      </div>
      
    </div>`)}const a=document.querySelector(".modal-overlay"),g=document.querySelector(".artists-modal-close-btn");document.querySelector(".modal");function v(e){e.target===a&&l()}function y(e){e.key==="Escape"&&l()}function b(e){a.contains(e.relatedTarget)||l()}function I(){g.addEventListener("click",l),a.addEventListener("click",v),document.addEventListener("keydown",y),a.addEventListener("blur",b)}function l(){var e;a.classList.remove("is-open"),document.body.style.overflow="",(e=document.querySelector(".artist-info-wrapper"))==null||e.remove(),g.removeEventListener("click",l),a.removeEventListener("click",v),document.removeEventListener("keydown",y),a.removeEventListener("blur",b)}function x(e){const s=document.createElement("div");s.classList.add("loader");const t=document.createElement("div");return t.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
`,t.appendChild(s),(e.style.position===""||e.style.position==="static")&&(e.style.position="relative"),e.appendChild(t),t}function _(e){const s=document.querySelector(e);return x(s)}function S(e){e&&(e.style.display="flex")}function w(e){e&&(e.style.display="none")}const n={list:document.querySelector(".js-artists-list"),loadMoreBtn:document.querySelector(".js-artists-load"),modalOverlay:document.querySelector(".modal-overlay"),modalRoot:document.querySelector(".modal"),modalOverlay:document.querySelector(".modal-overlay"),modalWindowCloseBtn:document.querySelector(".artists-modal-close-btn"),containerClass:document.querySelector(".container")},u=_("body");let m=1,f=!1;n.list&&n.loadMoreBtn&&D();function D(){n.list.innerHTML="",n.loadMoreBtn.hidden=!1,n.loadMoreBtn.addEventListener("click",U),n.list.addEventListener("click",P),L(!0)}async function U(){f||(m+=1,await L(!1))}async function L(e){f=!0,n.loadMoreBtn.hidden="Loading...",e&&(m=1),S(u);try{const t=(await $(m)).artists;e&&(n.list.innerHTML=""),n.list.insertAdjacentHTML("beforeend",t.map(F).join("")),t.length<8&&(n.loadMoreBtn.hidden=!0),n.loadMoreBtn.innerHTML=`
      Load More
      <svg class="artists__load-icon" width="20" height="20" aria-hidden="true">
        <use href="../img/sprite.svg#icon-down-arrow-alt"></use>
      </svg>
    `}catch(s){console.log(s)}finally{w(u),f=!1}}function F(e){var p;const s=e._id,t=e.strArtist,o=e.strBiographyEN||"",r=o.length>120?`${o.slice(0,120)}...`:o,i=((p=e.genres)==null?void 0:p.slice(0,4))||[];return`
    <li class="artist-card">
      <div class="artist-card__image">
        <img src="${e.strArtistThumb||""}" alt="${t}" loading="lazy" />
      </div>

      <div class="artist-card__content">
        <ul class="artist-card__tags">
          ${i.map(E=>`<li class="artist-card__tag">${E}</li>`).join("")}
        </ul>

        <h3 class="artist-card__name">${t}</h3>
        <p class="artist-card__desc">${r}</p>

        <button
          class="artist-card__more js-artist-more"
          type="button"
          data-artist-id="${s}"
        >
          Learn More
          <svg class="artist-card__icon" width="16" height="16" aria-hidden="true">
            <use href="../img/sprite.svg#icon-caret-right"></use>
          </svg>
        </button>
      </div>
    </li>
  `}async function P(e){const s=e.target.closest(".js-artist-more");if(!s)return;const t=s.dataset.artistId;t&&K(t)}async function K(e){var o;S(u),n.modalOverlay.classList.add("is-open"),n.modalOverlay.focus(),document.body.style.overflow="hidden",(o=document.querySelector(".artist-info-wrapper"))==null||o.remove(),I();const t=await(await fetch(`https://sound-wave.b.goit.study/api/artists/${e}/albums`,{headers:{Accept:"application/json"}})).json();Y(t,n.modalRoot),w(u)}const G={feedbacksList:document.querySelector(".swiper-wrapper")};function X(e){const s=e.map(({_id:t,name:o,rating:r,descr:i})=>`
        <div class="swiper-slide">
          <div class="feedback-block">
            <div data-raty class="feedback-rating" data-id=${t} data-score=${r}></div>
            <p class="feedback-descr">"${i}"</p>
            <p class="feedback-name">${o}</p>
          </div>
        </div>`).join("");G.feedbacksList.insertAdjacentHTML("beforeend",s)}const H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFuSURBVHgBpVTRTcNADH12K747QjoB7QS9TgBsUCZoKwT9LHyifCTdgA0YgWMDmICwQb6RiPG1oUlISK6tpdOdzr7nZz/rAA+7m24+3PKJ5U4wE13qFrh1YyJzMiARz4tgXnfGtzlXJgqEuFKqSDYO7fINRzHk3rrOgC9wDMOc3Qt2/SsYAikry0e7TBoBb000Y/QmeXigKYL8YYB2JokDJ0EqTCllukNsX5se6WGAA+03obgaRXY7MGNt8lIPKU639Fsw2+Jq2SNl+oyOMlssUWJXTv29KAsV4axBBB+wL8mmcS7SfmzchTrG2hvrCeT6aN2buKR4ZQ7VoaplG3gaC2L3pnJXD6MJvBmKqSWpwRGN4A1Yj+V6EEzD2xQNo0UEo2IO/gVcNX1PIrE2frgVTOTpr7sHVFj2q+x4UuCIBfF9aOevJZbXyuihPF76pZ2jNBn9ar7sXQvRIaU4tItGtfMRGbo/gEDzDPJZ9v8ADQiZclEuBD0AAAAASUVORK5CYII=",J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFFSURBVHgBrZSNbYQwDIXdThA2YAQ2aDYgG/Q2gA1gA9gAMQFs0BE6AmwQNkj9wD6dWi7Qu/ukJ0UQO45/QnSOSfQSnLU2QLy29AK+uq4LENb0JCkTgPc+GGPgNIsZvB84rPiq64KdUVEUWOb0aHSsiQkKouRvXv7d5cLqRMjRWlFcr23b8Ju6ruE0yL5vsRnE/vMNJ1ZVZThXpFrDS6NB0DzPtCzLVeM4Ut/3W4RJkvhhGMKjwBY+EKEeiMpNHGn4L7CR62e7RSjL8rQzrro6S++lxiDJZyJtmkYb3dAB66gdkec5HP7pyb3G/mDoiCxbU2bPOMx0OhRtjVtkT3QMleu1MBmSeLSER8F0cmRqoGgOreYPr4s8Bo0YpawOjwX+gTNPWuWcC5xDreBeMlPWhKJgL6+LmENHW19FNwkX2mbZ3X78AZ/Wm+XSeLl+AAAAAElFTkSuQmCC";function W(){const e={starOn:H,starOff:J,space:!1,readOnly:!0,halfShow:!1};Array.from(document.querySelectorAll("[data-raty]")).map(t=>{const o=Number(t.dataset.score);new k(t,{...e,score:o}).init()})}function z(){new B(".swiper",{direction:"horizontal",loop:!1,autoHeight:!1,effect:"slide",pagination:{el:".swiper-pagination",type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,enabled:!1},breakpoints:{768:{navigation:{enabled:!0}}}})}function V(e,s="success"){const t={message:e,position:"topRight",timeout:5e3};switch(s){case"success":c.success(t);break;case"error":c.error(t);break;case"warning":c.warning(t);break;case"info":c.info(t);break;default:c.error({message:`Invalid type of toast: ${s}`,position:"topRight",timeout:5e3});break}}Z();async function Z(){try{const s=(await C()).data;X(s)}catch{V("Error create feedbacks list","error");return}W(),z()}function ee(){const e=document.querySelector(".nav-button"),s=document.querySelector(".modal-close-button"),t=document.querySelector(".modal-menu");document.querySelectorAll(".modal-nav-link").forEach(r=>{r.addEventListener("click",()=>{t.classList.remove("modal-open")})}),e.addEventListener("click",()=>{t.classList.add("modal-open")}),s.addEventListener("click",()=>{t.classList.remove("modal-open")})}ee();const{height:te}=document.querySelector(".header").getBoundingClientRect();document.body.style.paddingTop=`${te}px`;
//# sourceMappingURL=index.js.map
