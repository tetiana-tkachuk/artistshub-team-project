import{a as c,R as u,S as f}from"./assets/vendor-CWoPGbCt.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const p=10,m="https://sound-wave.b.goit.study/api",h={GENRES:"/genres",ARTISTS:"/artists",ARTIST_BY_ID:"/artists/",FEEDBACKS:"/feedbacks"};c.defaults.baseURL=m;async function b(){const{data:e}=await c.get(`${h.FEEDBACKS}?limit=${p}&page=1`);return e}const v={feedbacksList:document.querySelector(".swiper-wrapper")};function d(e){const s=e.map(({_id:o,name:i,rating:t,descr:r})=>`
        <div class="swiper-slide">
          <div class="feedback-block">
            <div data-raty class="feedback-rating" data-id=${o} data-score=${t}></div>
            <p class="feedback-descr">${r}</p>
            <p class="feedback-name">${i}</p>
          </div>
        </div>`).join("");v.feedbacksList.insertAdjacentHTML("beforeend",s)}async function y(){const s=(await b()).data;d(s)}y();d(feedbacksArray);const g={starOn:"./img/feedback-img/star-on.png",starOff:"./img/feedback-img/star-off.png",space:!1,readOnly:!0,halfShow:!1},w=Array.from(document.querySelectorAll("[data-raty]"));w.map(e=>{const s=Number(e.dataset.score);new u(e,{...g,score:s}).init()});new f(".swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"},scrollbar:{el:".swiper-scrollbar"}});function $(e){const s=Math.floor(e/6e4),o=Math.floor(e%6e4/1e3);return`${s}:${o.toString().padStart(2,"0")}`}function S(e){return e.intDiedYear===null?`${e.intFormedYear} - present`:`${e.intFormedYear} - ${e.intDiedYear}`}function L(e){return e.strBiographyEN.split(".").slice(0,2).join(".")+"."}function k(e){return e.genres.map(s=>`
    <li>
      <button class="artist-short-info-genre-btn">${s}</button>
    </li>`).join("")}function E(e){return e.albumsList.map(o=>{const i=o.tracks.map(t=>{const r=t.movie===null?"":`
        <a href="${t.movie}" target="_blank" rel="noopener noreferrer">
          <svg width="24" height="24" fill="#ffffff">
            <use href="../img/sprite.svg#icon-youtube"></use>
          </svg>
        </a>`;return`
        <tr>
          <td>${t.strTrack}</td>
          <td>${$(t.intDuration)}</td>
          <td>${r}</td>
        </tr>`}).join("");return`
      <div class="artist-song-table">
        <h3 class="artist-table-header">${o.strAlbum}</h3>
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
      </div>`}).join("")}function A(e,s){const o=S(e),i=L(e),t=k(e),r=E(e);s.insertAdjacentHTML("beforeend",`
    <div class="artist-info-wrapper">
      <h1 class="artist-name-title">${e.strArtist}</h1>
      <div class="artist-info">
        <img class="artist-img" src="${e.strArtistThumb}" alt="${e.strArtist} artist photo">
        <div class="artist-short-info">
          <div class="artist-short-info-grid-wrapper">
            <div class="artist-short-info-years">
              <h3 class="short-info-small-header">Years active</h3>
              <p class="short-info-small-text">${o}</p>
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
            <p class="short-info-small-text">${i}</p>
          </div>
          <div class="more-bio">
            <button class="more-bio-btn">+</button>
          </div>
          <div class="artist-short-info-genres">
            <ul class="artist-short-info-genres-list">${t}</ul>
          </div>
        </div>
      </div>
      <div class="artist-albums-wrapper">
        <h2 class="artist-albums-header">Albums</h2>
        ${r}
      </div>
      <div class="modal-bio">
        <button class="artists-modal-bio-close-btn">
          <svg class="artists-modal-bio-close-icon" width="14" height="14">
            <use href="../img/sprite.svg#icon-close"></use>
          </svg>
        </button>
        <p class="modal-bio-text">${e.strBiographyEN}</p>
      </div>
    </div>`)}const B="65ada227af9f6d155db46908",M=document.querySelector(".tmp-open-btn"),n=document.querySelector(".modal-overlay"),O=document.querySelector(".artists-modal-close-btn"),x=document.querySelector(".modal");async function q(){n.classList.add("is-open"),document.body.style.overflow="hidden";const e=document.querySelector(".artist-info-wrapper");e&&e.remove();try{const{data:s}=await c.get(`https://sound-wave.b.goit.study/api/artists/${B}/albums`);A(s,x),T()}catch(s){console.error("Request failed:",s)}}function l(){var e;n.classList.remove("is-open"),document.body.style.overflow="",(e=document.querySelector(".artist-info-wrapper"))==null||e.remove()}function T(){const e=document.querySelector(".more-bio-btn"),s=document.querySelector(".modal-bio"),o=document.querySelector(".artists-modal-bio-close-btn");e.addEventListener("click",()=>s.classList.add("is-open")),o.addEventListener("click",()=>s.classList.remove("is-open"))}M.addEventListener("click",q);O.addEventListener("click",l);n.addEventListener("click",e=>{e.target===n&&l()});document.addEventListener("keydown",e=>{e.key==="Escape"&&l()});handleOpenModal();
//# sourceMappingURL=index.js.map
