import{a as l,R as g,S as y}from"./assets/vendor-Byf7b3WI.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const L=10,w=8,S="https://sound-wave.b.goit.study/api",p={GENRES:"/genres",ARTISTS:"/artists",ARTIST_BY_ID:"/artists/",FEEDBACKS:"/feedbacks"};l.defaults.baseURL=S;async function $(){const{data:t}=await l.get(`${p.FEEDBACKS}?limit=${L}&page=1`);return t}async function A(t){const{data:e}=await l.get(`${p.ARTISTS}?limit=${w}&page=${t}`);return e}function k(t){const e=Math.floor(t/6e4),s=Math.floor(t%6e4/1e3);return`${e}:${s.toString().padStart(2,"0")}`}function E(t){return t.intDiedYear===null?`${t.intFormedYear} - present`:`${t.intFormedYear} - ${t.intDiedYear}`}function M(t){return t.strBiographyEN.split(".").slice(0,2).join(".")+"."}function _(t){return t.genres.map(e=>`
    <li>
      <button class="artist-short-info-genre-btn">${e}</button>
    </li>`).join("")}function B(t){return t.albumsList.map(s=>{const i=s.tracks.map(r=>{const o=r.movie===null?"":`
        <a href="${r.movie}" target="_blank" rel="noopener noreferrer">
          <svg width="24" height="24" fill="#ffffff">
            <use href="../img/sprite.svg#icon-youtube"></use>
          </svg>
        </a>`;return`
        <tr>
          <td>${r.strTrack}</td>
          <td>${k(r.intDuration)}</td>
          <td>${o}</td>
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
          <tbody>${i}</tbody>
        </table>
      </div>`}).join("")}function h(t,e){const s=E(t),i=M(t),r=_(t),o=B(t);e.insertAdjacentHTML("beforeend",`
    <div class="artist-info-wrapper">
      <h1 class="artist-name-title">${t.strArtist}</h1>
      <div class="artist-info">
        <img class="artist-img" src="${t.strArtistThumb}" alt="${t.strArtist} artist photo">
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
            <p class="short-info-small-text">${i}</p>
          </div>
          <div class="more-bio">
            <button class="more-bio-btn">+</button>
          </div>
          <div class="artist-short-info-genres">
            <ul class="artist-short-info-genres-list">${r}</ul>
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
    </div>`)}const a={list:document.querySelector(".js-artists-list"),loadMoreBtn:document.querySelector(".js-artists-load"),modalOverlay:document.querySelector(".modal-overlay"),modalRoot:document.querySelector(".modal")};let d=1,u=!1;a.list&&a.loadMoreBtn&&q();function q(){a.list.innerHTML="",a.loadMoreBtn.hidden=!1,a.loadMoreBtn.addEventListener("click",T),a.list.addEventListener("click",x),b(!0)}async function T(){u||(d+=1,await b(!1))}async function b(t){u=!0,a.loadMoreBtn.textContent="Loading...",t&&(d=1);const s=(await A(d)).artists;t&&(a.list.innerHTML=""),a.list.insertAdjacentHTML("beforeend",s.map(j).join("")),s.length<8&&(a.loadMoreBtn.hidden=!0),a.loadMoreBtn.innerHTML=`
    Load More
    <svg class="artists__load-icon" width="20" height="20" aria-hidden="true">
      <use href="../img/sprite.svg#icon-down-arrow-alt"></use>
    </svg>
  `,u=!1}function j(t){var f;const e=t._id,s=t.strArtist,i=t.strBiographyEN||"",r=i.length>120?`${i.slice(0,120)}...`:i,o=((f=t.genres)==null?void 0:f.slice(0,4))||[];return`
    <li class="artist-card">
      <div class="artist-card__image">
        <img src="${t.strArtistThumb||""}" alt="${s}" loading="lazy" />
      </div>

      <div class="artist-card__content">
        <ul class="artist-card__tags">
          ${o.map(v=>`<li class="artist-card__tag">${v}</li>`).join("")}
        </ul>

        <h3 class="artist-card__name">${s}</h3>
        <p class="artist-card__desc">${r}</p>

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
  `}async function x(t){const e=t.target.closest(".js-artist-more");if(!e)return;const s=e.dataset.artistId;s&&O(s)}async function O(t){var i;a.modalOverlay.classList.add("is-open"),document.body.style.overflow="hidden",(i=document.querySelector(".artist-info-wrapper"))==null||i.remove();const s=await(await fetch(`https://sound-wave.b.goit.study/api/artists/${t}/albums`,{headers:{Accept:"application/json"}})).json();h(s,a.modalRoot)}const R="65ada227af9f6d155db46908",C=document.querySelector(".tmp-open-btn"),c=document.querySelector(".modal-overlay"),I=document.querySelector(".artists-modal-close-btn"),P=document.querySelector(".modal");async function F(){c.classList.add("is-open"),document.body.style.overflow="hidden";const t=document.querySelector(".artist-info-wrapper");t&&t.remove();try{const{data:e}=await l.get(`https://sound-wave.b.goit.study/api/artists/${R}/albums`);h(e,P),N()}catch(e){console.error("Request failed:",e)}}function m(){var t;c.classList.remove("is-open"),document.body.style.overflow="",(t=document.querySelector(".artist-info-wrapper"))==null||t.remove()}function N(){const t=document.querySelector(".more-bio-btn"),e=document.querySelector(".modal-bio"),s=document.querySelector(".artists-modal-bio-close-btn");t.addEventListener("click",()=>e.classList.add("is-open")),s.addEventListener("click",()=>e.classList.remove("is-open"))}C.addEventListener("click",F);I.addEventListener("click",m);c.addEventListener("click",t=>{t.target===c&&m()});document.addEventListener("keydown",t=>{t.key==="Escape"&&m()});const D={feedbacksList:document.querySelector(".swiper-wrapper")};function H(t){const e=t.map(({_id:s,name:i,rating:r,descr:o})=>`
        <div class="swiper-slide">
          <div class="feedback-block">
            <div data-raty class="feedback-rating" data-id=${s} data-score=${r}></div>
            <p class="feedback-descr">${o}</p>
            <p class="feedback-name">${i}</p>
          </div>
        </div>`).join("");D.feedbacksList.insertAdjacentHTML("beforeend",e)}function Y(){const t={starOn:"./img/feedback-img/star-on.png",starOff:"./img/feedback-img/star-off.png",space:!1,readOnly:!0,halfShow:!1};Array.from(document.querySelectorAll("[data-raty]")).map(s=>{const i=Number(s.dataset.score);new g(s,{...t,score:i}).init()})}function G(){new y(".swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"},scrollbar:{el:".swiper-scrollbar"}})}K();async function K(){try{const e=(await $()).data;H(e)}catch(t){console.log("Error create feedbacks list",t);return}Y(),G()}function z(){const t=document.querySelector(".nav-button"),e=document.querySelector(".modal-close-button"),s=document.querySelector(".modal-menu");document.querySelectorAll(".modal-nav-link").forEach(r=>{r.addEventListener("click",()=>{s.classList.remove("modal-open")})}),t.addEventListener("click",()=>{s.classList.add("modal-open")}),e.addEventListener("click",()=>{s.classList.remove("modal-open")})}z();const{height:U}=document.querySelector(".header").getBoundingClientRect();document.body.style.paddingTop=`${U}px`;
//# sourceMappingURL=index.js.map
