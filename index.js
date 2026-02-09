import{a as p,R as $,S as E,i as a}from"./assets/vendor-IF1acRtE.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const A=10,M=8,_="https://sound-wave.b.goit.study/api",g={GENRES:"/genres",ARTISTS:"/artists",ARTIST_BY_ID:"/artists/",FEEDBACKS:"/feedbacks"};p.defaults.baseURL=_;async function T(){const{data:e}=await p.get(`${g.FEEDBACKS}?limit=${A}&page=1`);return e}async function B(e){const{data:s}=await p.get(`${g.ARTISTS}?limit=${M}&page=${e}`);return s}function q(e){const s=Math.floor(e/6e4),t=Math.floor(e%6e4/1e3);return`${s}:${t.toString().padStart(2,"0")}`}function O(e){return e.intDiedYear===null?`${e.intFormedYear} - present`:`${e.intFormedYear} - ${e.intDiedYear}`}function j(e){return e.strBiographyEN.split(".").slice(0,2).join(".")+"."}function x(e){return e.genres.map(s=>`
    <li>
      <button class="artist-short-info-genre-btn">${s}</button>
    </li>`).join("")}function C(e){return e.albumsList.map(t=>{const o=t.tracks.map(r=>{const i=r.movie===null?"":`
        <a href="${r.movie}" target="_blank" rel="noopener noreferrer">
          <svg width="24" height="24" fill="#ffffff">
            <use href="../img/sprite.svg#icon-youtube"></use>
          </svg>
        </a>`;return`
        <tr>
          <td>${r.strTrack}</td>
          <td>${q(r.intDuration)}</td>
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
      </div>`}).join("")}function R(e,s){const t=O(e);j(e);const o=x(e),r=C(e);s.insertAdjacentHTML("beforeend",`
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
      
    </div>`)}const d=document.querySelector(".modal-overlay"),b=document.querySelector(".artists-modal-close-btn");document.querySelector(".modal");function h(e){e.target===d&&c()}function v(e){e.key==="Escape"&&c()}b.addEventListener("click",c);d.addEventListener("click",h);document.addEventListener("keydown",v);function c(){var e;d.classList.remove("is-open"),document.body.style.overflow="",(e=document.querySelector(".artist-info-wrapper"))==null||e.remove(),b.removeEventListener("click",c),d.removeEventListener("click",h),document.removeEventListener("keydown",v)}function I(e){const s=document.createElement("div");s.classList.add("loader");const t=document.createElement("div");return t.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
`,t.appendChild(s),(e.style.position===""||e.style.position==="static")&&(e.style.position="relative"),e.appendChild(t),t}function F(e){const s=document.querySelector(e);return I(s)}function L(e){e&&(e.style.display="flex")}function w(e){e&&(e.style.display="none")}const n={list:document.querySelector(".js-artists-list"),loadMoreBtn:document.querySelector(".js-artists-load"),modalOverlay:document.querySelector(".modal-overlay"),modalRoot:document.querySelector(".modal"),modalOverlay:document.querySelector(".modal-overlay"),modalWindowCloseBtn:document.querySelector(".artists-modal-close-btn"),containerClass:document.querySelector(".container")},u=F("body");let f=1,m=!1;n.list&&n.loadMoreBtn&&H();function H(){n.list.innerHTML="",n.loadMoreBtn.hidden=!1,n.loadMoreBtn.addEventListener("click",N),n.list.addEventListener("click",D),k(!0)}async function N(){m||(f+=1,await k(!1))}async function k(e){m=!0,n.loadMoreBtn.hidden="Loading...",e&&(f=1),L(u);try{const t=(await B(f)).artists;e&&(n.list.innerHTML=""),n.list.insertAdjacentHTML("beforeend",t.map(P).join("")),t.length<8&&(n.loadMoreBtn.hidden=!0),n.loadMoreBtn.innerHTML=`
      Load More
      <svg class="artists__load-icon" width="20" height="20" aria-hidden="true">
        <use href="../img/sprite.svg#icon-down-arrow-alt"></use>
      </svg>
    `}catch(s){console.log(s)}finally{w(u),m=!1}}function P(e){var y;const s=e._id,t=e.strArtist,o=e.strBiographyEN||"",r=o.length>120?`${o.slice(0,120)}...`:o,i=((y=e.genres)==null?void 0:y.slice(0,4))||[];return`
    <li class="artist-card">
      <div class="artist-card__image">
        <img src="${e.strArtistThumb||""}" alt="${t}" loading="lazy" />
      </div>

      <div class="artist-card__content">
        <ul class="artist-card__tags">
          ${i.map(S=>`<li class="artist-card__tag">${S}</li>`).join("")}
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
  `}async function D(e){const s=e.target.closest(".js-artist-more");if(!s)return;const t=s.dataset.artistId;t&&Y(t)}async function Y(e){var o;L(u),n.modalOverlay.classList.add("is-open"),document.body.style.overflow="hidden",(o=document.querySelector(".artist-info-wrapper"))==null||o.remove(),n.modalWindowCloseBtn.addEventListener("click",c),n.modalOverlay.addEventListener("click",h),document.addEventListener("keydown",v);const t=await(await fetch(`https://sound-wave.b.goit.study/api/artists/${e}/albums`,{headers:{Accept:"application/json"}})).json();R(t,n.modalRoot),w(u)}const G={feedbacksList:document.querySelector(".swiper-wrapper")};function K(e){const s=e.map(({_id:t,name:o,rating:r,descr:i})=>`
        <div class="swiper-slide">
          <div class="feedback-block">
            <div data-raty class="feedback-rating" data-id=${t} data-score=${r}></div>
            <p class="feedback-descr">"${i}"</p>
            <p class="feedback-name">${o}</p>
          </div>
        </div>`).join("");G.feedbacksList.insertAdjacentHTML("beforeend",s)}function z(){const e={starOn:"/img/feedback-img/star-on.png",starOff:"/img/feedback-img/star-off.png",space:!1,readOnly:!0,halfShow:!1};Array.from(document.querySelectorAll("[data-raty]")).map(t=>{const o=Number(t.dataset.score);new $(t,{...e,score:o}).init()})}function W(){new E(".swiper",{direction:"horizontal",loop:!1,autoHeight:!1,effect:"slide",pagination:{el:".swiper-pagination",type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,enabled:!1},breakpoints:{768:{navigation:{enabled:!0}}}})}function U(e,s="success"){const t={message:e,position:"topRight",timeout:5e3};switch(s){case"success":a.success(t);break;case"error":a.error(t);break;case"warning":a.warning(t);break;case"info":a.info(t);break;default:a.error({message:`Invalid type of toast: ${s}`,position:"topRight",timeout:5e3});break}}J();async function J(){try{const s=(await T()).data;K(s)}catch{U("Error create feedbacks list","error");return}z(),W()}function Q(){const e=document.querySelector(".nav-button"),s=document.querySelector(".modal-close-button"),t=document.querySelector(".modal-menu");document.querySelectorAll(".modal-nav-link").forEach(r=>{r.addEventListener("click",()=>{t.classList.remove("modal-open")})}),e.addEventListener("click",()=>{t.classList.add("modal-open")}),s.addEventListener("click",()=>{t.classList.remove("modal-open")})}Q();const{height:V}=document.querySelector(".header").getBoundingClientRect();document.body.style.paddingTop=`${V}px`;
//# sourceMappingURL=index.js.map
