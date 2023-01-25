(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const n="/todo-app/assets/quik-bb89a127.svg",s="/todo-app/assets/lines-32238f8d.svg";document.querySelector("#app").innerHTML=`
<aside>
<a href="https://github.com/someguy403/todo-app" target="_blank">
  <svg height="32" viewBox="0 0 16 16" width="32">
    <path
      fill-rule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      fill="black"
    ></path>
  </svg>
</a>
</aside>
<div>
<h3>Todo App</h3>
<a href="/todo-app/design" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="General Design" title="General Design written with no framework" />
</a>
<img src="${s}" id="lines" />
<nav class="todoapp">
  <a href="/todo-app/svelte" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg" alt="Svelte" title="Svelte" />
  </a>
  <a href="/todo-app/solid" target="_blank">
    <img src="https://www.solidjs.com/assets/logo-123b04bc.svg" alt="Solid" title="Solid" />
  </a>
  <a href="/todo-app/react" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" title="React" />
  </a>
  <a href="/todo-app/quik" target="_blank">
    <img id="quik" src="${n}" alt="Quik" title="Quik" />
  </a>
</nav>
</div>
<div>
<p>Framework hamepages</p>
<nav class="frameworks">
  <a href="https://svelte.dev/" target="_blank">Svelte <ion-icon name="arrow-redo-outline"></ion-icon></a>
  <a href="https://www.solidjs.com/" target="_blank">Solid <ion-icon name="arrow-redo-outline"></ion-icon></a>
  <a href="https://reactjs.org/" target="_blank">React <ion-icon name="arrow-redo-outline"></ion-icon></a>
  <a href="https://qwik.builder.io/" target="_blank">Quik <ion-icon name="arrow-redo-outline"></ion-icon></a>
</nav>
</div>
<p>For more info visit the Github repo <ion-icon name="arrow-up-outline"></ion-icon></p>`;
