import{a as m,R as k,S as L,i as n}from"./assets/vendor-IF1acRtE.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const $=10,S=8,A="https://sound-wave.b.goit.study/api",g={GENRES:"/genres",ARTISTS:"/artists",ARTIST_BY_ID:"/artists/",FEEDBACKS:"/feedbacks"};m.defaults.baseURL=A;async function E(){const{data:e}=await m.get(`${g.FEEDBACKS}?limit=${$}&page=1`);return e}async function M(e){const{data:s}=await m.get(`${g.ARTISTS}?limit=${S}&page=${e}`);return s}function _(e){const s=Math.floor(e/6e4),t=Math.floor(e%6e4/1e3);return`${s}:${t.toString().padStart(2,"0")}`}function T(e){return e.intDiedYear===null?`${e.intFormedYear} - present`:`${e.intFormedYear} - ${e.intDiedYear}`}function B(e){return e.strBiographyEN.split(".").slice(0,2).join(".")+"."}function q(e){return e.genres.map(s=>`
    <li>
      <button class="artist-short-info-genre-btn">${s}</button>
    </li>`).join("")}function O(e){return e.albumsList.map(t=>{const o=t.tracks.map(r=>{const a=r.movie===null?"":`
        <a href="${r.movie}" target="_blank" rel="noopener noreferrer">
          <svg width="24" height="24" fill="#ffffff">
            <use href="../img/sprite.svg#icon-youtube"></use>
          </svg>
        </a>`;return`
        <tr>
          <td>${r.strTrack}</td>
          <td>${_(r.intDuration)}</td>
          <td>${a}</td>
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
      </div>`}).join("")}function j(e,s){const t=T(e);B(e);const o=q(e),r=O(e);s.insertAdjacentHTML("beforeend",`
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
      
    </div>`)}const d=document.querySelector(".modal-overlay"),y=document.querySelector(".artists-modal-close-btn");document.querySelector(".modal");function p(e){e.target===d&&c()}function h(e){e.key==="Escape"&&c()}y.addEventListener("click",c);d.addEventListener("click",p);document.addEventListener("keydown",h);function c(){var e;d.classList.remove("is-open"),document.body.style.overflow="",(e=document.querySelector(".artist-info-wrapper"))==null||e.remove(),y.removeEventListener("click",c),d.removeEventListener("click",p),document.removeEventListener("keydown",h)}const i={list:document.querySelector(".js-artists-list"),loadMoreBtn:document.querySelector(".js-artists-load"),modalOverlay:document.querySelector(".modal-overlay"),modalRoot:document.querySelector(".modal"),modalOverlay:document.querySelector(".modal-overlay"),modalWindowCloseBtn:document.querySelector(".artists-modal-close-btn")};let u=1,f=!1;i.list&&i.loadMoreBtn&&x();function x(){i.list.innerHTML="",i.loadMoreBtn.hidden=!1,i.loadMoreBtn.addEventListener("click",R),i.list.addEventListener("click",I),b(!0)}async function R(){f||(u+=1,await b(!1))}async function b(e){f=!0,i.loadMoreBtn.textContent="Loading...",e&&(u=1);const t=(await M(u)).artists;e&&(i.list.innerHTML=""),i.list.insertAdjacentHTML("beforeend",t.map(C).join("")),t.length<8&&(i.loadMoreBtn.hidden=!0),i.loadMoreBtn.innerHTML=`
    Load More
    <svg class="artists__load-icon" width="20" height="20" aria-hidden="true">
      <use href="../img/sprite.svg#icon-down-arrow-alt"></use>
    </svg>
  `,f=!1}function C(e){var v;const s=e._id,t=e.strArtist,o=e.strBiographyEN||"",r=o.length>120?`${o.slice(0,120)}...`:o,a=((v=e.genres)==null?void 0:v.slice(0,4))||[];return`
    <li class="artist-card">
      <div class="artist-card__image">
        <img src="${e.strArtistThumb||""}" alt="${t}" loading="lazy" />
      </div>

      <div class="artist-card__content">
        <ul class="artist-card__tags">
          ${a.map(w=>`<li class="artist-card__tag">${w}</li>`).join("")}
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
  `}async function I(e){const s=e.target.closest(".js-artist-more");if(!s)return;const t=s.dataset.artistId;t&&F(t)}async function F(e){var o;i.modalOverlay.classList.add("is-open"),document.body.style.overflow="hidden",(o=document.querySelector(".artist-info-wrapper"))==null||o.remove(),i.modalWindowCloseBtn.addEventListener("click",c),i.modalOverlay.addEventListener("click",p),document.addEventListener("keydown",h);const t=await(await fetch(`https://sound-wave.b.goit.study/api/artists/${e}/albums`,{headers:{Accept:"application/json"}})).json();j(t,i.modalRoot)}const H={feedbacksList:document.querySelector(".swiper-wrapper")};function N(e){const s=e.map(({_id:t,name:o,rating:r,descr:a})=>`
        <div class="swiper-slide">
          <div class="feedback-block">
            <div data-raty class="feedback-rating" data-id=${t} data-score=${r}></div>
            <p class="feedback-descr">"${a}"</p>
            <p class="feedback-name">${o}</p>
          </div>
        </div>`).join("");H.feedbacksList.insertAdjacentHTML("beforeend",s)}function P(){const e={starOn:"/img/feedback-img/star-on.png",starOff:"/img/feedback-img/star-off.png",space:!1,readOnly:!0,halfShow:!1};Array.from(document.querySelectorAll("[data-raty]")).map(t=>{const o=Number(t.dataset.score);new k(t,{...e,score:o}).init()})}function D(){new L(".swiper",{direction:"horizontal",loop:!1,autoHeight:!1,effect:"slide",pagination:{el:".swiper-pagination",type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,enabled:!1},breakpoints:{768:{navigation:{enabled:!0}}}})}function Y(e,s="success"){const t={message:e,position:"topRight",timeout:5e3};switch(s){case"success":n.success(t);break;case"error":n.error(t);break;case"warning":n.warning(t);break;case"info":n.info(t);break;default:n.error({message:`Invalid type of toast: ${s}`,position:"topRight",timeout:5e3});break}}G();async function G(){try{const s=(await E()).data;N(s)}catch{Y("Error create feedbacks list","error");return}P(),D()}function K(){const e=document.querySelector(".nav-button"),s=document.querySelector(".modal-close-button"),t=document.querySelector(".modal-menu");document.querySelectorAll(".modal-nav-link").forEach(r=>{r.addEventListener("click",()=>{t.classList.remove("modal-open")})}),e.addEventListener("click",()=>{t.classList.add("modal-open")}),s.addEventListener("click",()=>{t.classList.remove("modal-open")})}K();const{height:z}=document.querySelector(".header").getBoundingClientRect();document.body.style.paddingTop=`${z}px`;
//# sourceMappingURL=index.js.map
