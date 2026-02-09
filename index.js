import{a as A,R as k,S as B,i as c}from"./assets/vendor-IF1acRtE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const M=10,T=8,R="https://sound-wave.b.goit.study/api",h={GENRES:"/genres",ARTISTS:"/artists",ARTIST_BY_ID:"/artists/",FEEDBACKS:"/feedbacks"};A.defaults.baseURL=R;async function $(){const{data:e}=await A.get(`${h.FEEDBACKS}?limit=${M}&page=1`);return e}async function C(e){const{data:t}=await A.get(`${h.ARTISTS}?limit=${T}&page=${e}`);return t}function O(e){const t=Math.floor(e/6e4),s=Math.floor(e%6e4/1e3);return`${t}:${s.toString().padStart(2,"0")}`}function N(e){return e.intDiedYear===null?`${e.intFormedYear} - present`:`${e.intFormedYear} - ${e.intDiedYear}`}function j(e){return e.strBiographyEN.split(".").slice(0,2).join(".")+"."}function Q(e){return e.genres.map(t=>`
    <li>
      <button class="artist-short-info-genre-btn">${t}</button>
    </li>`).join("")}function Y(e){return e.albumsList.map(s=>{const i=s.tracks.map(r=>{const a=r.movie===null?"":`
        <a href="${r.movie}" target="_blank" rel="noopener noreferrer">
          <svg class='artist-modal-youtube-icon' width="24" height="24">
            <use href="/img/sprite.svg#icon-youtube"></use>
          </svg>
        </a>`;return`
        <tr>
          <td>${r.strTrack}</td>
          <td>${O(r.intDuration)}</td>
          <td>${a}</td>
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
      </div>`}).join("")}function I(e,t){const s=N(e);j(e);const i=Q(e),r=Y(e);t.insertAdjacentHTML("beforeend",`
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
            <ul class="artist-short-info-genres-list">${i}</ul>
          </div>
        </div>
      </div>
      <div class="artist-albums-wrapper">
        <h2 class="artist-albums-header">Albums</h2>
        ${r}
      </div>
      
    </div>`)}const n=document.querySelector(".modal-overlay"),g=document.querySelector(".artists-modal-close-btn");document.querySelector(".modal");function v(e){e.target===n&&l()}function y(e){e.key==="Escape"&&l()}function b(e){n.contains(e.relatedTarget)||l()}function q(){g.addEventListener("click",l),n.addEventListener("click",v),document.addEventListener("keydown",y),n.addEventListener("blur",b)}function l(){var e;n.classList.remove("is-open"),document.body.style.overflow="",(e=document.querySelector(".artist-info-wrapper"))==null||e.remove(),g.removeEventListener("click",l),n.removeEventListener("click",v),document.removeEventListener("keydown",y),n.removeEventListener("blur",b)}function x(e){const t=document.createElement("div");t.classList.add("loader");const s=document.createElement("div");return s.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
`,s.appendChild(t),(e.style.position===""||e.style.position==="static")&&(e.style.position="relative"),e.appendChild(s),s}function D(e){const t=document.querySelector(e);return x(t)}function S(e){e&&(e.style.display="flex")}function L(e){e&&(e.style.display="none")}const o={list:document.querySelector(".js-artists-list"),loadMoreBtn:document.querySelector(".js-artists-load"),modalOverlay:document.querySelector(".modal-overlay"),modalRoot:document.querySelector(".modal")},f=D("body");let m=1,u=!1;o.list&&o.loadMoreBtn&&U();function U(){o.list.innerHTML="",o.loadMoreBtn.hidden=!1,o.loadMoreBtn.disabled=!1,o.loadMoreBtn.addEventListener("click",F),o.list.addEventListener("click",K),w(!0)}async function F(){u||(m+=1,await w(!1))}async function w(e){if(!u){u=!0,e&&(m=1),o.loadMoreBtn.disabled=!0,o.loadMoreBtn.setAttribute("aria-busy","true"),S(f);try{const t=await C(m),s=(t==null?void 0:t.artists)??[];e&&(o.list.innerHTML=""),o.list.insertAdjacentHTML("beforeend",s.map(P).join("")),s.length<8?o.loadMoreBtn.hidden=!0:o.loadMoreBtn.hidden=!1}catch(t){console.log(t)}finally{L(f),o.loadMoreBtn.disabled=!1,o.loadMoreBtn.removeAttribute("aria-busy"),u=!1}}}function P(e){var p;const t=e._id,s=e.strArtist,i=e.strBiographyEN||"",r=i.length>120?`${i.slice(0,120)}...`:i,a=((p=e.genres)==null?void 0:p.slice(0,4))||[];return`
    <li class="artist-card">
      <div class="artist-card-image">
        <img src="${e.strArtistThumb||""}" alt="${s}" loading="lazy" />
      </div>

      <div class="artist-card-content">
        <ul class="artist-card-tags">
          ${a.map(E=>`<li class="artist-card-tag">${E}</li>`).join("")}
        </ul>

        <div class="artist-desc">
          <h3 class="artist-card-name">${s}</h3>
          <p class="artist-card-text">${r}</p>
        </div>

        <button
          class="artist-card-load-more js-artist-load-more"
          type="button"
          data-artist-id="${t}"
        >
          Learn More
          <svg class="artist-card-icon" width="24" height="24" aria-hidden="true">
            <use href="/img/sprite.svg#icon-caret-right"></use>
          </svg>
        </button>
      </div>
    </li>
  `}async function K(e){const t=e.target.closest(".js-artist-load-more");if(!t)return;const s=t.dataset.artistId;s&&G(s)}async function G(e){var t;if(!(!o.modalOverlay||!o.modalRoot)){S(f),o.modalOverlay.classList.add("is-open"),o.modalOverlay.focus(),document.body.style.overflow="hidden",(t=document.querySelector(".artist-info-wrapper"))==null||t.remove(),q();try{const i=await(await fetch(`https://sound-wave.b.goit.study/api/artists/${e}/albums`,{headers:{Accept:"application/json"}})).json();I(i,o.modalRoot)}catch(s){console.log(s)}finally{L(f)}}}const X={feedbacksList:document.querySelector(".swiper-wrapper")};function H(e){const t=e.map(({_id:s,name:i,rating:r,descr:a})=>`
        <div class="swiper-slide">
          <div class="feedback-block">
            <div data-raty class="feedback-rating" data-id=${s} data-score=${r}></div>
            <p class="feedback-descr">"${a}"</p>
            <p class="feedback-name">${i}</p>
          </div>
        </div>`).join("");X.feedbacksList.insertAdjacentHTML("beforeend",t)}const J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFuSURBVHgBpVTRTcNADH12K747QjoB7QS9TgBsUCZoKwT9LHyifCTdgA0YgWMDmICwQb6RiPG1oUlISK6tpdOdzr7nZz/rAA+7m24+3PKJ5U4wE13qFrh1YyJzMiARz4tgXnfGtzlXJgqEuFKqSDYO7fINRzHk3rrOgC9wDMOc3Qt2/SsYAikry0e7TBoBb000Y/QmeXigKYL8YYB2JokDJ0EqTCllukNsX5se6WGAA+03obgaRXY7MGNt8lIPKU639Fsw2+Jq2SNl+oyOMlssUWJXTv29KAsV4axBBB+wL8mmcS7SfmzchTrG2hvrCeT6aN2buKR4ZQ7VoaplG3gaC2L3pnJXD6MJvBmKqSWpwRGN4A1Yj+V6EEzD2xQNo0UEo2IO/gVcNX1PIrE2frgVTOTpr7sHVFj2q+x4UuCIBfF9aOevJZbXyuihPF76pZ2jNBn9ar7sXQvRIaU4tItGtfMRGbo/gEDzDPJZ9v8ADQiZclEuBD0AAAAASUVORK5CYII=",z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFFSURBVHgBrZSNbYQwDIXdThA2YAQ2aDYgG/Q2gA1gA9gAMQFs0BE6AmwQNkj9wD6dWi7Qu/ukJ0UQO45/QnSOSfQSnLU2QLy29AK+uq4LENb0JCkTgPc+GGPgNIsZvB84rPiq64KdUVEUWOb0aHSsiQkKouRvXv7d5cLqRMjRWlFcr23b8Ju6ruE0yL5vsRnE/vMNJ1ZVZThXpFrDS6NB0DzPtCzLVeM4Ut/3W4RJkvhhGMKjwBY+EKEeiMpNHGn4L7CR62e7RSjL8rQzrro6S++lxiDJZyJtmkYb3dAB66gdkec5HP7pyb3G/mDoiCxbU2bPOMx0OhRtjVtkT3QMleu1MBmSeLSER8F0cmRqoGgOreYPr4s8Bo0YpawOjwX+gTNPWuWcC5xDreBeMlPWhKJgL6+LmENHW19FNwkX2mbZ3X78AZ/Wm+XSeLl+AAAAAElFTkSuQmCC";function V(){const e={starOn:J,starOff:z,space:!1,readOnly:!0,halfShow:!1};Array.from(document.querySelectorAll("[data-raty]")).map(s=>{const i=Number(s.dataset.score);new k(s,{...e,score:i}).init()})}function W(){new B(".swiper",{direction:"horizontal",loop:!1,autoHeight:!1,effect:"slide",pagination:{el:".swiper-pagination",type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,enabled:!1},breakpoints:{768:{navigation:{enabled:!0}}}})}function Z(e,t="success"){const s={message:e,position:"topRight",timeout:5e3};switch(t){case"success":c.success(s);break;case"error":c.error(s);break;case"warning":c.warning(s);break;case"info":c.info(s);break;default:c.error({message:`Invalid type of toast: ${t}`,position:"topRight",timeout:5e3});break}}_();async function _(){try{const t=(await $()).data;H(t)}catch{Z("Error create feedbacks list","error");return}V(),W()}function ee(){const e=document.querySelector(".nav-button"),t=document.querySelector(".modal-close-button"),s=document.querySelector(".modal-menu");document.querySelectorAll(".modal-nav-link").forEach(r=>{r.addEventListener("click",()=>{s.classList.remove("modal-open")})}),e.addEventListener("click",()=>{s.classList.add("modal-open")}),t.addEventListener("click",()=>{s.classList.remove("modal-open")})}ee();const{height:te}=document.querySelector(".header").getBoundingClientRect();document.body.style.paddingTop=`${te}px`;
//# sourceMappingURL=index.js.map
