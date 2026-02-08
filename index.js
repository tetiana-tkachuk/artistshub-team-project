import{a as f,R as y,S as b}from"./assets/vendor-Byf7b3WI.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const L=10,w=8,$="https://sound-wave.b.goit.study/api",p={GENRES:"/genres",ARTISTS:"/artists",ARTIST_BY_ID:"/artists/",FEEDBACKS:"/feedbacks"};f.defaults.baseURL=$;async function S(){const{data:t}=await f.get(`${p.FEEDBACKS}?limit=${L}&page=1`);return t}async function A(t){const{data:r}=await f.get(`${p.ARTISTS}?limit=${w}&page=${t}`);return r}function k(t){const r=Math.floor(t/6e4),s=Math.floor(t%6e4/1e3);return`${r}:${s.toString().padStart(2,"0")}`}function E(t){return t.intDiedYear===null?`${t.intFormedYear} - present`:`${t.intFormedYear} - ${t.intDiedYear}`}function M(t){return t.strBiographyEN.split(".").slice(0,2).join(".")+"."}function _(t){return t.genres.map(r=>`
    <li>
      <button class="artist-short-info-genre-btn">${r}</button>
    </li>`).join("")}function T(t){return t.albumsList.map(s=>{const o=s.tracks.map(e=>{const i=e.movie===null?"":`
        <a href="${e.movie}" target="_blank" rel="noopener noreferrer">
          <svg width="24" height="24" fill="#ffffff">
            <use href="../img/sprite.svg#icon-youtube"></use>
          </svg>
        </a>`;return`
        <tr>
          <td>${e.strTrack}</td>
          <td>${k(e.intDuration)}</td>
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
      </div>`}).join("")}function B(t,r){const s=E(t);M(t);const o=_(t),e=T(t);r.insertAdjacentHTML("beforeend",`
    <div class="artist-info-wrapper">
      <h1 class="artist-name-title">${t.strArtist}</h1>
      <div class="artist-info">
        <div class = "artist-img-wrapper">
          <img class="artist-img" src="${t.strArtistThumb}" alt="${t.strArtist} artist photo">
        </div>
        <div class="artist-short-info">
          <div class="artist-short-info-grid-wrapper">
            <div class="artist-short-info-years">
              <h3 class="short-info-small-header">Years active</h3>
              <p class="short-info-small-text">${s}</p>
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
            <div class = "short-info-small-text-wrapper">
              <p class="short-info-small-text">${t.strBiographyEN}</p>
            </div>
          </div>
          
          <div class="artist-short-info-genres">
            <ul class="artist-short-info-genres-list">${o}</ul>
          </div>
        </div>
      </div>
      <div class="artist-albums-wrapper">
        <h2 class="artist-albums-header">Albums</h2>
        ${e}
      </div>
      
    </div>`)}const a={list:document.querySelector(".js-artists-list"),loadMoreBtn:document.querySelector(".js-artists-load"),modalOverlay:document.querySelector(".modal-overlay"),modalRoot:document.querySelector(".modal")};let d=1,u=!1;a.list&&a.loadMoreBtn&&j();function j(){a.list.innerHTML="",a.loadMoreBtn.hidden=!1,a.loadMoreBtn.addEventListener("click",q),a.list.addEventListener("click",O),h(!0)}async function q(){u||(d+=1,await h(!1))}async function h(t){u=!0,a.loadMoreBtn.textContent="Loading...",t&&(d=1);const s=(await A(d)).artists;t&&(a.list.innerHTML=""),a.list.insertAdjacentHTML("beforeend",s.map(x).join("")),s.length<8&&(a.loadMoreBtn.hidden=!0),a.loadMoreBtn.innerHTML=`
    Load More
    <svg class="artists__load-icon" width="20" height="20" aria-hidden="true">
      <use href="../img/sprite.svg#icon-down-arrow-alt"></use>
    </svg>
  `,u=!1}function x(t){var m;const r=t._id,s=t.strArtist,o=t.strBiographyEN||"",e=o.length>120?`${o.slice(0,120)}...`:o,i=((m=t.genres)==null?void 0:m.slice(0,4))||[];return`
    <li class="artist-card">
      <div class="artist-card__image">
        <img src="${t.strArtistThumb||""}" alt="${s}" loading="lazy" />
      </div>

      <div class="artist-card__content">
        <ul class="artist-card__tags">
          ${i.map(g=>`<li class="artist-card__tag">${g}</li>`).join("")}
        </ul>

        <h3 class="artist-card__name">${s}</h3>
        <p class="artist-card__desc">${e}</p>

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
  `}async function O(t){const r=t.target.closest(".js-artist-more");if(!r)return;const s=r.dataset.artistId;s&&R(s)}async function R(t){var o;a.modalOverlay.classList.add("is-open"),document.body.style.overflow="hidden",(o=document.querySelector(".artist-info-wrapper"))==null||o.remove();const s=await(await fetch(`https://sound-wave.b.goit.study/api/artists/${t}/albums`,{headers:{Accept:"application/json"}})).json();B(s,a.modalRoot)}const l=document.querySelector(".modal-overlay"),v=document.querySelector(".artists-modal-close-btn");document.querySelector(".modal");function n(){var t;l.classList.remove("is-open"),document.body.style.overflow="",(t=document.querySelector(".artist-info-wrapper"))==null||t.remove(),v.removeEventListener("click",n),l.removeEventListener("click",n),document.removeEventListener("keydown",n)}v.addEventListener("click",n);l.addEventListener("click",t=>{t.target===l&&n()});document.addEventListener("keydown",t=>{t.key==="Escape"&&n()});const I={feedbacksList:document.querySelector(".swiper-wrapper")};function C(t){const r=t.map(({_id:s,name:o,rating:e,descr:i})=>`
        <div class="swiper-slide">
          <div class="feedback-block">
            <div data-raty class="feedback-rating" data-id=${s} data-score=${e}></div>
            <p class="feedback-descr">${i}</p>
            <p class="feedback-name">${o}</p>
          </div>
        </div>`).join("");I.feedbacksList.insertAdjacentHTML("beforeend",r)}function F(){const t={starOn:"./img/feedback-img/star-on.png",starOff:"./img/feedback-img/star-off.png",space:!1,readOnly:!0,halfShow:!1};Array.from(document.querySelectorAll("[data-raty]")).map(s=>{const o=Number(s.dataset.score);new y(s,{...t,score:o}).init()})}function N(){new b(".swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"},scrollbar:{el:".swiper-scrollbar"}})}P();async function P(){try{const r=(await S()).data;C(r)}catch(t){console.log("Error create feedbacks list",t);return}F(),N()}function H(){const t=document.querySelector(".nav-button"),r=document.querySelector(".modal-close-button"),s=document.querySelector(".modal-menu");document.querySelectorAll(".modal-nav-link").forEach(e=>{e.addEventListener("click",()=>{s.classList.remove("modal-open")})}),t.addEventListener("click",()=>{s.classList.add("modal-open")}),r.addEventListener("click",()=>{s.classList.remove("modal-open")})}H();const{height:D}=document.querySelector(".header").getBoundingClientRect();document.body.style.paddingTop=`${D}px`;
//# sourceMappingURL=index.js.map
