import{a as l,R as v,S as y}from"./assets/vendor-Byf7b3WI.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const w=10,$=8,S="https://sound-wave.b.goit.study/api",p={GENRES:"/genres",ARTISTS:"/artists",ARTIST_BY_ID:"/artists/",FEEDBACKS:"/feedbacks"};l.defaults.baseURL=S;async function L(){const{data:t}=await l.get(`${p.FEEDBACKS}?limit=${w}&page=1`);return t}async function A(t){const{data:e}=await l.get(`${p.ARTISTS}?limit=${$}&page=${t}`);return e}function k(t){const e=Math.floor(t/6e4),r=Math.floor(t%6e4/1e3);return`${e}:${r.toString().padStart(2,"0")}`}function E(t){return t.intDiedYear===null?`${t.intFormedYear} - present`:`${t.intFormedYear} - ${t.intDiedYear}`}function M(t){return t.strBiographyEN.split(".").slice(0,2).join(".")+"."}function _(t){return t.genres.map(e=>`
    <li>
      <button class="artist-short-info-genre-btn">${e}</button>
    </li>`).join("")}function B(t){return t.albumsList.map(r=>{const i=r.tracks.map(s=>{const o=s.movie===null?"":`
        <a href="${s.movie}" target="_blank" rel="noopener noreferrer">
          <svg width="24" height="24" fill="#ffffff">
            <use href="../img/sprite.svg#icon-youtube"></use>
          </svg>
        </a>`;return`
        <tr>
          <td>${s.strTrack}</td>
          <td>${k(s.intDuration)}</td>
          <td>${o}</td>
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
          <tbody>${i}</tbody>
        </table>
      </div>`}).join("")}function h(t,e){const r=E(t),i=M(t),s=_(t),o=B(t);e.insertAdjacentHTML("beforeend",`
    <div class="artist-info-wrapper">
      <h1 class="artist-name-title">${t.strArtist}</h1>
      <div class="artist-info">
        <img class="artist-img" src="${t.strArtistThumb}" alt="${t.strArtist} artist photo">
        <div class="artist-short-info">
          <div class="artist-short-info-grid-wrapper">
            <div class="artist-short-info-years">
              <h3 class="short-info-small-header">Years active</h3>
              <p class="short-info-small-text">${r}</p>
            </div>
            <div class="artist-short-info-sex">
              <h3 class="short-info-small-header">Sex</h3>
              <p class="short-info-small-text">${t.strGender}</p>
            </div>
            <div class="artist-short-info-members">
              <h3 class="short-info-small-header">Members</h3>
              <p class="short-info-small-text">${t.intMembers}</p>
            </div>
            <div class="artist-short-info-country">
              <h3 class="short-info-small-header">Country</h3>
              <p class="short-info-small-text">${t.strCountry}</p>
            </div>
          </div>
          <div class="artist-bio">
            <h3 class="short-info-small-header">Biography</h3>
            <p class="short-info-small-text">${i}</p>
          </div>
          <div class="more-bio">
            <button class="more-bio-btn">+</button>
          </div>
          <div class="artist-short-info-genres">
            <ul class="artist-short-info-genres-list">${s}</ul>
          </div>
        </div>
      </div>
      <div class="artist-albums-wrapper">
        <h2 class="artist-albums-header">Albums</h2>
        ${o}
      </div>
      <div class="modal-bio">
        <button class="artists-modal-bio-close-btn">
          <svg class="artists-modal-bio-close-icon" width="14" height="14">
            <use href="../img/sprite.svg#icon-close"></use>
          </svg>
        </button>
        <p class="modal-bio-text">${t.strBiographyEN}</p>
      </div>
    </div>`)}const a={list:document.querySelector(".js-artists-list"),loadMoreBtn:document.querySelector(".js-artists-load"),modalOverlay:document.querySelector(".modal-overlay"),modalRoot:document.querySelector(".modal")};let d=1,u=!1;a.list&&a.loadMoreBtn&&T();function T(){a.list.innerHTML="",a.loadMoreBtn.hidden=!1,a.loadMoreBtn.addEventListener("click",j),a.list.addEventListener("click",O),b(!0)}async function j(){u||(d+=1,await b(!1))}async function b(t){u=!0,a.loadMoreBtn.textContent="Loading...",t&&(d=1);const r=(await A(d)).artists;t&&(a.list.innerHTML=""),a.list.insertAdjacentHTML("beforeend",r.map(q).join("")),r.length<8&&(a.loadMoreBtn.hidden=!0),a.loadMoreBtn.innerHTML=`
    Load More
    <svg class="artists__load-icon" width="20" height="20" aria-hidden="true">
      <use href="../img/sprite.svg#icon-down-arrow-alt"></use>
    </svg>
  `,u=!1}function q(t){var m;const e=t._id,r=t.strArtist,i=t.strBiographyEN||"",s=i.length>120?`${i.slice(0,120)}...`:i,o=((m=t.genres)==null?void 0:m.slice(0,4))||[];return`
    <li class="artist-card">
      <div class="artist-card__image">
        <img src="${t.strArtistThumb||""}" alt="${r}" loading="lazy" />
      </div>

      <div class="artist-card__content">
        <ul class="artist-card__tags">
          ${o.map(g=>`<li class="artist-card__tag">${g}</li>`).join("")}
        </ul>

        <h3 class="artist-card__name">${r}</h3>
        <p class="artist-card__desc">${s}</p>

        <button
          class="artist-card__more js-artist-more"
          type="button"
          data-artist-id="${e}"
        >
          Learn More
          <svg class="artist-card__icon" width="16" height="16" aria-hidden="true">
            <use href="../img/sprite.svg#icon-caret-right"></use>
          </svg>
        </button>
      </div>
    </li>
  `}async function O(t){const e=t.target.closest(".js-artist-more");if(!e)return;const r=e.dataset.artistId;r&&x(r)}async function x(t){var i;a.modalOverlay.classList.add("is-open"),document.body.style.overflow="hidden",(i=document.querySelector(".artist-info-wrapper"))==null||i.remove();const r=await(await fetch(`https://sound-wave.b.goit.study/api/artists/${t}/albums`,{headers:{Accept:"application/json"}})).json();h(r,a.modalRoot)}const R="65ada227af9f6d155db46908",I=document.querySelector(".tmp-open-btn"),c=document.querySelector(".modal-overlay"),C=document.querySelector(".artists-modal-close-btn"),P=document.querySelector(".modal");async function F(){c.classList.add("is-open"),document.body.style.overflow="hidden";const t=document.querySelector(".artist-info-wrapper");t&&t.remove();try{const{data:e}=await l.get(`https://sound-wave.b.goit.study/api/artists/${R}/albums`);h(e,P),N()}catch(e){console.error("Request failed:",e)}}function f(){var t;c.classList.remove("is-open"),document.body.style.overflow="",(t=document.querySelector(".artist-info-wrapper"))==null||t.remove()}function N(){const t=document.querySelector(".more-bio-btn"),e=document.querySelector(".modal-bio"),r=document.querySelector(".artists-modal-bio-close-btn");t.addEventListener("click",()=>e.classList.add("is-open")),r.addEventListener("click",()=>e.classList.remove("is-open"))}I.addEventListener("click",F);C.addEventListener("click",f);c.addEventListener("click",t=>{t.target===c&&f()});document.addEventListener("keydown",t=>{t.key==="Escape"&&f()});const D={feedbacksList:document.querySelector(".swiper-wrapper")};function Y(t){const e=t.map(({_id:r,name:i,rating:s,descr:o})=>`
        <div class="swiper-slide">
          <div class="feedback-block">
            <div data-raty class="feedback-rating" data-id=${r} data-score=${s}></div>
            <p class="feedback-descr">${o}</p>
            <p class="feedback-name">${i}</p>
          </div>
        </div>`).join("");D.feedbacksList.insertAdjacentHTML("beforeend",e)}function H(){const t={starOn:"./img/feedback-img/star-on.png",starOff:"./img/feedback-img/star-off.png",space:!1,readOnly:!0,halfShow:!1};Array.from(document.querySelectorAll("[data-raty]")).map(r=>{const i=Number(r.dataset.score);new v(r,{...t,score:i}).init()})}function G(){new y(".swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"},scrollbar:{el:".swiper-scrollbar"}})}K();async function K(){try{const e=(await L()).data;Y(e)}catch(t){console.log("Error create feedbacks list",t);return}H(),G()}
//# sourceMappingURL=index.js.map
