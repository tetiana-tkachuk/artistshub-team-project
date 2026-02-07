import{a as c}from"./assets/vendor-CLb_lYsF.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function d(t){const s=Math.floor(t/6e4),o=Math.floor(t%6e4/1e3);return`${s}:${o.toString().padStart(2,"0")}`}function u(t){return t.intDiedYear===null?`${t.intFormedYear} - present`:`${t.intFormedYear} - ${t.intDiedYear}`}function h(t){return t.strBiographyEN.split(".").slice(0,2).join(".")+"."}function m(t){return t.genres.map(s=>`
    <li>
      <button class="artist-short-info-genre-btn">${s}</button>
    </li>`).join("")}function f(t){return t.albumsList.map(o=>{const i=o.tracks.map(e=>{const r=e.movie===null?"":`
        <a href="${e.movie}" target="_blank" rel="noopener noreferrer">
          <svg width="24" height="24" fill="#ffffff">
            <use href="../img/sprite.svg#icon-youtube"></use>
          </svg>
        </a>`;return`
        <tr>
          <td>${e.strTrack}</td>
          <td>${d(e.intDuration)}</td>
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
      </div>`}).join("")}function p(t,s){const o=u(t),i=h(t),e=m(t),r=f(t);s.insertAdjacentHTML("beforeend",`
    <div class="artist-info-wrapper">
      <h1 class="artist-name-title">${t.strArtist}</h1>
      <div class="artist-info">
        <img class="artist-img" src="${t.strArtistThumb}" alt="${t.strArtist} artist photo">
        <div class="artist-short-info">
          <div class="artist-short-info-grid-wrapper">
            <div class="artist-short-info-years">
              <h3 class="short-info-small-header">Years active</h3>
              <p class="short-info-small-text">${o}</p>
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
            <ul class="artist-short-info-genres-list">${e}</ul>
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
        <p class="modal-bio-text">${t.strBiographyEN}</p>
      </div>
    </div>`)}const v="65ada227af9f6d155db46908",b=document.querySelector(".tmp-open-btn"),n=document.querySelector(".modal-overlay"),y=document.querySelector(".artists-modal-close-btn"),g=document.querySelector(".modal");async function $(){n.classList.add("is-open"),document.body.style.overflow="hidden";const t=document.querySelector(".artist-info-wrapper");t&&t.remove();try{const{data:s}=await c.get(`https://sound-wave.b.goit.study/api/artists/${v}/albums`);p(s,g),L()}catch(s){console.error("Request failed:",s)}}function a(){var t;n.classList.remove("is-open"),document.body.style.overflow="",(t=document.querySelector(".artist-info-wrapper"))==null||t.remove()}function L(){const t=document.querySelector(".more-bio-btn"),s=document.querySelector(".modal-bio"),o=document.querySelector(".artists-modal-bio-close-btn");t.addEventListener("click",()=>s.classList.add("is-open")),o.addEventListener("click",()=>s.classList.remove("is-open"))}b.addEventListener("click",$);y.addEventListener("click",a);n.addEventListener("click",t=>{t.target===n&&a()});document.addEventListener("keydown",t=>{t.key==="Escape"&&a()});handleOpenModal();
//# sourceMappingURL=index.js.map
