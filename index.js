import{a as f,R as L,S as w}from"./assets/vendor-Byf7b3WI.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const k=10,S=8,$="https://sound-wave.b.goit.study/api",v={GENRES:"/genres",ARTISTS:"/artists",ARTIST_BY_ID:"/artists/",FEEDBACKS:"/feedbacks"};f.defaults.baseURL=$;async function A(){const{data:e}=await f.get(`${v.FEEDBACKS}?limit=${k}&page=1`);return e}async function E(e){const{data:r}=await f.get(`${v.ARTISTS}?limit=${S}&page=${e}`);return r}function M(e){const r=Math.floor(e/6e4),s=Math.floor(e%6e4/1e3);return`${r}:${s.toString().padStart(2,"0")}`}function _(e){return e.intDiedYear===null?`${e.intFormedYear} - present`:`${e.intFormedYear} - ${e.intDiedYear}`}function B(e){return e.strBiographyEN.split(".").slice(0,2).join(".")+"."}function T(e){return e.genres.map(r=>`
    <li>
      <button class="artist-short-info-genre-btn">${r}</button>
    </li>`).join("")}function q(e){return e.albumsList.map(s=>{const o=s.tracks.map(t=>{const i=t.movie===null?"":`
        <a href="${t.movie}" target="_blank" rel="noopener noreferrer">
          <svg width="24" height="24" fill="#ffffff">
            <use href="../img/sprite.svg#icon-youtube"></use>
          </svg>
        </a>`;return`
        <tr>
          <td>${t.strTrack}</td>
          <td>${M(t.intDuration)}</td>
          <td>${i}</td>
        </tr>`}).join("");return`
      <div class="artist-song-table">
        <h3 class="artist-table-header">${s.strAlbum}</h3>
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
      </div>`}).join("")}function O(e,r){const s=_(e);B(e);const o=T(e),t=q(e);r.insertAdjacentHTML("beforeend",`
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
              <p class="short-info-small-text">${s}</p>
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
        ${t}
      </div>
      
    </div>`)}const l=document.querySelector(".modal-overlay"),g=document.querySelector(".artists-modal-close-btn");document.querySelector(".modal");function m(e){e.target===l&&a()}function p(e){e.key==="Escape"&&a()}g.addEventListener("click",a);l.addEventListener("click",m);document.addEventListener("keydown",p);function a(){var e;l.classList.remove("is-open"),document.body.style.overflow="",(e=document.querySelector(".artist-info-wrapper"))==null||e.remove(),g.removeEventListener("click",a),l.removeEventListener("click",m),document.removeEventListener("keydown",p)}const n={list:document.querySelector(".js-artists-list"),loadMoreBtn:document.querySelector(".js-artists-load"),modalOverlay:document.querySelector(".modal-overlay"),modalRoot:document.querySelector(".modal"),modalOverlay:document.querySelector(".modal-overlay"),modalWindowCloseBtn:document.querySelector(".artists-modal-close-btn")};let d=1,u=!1;n.list&&n.loadMoreBtn&&j();function j(){n.list.innerHTML="",n.loadMoreBtn.hidden=!1,n.loadMoreBtn.addEventListener("click",x),n.list.addEventListener("click",R),y(!0)}async function x(){u||(d+=1,await y(!1))}async function y(e){u=!0,n.loadMoreBtn.textContent="Loading...",e&&(d=1);const s=(await E(d)).artists;e&&(n.list.innerHTML=""),n.list.insertAdjacentHTML("beforeend",s.map(C).join("")),s.length<8&&(n.loadMoreBtn.hidden=!0),n.loadMoreBtn.innerHTML=`
    Load More
    <svg class="artists__load-icon" width="20" height="20" aria-hidden="true">
      <use href="../img/sprite.svg#icon-down-arrow-alt"></use>
    </svg>
  `,u=!1}function C(e){var h;const r=e._id,s=e.strArtist,o=e.strBiographyEN||"",t=o.length>120?`${o.slice(0,120)}...`:o,i=((h=e.genres)==null?void 0:h.slice(0,4))||[];return`
    <li class="artist-card">
      <div class="artist-card__image">
        <img src="${e.strArtistThumb||""}" alt="${s}" loading="lazy" />
      </div>

      <div class="artist-card__content">
        <ul class="artist-card__tags">
          ${i.map(b=>`<li class="artist-card__tag">${b}</li>`).join("")}
        </ul>

        <h3 class="artist-card__name">${s}</h3>
        <p class="artist-card__desc">${t}</p>

        <button
          class="artist-card__more js-artist-more"
          type="button"
          data-artist-id="${r}"
        >
          Learn More
          <svg class="artist-card__icon" width="16" height="16" aria-hidden="true">
            <use href="../img/sprite.svg#icon-caret-right"></use>
          </svg>
        </button>
      </div>
    </li>
  `}async function R(e){const r=e.target.closest(".js-artist-more");if(!r)return;const s=r.dataset.artistId;s&&I(s)}async function I(e){var o;n.modalOverlay.classList.add("is-open"),document.body.style.overflow="hidden",(o=document.querySelector(".artist-info-wrapper"))==null||o.remove(),n.modalWindowCloseBtn.addEventListener("click",a),n.modalOverlay.addEventListener("click",m),document.addEventListener("keydown",p);const s=await(await fetch(`https://sound-wave.b.goit.study/api/artists/${e}/albums`,{headers:{Accept:"application/json"}})).json();O(s,n.modalRoot)}const F={feedbacksList:document.querySelector(".swiper-wrapper")};function N(e){const r=e.map(({_id:s,name:o,rating:t,descr:i})=>`
        <div class="swiper-slide">
          <div class="feedback-block">
            <div data-raty class="feedback-rating" data-id=${s} data-score=${t}></div>
            <p class="feedback-descr">${i}</p>
            <p class="feedback-name">${o}</p>
          </div>
        </div>`).join("");F.feedbacksList.insertAdjacentHTML("beforeend",r)}function P(){const e={starOn:"./img/feedback-img/star-on.png",starOff:"./img/feedback-img/star-off.png",space:!1,readOnly:!0,halfShow:!1};Array.from(document.querySelectorAll("[data-raty]")).map(s=>{const o=Number(s.dataset.score);new L(s,{...e,score:o}).init()})}function H(){new w(".swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"},scrollbar:{el:".swiper-scrollbar"}})}D();async function D(){try{const r=(await A()).data;N(r)}catch(e){console.log("Error create feedbacks list",e);return}P(),H()}function Y(){const e=document.querySelector(".nav-button"),r=document.querySelector(".modal-close-button"),s=document.querySelector(".modal-menu");document.querySelectorAll(".modal-nav-link").forEach(t=>{t.addEventListener("click",()=>{s.classList.remove("modal-open")})}),e.addEventListener("click",()=>{s.classList.add("modal-open")}),r.addEventListener("click",()=>{s.classList.remove("modal-open")})}Y();const{height:G}=document.querySelector(".header").getBoundingClientRect();document.body.style.paddingTop=`${G}px`;
//# sourceMappingURL=index.js.map
