import{a as y,i as d,R as C,S as N}from"./assets/vendor-CJJRgr2I.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const O=10,g=8,I="https://sound-wave.b.goit.study/api",w={GENRES:"/genres",ARTISTS:"/artists",ARTIST_BY_ID:"/artists/",FEEDBACKS:"/feedbacks"};y.defaults.baseURL=I;async function x(){const{data:e}=await y.get(`${w.FEEDBACKS}?limit=${O}&page=1`);return e}async function j(e){const{data:s}=await y.get(`${w.ARTISTS}?limit=${g}&page=${e}`);return s}const L="/artistshub-team-project/assets/sprite-Bwwhuc7H.svg";function q(e){const s=Math.floor(e/6e4),t=Math.floor(e%6e4/1e3);return`${s}:${t.toString().padStart(2,"0")}`}function P(e){return e.intDiedYear===null?`${e.intFormedYear} - present`:`${e.intFormedYear} - ${e.intDiedYear}`}function Q(e){return e.strBiographyEN.split(".").slice(0,2).join(".")+"."}function Y(e){return e.genres.map(s=>`
    <li>
      <button class="artist-short-info-genre-btn">${s}</button>
    </li>`).join("")}function D(e){return e.albumsList.map(t=>{const o=t.tracks.map(r=>{const i=r.movie===null?"":`
        <a href="${r.movie}" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <svg class='artist-modal-youtube-icon' width="24" height="24">
            <use href="${L}#icon-youtube"></use>
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
      </div>`}).join("")}function U(e,s){const t=P(e);Q(e);const o=Y(e),r=D(e);s.insertAdjacentHTML("beforeend",`
    <div class="artist-info-wrapper">
      <h2 class="artist-name-title">${e.strArtist}</h2>
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
      
    </div>`)}const l=document.querySelector(".modal-overlay"),S=document.querySelector(".artists-modal-close-btn");document.querySelector(".modal");function E(e){e.target===l&&u()}function B(e){e.key==="Escape"&&u()}function M(e){l.contains(e.relatedTarget)||u()}function F(){S.addEventListener("click",u),l.addEventListener("click",E),document.addEventListener("keydown",B),l.addEventListener("blur",M)}function u(){var e;l.classList.remove("is-open"),document.body.style.overflow="",(e=document.querySelector(".artist-info-wrapper"))==null||e.remove(),S.removeEventListener("click",u),l.removeEventListener("click",E),document.removeEventListener("keydown",B),l.removeEventListener("blur",M)}function K(e){const s=document.createElement("div");s.classList.add("loader");const t=document.createElement("div");return t.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
`,t.appendChild(s),(e.style.position===""||e.style.position==="static")&&(e.style.position="relative"),e.appendChild(t),t}function G(e){const s=document.querySelector(e);return K(s)}function k(e){e&&(e.style.display="flex")}function T(e){e&&(e.style.display="none")}function v(e,s="success"){const t={message:e,position:"topRight",timeout:5e3};switch(s){case"success":d.success(t);break;case"error":d.error(t);break;case"warning":d.warning(t);break;case"info":d.info(t);break;default:d.error({message:`Invalid type of toast: ${s}`,position:"topRight",timeout:5e3});break}}const n={list:document.querySelector(".js-artists-list"),loadMoreBtn:document.querySelector(".js-artists-load"),modalOverlay:document.querySelector(".modal-overlay"),modalRoot:document.querySelector(".modal")},A=G("body");let m=1,p=!1,b=!1;n.list&&n.loadMoreBtn&&X();function X(){n.list.innerHTML="",n.loadMoreBtn.hidden=!0,n.loadMoreBtn.disabled=!1,b=!1,n.loadMoreBtn.addEventListener("click",H),n.list.addEventListener("click",W),R(!0)}async function H(){p||(m+=1,await R(!1))}async function R(e){if(!p){p=!0,e&&(m=1),n.loadMoreBtn.hidden=!0,n.loadMoreBtn.disabled=!0,n.loadMoreBtn.setAttribute("aria-busy","true"),k(A);try{const s=await j(m),t=(s==null?void 0:s.artists)??[];e&&(n.list.innerHTML=""),n.list.insertAdjacentHTML("beforeend",t.map(V).join(""));const o=J(s,m,g,t.length);n.loadMoreBtn.hidden=!o,!o&&!b&&(v("No more artists to load.","info"),b=!0)}catch(s){console.log(s),n.loadMoreBtn.hidden=!0,v("Failed to load artists. Please try again later.","error")}finally{T(A),n.loadMoreBtn.disabled=!1,n.loadMoreBtn.removeAttribute("aria-busy"),p=!1}}}function J(e,s,t,o){if(!e)return!1;const r=e.pagination||e.meta||e.pageInfo,i=(r==null?void 0:r.totalPages)??e.totalPages??e.pages??e.total_pages;if(Number.isFinite(i))return s<i;const a=(r==null?void 0:r.hasNextPage)??e.hasNextPage;if(typeof a=="boolean")return a;const c=(r==null?void 0:r.nextPage)??e.nextPage;if(Number.isFinite(c))return c>s;const f=(r==null?void 0:r.total)??(r==null?void 0:r.totalItems)??e.total??e.totalItems??e.totalCount??e.totalArtists;return Number.isFinite(f)?s*t<f:o===t}function V(e){var c;const s=e._id,t=e.strArtist,o=e.strBiographyEN||"",r=o.length>120?`${o.slice(0,120)}...`:o,i=((c=e.genres)==null?void 0:c.slice(0,4))||[];return`
    <li class="artist-card">
      <div class="artist-card-image">
        <img src="${e.strArtistThumb||""}" alt="${t}" loading="lazy" />
      </div>

      <div class="artist-card-content">
        <ul class="artist-card-tags">
          ${i.map(f=>`<li class="artist-card-tag">${f}</li>`).join("")}
        </ul>

        <div class="artist-desc">
          <h3 class="artist-card-name">${t}</h3>
          <p class="artist-card-text">${r}</p>
        </div>

        <button
          class="artist-card-learn-more js-artist-learn-more"
          type="button"
          data-artist-id="${s}"
        >
          Learn More
          <svg class="artist-card-icon" width="24" height="24" aria-hidden="true">
            <use href="${L}#icon-caret-right"></use>
          </svg>
        </button>
      </div>
    </li>
  `}async function W(e){const s=e.target.closest(".js-artist-learn-more");if(!s)return;const t=s.dataset.artistId;t&&z(t)}async function z(e){var s;if(!(!n.modalOverlay||!n.modalRoot)){k(A),n.modalOverlay.classList.add("is-open"),n.modalOverlay.focus(),document.body.style.overflow="hidden",(s=document.querySelector(".artist-info-wrapper"))==null||s.remove(),F();try{const o=await(await fetch(`https://sound-wave.b.goit.study/api/artists/${e}/albums`,{headers:{Accept:"application/json"}})).json();U(o,n.modalRoot)}catch(t){console.log(t)}finally{T(A)}}}const Z={feedbacksList:document.querySelector(".swiper-wrapper")};function _(e){const s=e.map(({_id:t,name:o,rating:r,descr:i})=>{const a=Math.round(r);return`
        <div class="swiper-slide">
          <div class="feedback-block">
            <div data-raty class="feedback-rating" data-id=${t} data-score=${a}></div>
            <p class="feedback-descr">"${i}"</p>
            <p class="feedback-name">${o}</p>
          </div>
        </div>`}).join("");Z.feedbacksList.insertAdjacentHTML("beforeend",s)}const ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFuSURBVHgBpVTRTcNADH12K747QjoB7QS9TgBsUCZoKwT9LHyifCTdgA0YgWMDmICwQb6RiPG1oUlISK6tpdOdzr7nZz/rAA+7m24+3PKJ5U4wE13qFrh1YyJzMiARz4tgXnfGtzlXJgqEuFKqSDYO7fINRzHk3rrOgC9wDMOc3Qt2/SsYAikry0e7TBoBb000Y/QmeXigKYL8YYB2JokDJ0EqTCllukNsX5se6WGAA+03obgaRXY7MGNt8lIPKU639Fsw2+Jq2SNl+oyOMlssUWJXTv29KAsV4axBBB+wL8mmcS7SfmzchTrG2hvrCeT6aN2buKR4ZQ7VoaplG3gaC2L3pnJXD6MJvBmKqSWpwRGN4A1Yj+V6EEzD2xQNo0UEo2IO/gVcNX1PIrE2frgVTOTpr7sHVFj2q+x4UuCIBfF9aOevJZbXyuihPF76pZ2jNBn9ar7sXQvRIaU4tItGtfMRGbo/gEDzDPJZ9v8ADQiZclEuBD0AAAAASUVORK5CYII=",te="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFFSURBVHgBrZSNbYQwDIXdThA2YAQ2aDYgG/Q2gA1gA9gAMQFs0BE6AmwQNkj9wD6dWi7Qu/ukJ0UQO45/QnSOSfQSnLU2QLy29AK+uq4LENb0JCkTgPc+GGPgNIsZvB84rPiq64KdUVEUWOb0aHSsiQkKouRvXv7d5cLqRMjRWlFcr23b8Ju6ruE0yL5vsRnE/vMNJ1ZVZThXpFrDS6NB0DzPtCzLVeM4Ut/3W4RJkvhhGMKjwBY+EKEeiMpNHGn4L7CR62e7RSjL8rQzrro6S++lxiDJZyJtmkYb3dAB66gdkec5HP7pyb3G/mDoiCxbU2bPOMx0OhRtjVtkT3QMleu1MBmSeLSER8F0cmRqoGgOreYPr4s8Bo0YpawOjwX+gTNPWuWcC5xDreBeMlPWhKJgL6+LmENHW19FNwkX2mbZ3X78AZ/Wm+XSeLl+AAAAAElFTkSuQmCC";function se(){const e={starOn:ee,starOff:te,space:!1,readOnly:!0,halfShow:!1};Array.from(document.querySelectorAll("[data-raty]")).map(t=>{const o=Number(t.dataset.score);new C(t,{...e,score:o}).init()})}function re(){const e=new N(".swiper",{direction:"horizontal",loop:!1,autoHeight:!1,effect:"slide",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,enabled:!1},breakpoints:{768:{navigation:{enabled:!0}}},pagination:{el:".swiper-pagination",type:"bullets",renderBullet:function(s,t){return s<3?'<span class="'+t+'"></span>':""}}});e.on("slideChange",function(){let s=e.activeIndex,t=document.querySelectorAll(".swiper-pagination-bullet");t.forEach(o=>o.classList.remove("swiper-pagination-bullet-active")),s==0?t[0].classList.add("swiper-pagination-bullet-active"):s==9?t[2].classList.add("swiper-pagination-bullet-active"):t[1].classList.add("swiper-pagination-bullet-active")})}oe();async function oe(){try{const s=(await x()).data;_(s)}catch{v("Error create feedbacks list","error");return}se(),re()}function ne(){const e=document.querySelector(".nav-button"),s=document.querySelector(".modal-close-button"),t=document.querySelector(".modal-menu");document.querySelectorAll(".modal-nav-link").forEach(r=>{r.addEventListener("click",()=>{t.classList.remove("modal-open")})}),e.addEventListener("click",()=>{t.classList.remove("slideOutUp"),document.body.style.overflow="hidden",t.classList.add("modal-open","animate","slideInDown")}),s.addEventListener("click",()=>{t.classList.remove("slideInDown"),t.classList.add("slideOutUp"),setTimeout(()=>{t.classList.remove("modal-open")},1e3),document.body.style.overflow="auto"})}ne();const{height:ie}=document.querySelector(".header").getBoundingClientRect();document.body.style.paddingTop=`${ie}px`;const ae=document.querySelector(".open-team-modal-btn"),le=document.querySelector(".team-modal-close-btn"),h=document.querySelector(".team-modal-overlay");function ce(){h.classList.add("is-open"),document.body.style.overflow="hidden"}function $(){h.classList.remove("is-open"),document.body.style.overflow=""}ae.addEventListener("click",ce);le.addEventListener("click",$);h.addEventListener("click",e=>{e.target===h&&$()});
//# sourceMappingURL=index.js.map
