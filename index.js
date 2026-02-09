import{a as p,R as E,S as A,i as c}from"./assets/vendor-IF1acRtE.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const M=10,_=8,T="https://sound-wave.b.goit.study/api",v={GENRES:"/genres",ARTISTS:"/artists",ARTIST_BY_ID:"/artists/",FEEDBACKS:"/feedbacks"};p.defaults.baseURL=T;async function B(){const{data:e}=await p.get(`${v.FEEDBACKS}?limit=${M}&page=1`);return e}async function q(e){const{data:s}=await p.get(`${v.ARTISTS}?limit=${_}&page=${e}`);return s}function O(e){const s=Math.floor(e/6e4),t=Math.floor(e%6e4/1e3);return`${s}:${t.toString().padStart(2,"0")}`}function j(e){return e.intDiedYear===null?`${e.intFormedYear} - present`:`${e.intFormedYear} - ${e.intDiedYear}`}function x(e){return e.strBiographyEN.split(".").slice(0,2).join(".")+"."}function C(e){return e.genres.map(s=>`
    <li>
      <button class="artist-short-info-genre-btn">${s}</button>
    </li>`).join("")}function R(e){return e.albumsList.map(t=>{const o=t.tracks.map(r=>{const i=r.movie===null?"":`
        <a href="${r.movie}" target="_blank" rel="noopener noreferrer">
          <svg width="24" height="24" fill="#ffffff">
            <use href="../img/sprite.svg#icon-youtube"></use>
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
      </div>`}).join("")}function I(e,s){const t=j(e);x(e);const o=C(e),r=R(e);s.insertAdjacentHTML("beforeend",`
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
      
    </div>`)}const a=document.querySelector(".modal-overlay"),y=document.querySelector(".artists-modal-close-btn");document.querySelector(".modal");function g(e){e.target===a&&l()}function b(e){e.key==="Escape"&&l()}function L(e){a.contains(e.relatedTarget)||l()}function F(){y.addEventListener("click",l),a.addEventListener("click",g),document.addEventListener("keydown",b),a.addEventListener("blur",L)}function l(){var e;a.classList.remove("is-open"),document.body.style.overflow="",(e=document.querySelector(".artist-info-wrapper"))==null||e.remove(),y.removeEventListener("click",l),a.removeEventListener("click",g),document.removeEventListener("keydown",b),a.removeEventListener("blur",L)}function H(e){const s=document.createElement("div");s.classList.add("loader");const t=document.createElement("div");return t.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
`,t.appendChild(s),(e.style.position===""||e.style.position==="static")&&(e.style.position="relative"),e.appendChild(t),t}function N(e){const s=document.querySelector(e);return H(s)}function w(e){e&&(e.style.display="flex")}function k(e){e&&(e.style.display="none")}const n={list:document.querySelector(".js-artists-list"),loadMoreBtn:document.querySelector(".js-artists-load"),modalOverlay:document.querySelector(".modal-overlay"),modalRoot:document.querySelector(".modal"),modalOverlay:document.querySelector(".modal-overlay"),modalWindowCloseBtn:document.querySelector(".artists-modal-close-btn"),containerClass:document.querySelector(".container")},u=N("body");let f=1,m=!1;n.list&&n.loadMoreBtn&&P();function P(){n.list.innerHTML="",n.loadMoreBtn.hidden=!1,n.loadMoreBtn.addEventListener("click",D),n.list.addEventListener("click",G),S(!0)}async function D(){m||(f+=1,await S(!1))}async function S(e){m=!0,n.loadMoreBtn.hidden="Loading...",e&&(f=1),w(u);try{const t=(await q(f)).artists;e&&(n.list.innerHTML=""),n.list.insertAdjacentHTML("beforeend",t.map(Y).join("")),t.length<8&&(n.loadMoreBtn.hidden=!0),n.loadMoreBtn.innerHTML=`
      Load More
      <svg class="artists__load-icon" width="20" height="20" aria-hidden="true">
        <use href="../img/sprite.svg#icon-down-arrow-alt"></use>
      </svg>
    `}catch(s){console.log(s)}finally{k(u),m=!1}}function Y(e){var h;const s=e._id,t=e.strArtist,o=e.strBiographyEN||"",r=o.length>120?`${o.slice(0,120)}...`:o,i=((h=e.genres)==null?void 0:h.slice(0,4))||[];return`
    <li class="artist-card">
      <div class="artist-card__image">
        <img src="${e.strArtistThumb||""}" alt="${t}" loading="lazy" />
      </div>

      <div class="artist-card__content">
        <ul class="artist-card__tags">
          ${i.map($=>`<li class="artist-card__tag">${$}</li>`).join("")}
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
  `}async function G(e){const s=e.target.closest(".js-artist-more");if(!s)return;const t=s.dataset.artistId;t&&K(t)}async function K(e){var o;w(u),n.modalOverlay.classList.add("is-open"),n.modalOverlay.focus(),document.body.style.overflow="hidden",(o=document.querySelector(".artist-info-wrapper"))==null||o.remove(),F();const t=await(await fetch(`https://sound-wave.b.goit.study/api/artists/${e}/albums`,{headers:{Accept:"application/json"}})).json();I(t,n.modalRoot),k(u)}const z={feedbacksList:document.querySelector(".swiper-wrapper")};function U(e){const s=e.map(({_id:t,name:o,rating:r,descr:i})=>`
        <div class="swiper-slide">
          <div class="feedback-block">
            <div data-raty class="feedback-rating" data-id=${t} data-score=${r}></div>
            <p class="feedback-descr">"${i}"</p>
            <p class="feedback-name">${o}</p>
          </div>
        </div>`).join("");z.feedbacksList.insertAdjacentHTML("beforeend",s)}function W(){const e={starOn:"/img/feedback-img/star-on.png",starOff:"/img/feedback-img/star-off.png",space:!1,readOnly:!0,halfShow:!1};Array.from(document.querySelectorAll("[data-raty]")).map(t=>{const o=Number(t.dataset.score);new E(t,{...e,score:o}).init()})}function J(){new A(".swiper",{direction:"horizontal",loop:!1,autoHeight:!1,effect:"slide",pagination:{el:".swiper-pagination",type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,enabled:!1},breakpoints:{768:{navigation:{enabled:!0}}}})}function Q(e,s="success"){const t={message:e,position:"topRight",timeout:5e3};switch(s){case"success":c.success(t);break;case"error":c.error(t);break;case"warning":c.warning(t);break;case"info":c.info(t);break;default:c.error({message:`Invalid type of toast: ${s}`,position:"topRight",timeout:5e3});break}}V();async function V(){try{const s=(await B()).data;U(s)}catch{Q("Error create feedbacks list","error");return}W(),J()}function X(){const e=document.querySelector(".nav-button"),s=document.querySelector(".modal-close-button"),t=document.querySelector(".modal-menu");document.querySelectorAll(".modal-nav-link").forEach(r=>{r.addEventListener("click",()=>{t.classList.remove("modal-open")})}),e.addEventListener("click",()=>{t.classList.add("modal-open")}),s.addEventListener("click",()=>{t.classList.remove("modal-open")})}X();const{height:Z}=document.querySelector(".header").getBoundingClientRect();document.body.style.paddingTop=`${Z}px`;
//# sourceMappingURL=index.js.map
