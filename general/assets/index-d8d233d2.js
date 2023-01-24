(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function t(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerpolicy&&(d.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?d.credentials="include":n.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(n){if(n.ep)return;n.ep=!0;const d=t(n);fetch(n.href,d)}})();document.body.innerHTML=`
<aside class="bar flex">
<div class="flex">
  <ion-icon name="clipboard-outline"></ion-icon>
  <p>Todo App</p>
</div>
<p class="flex">
  Made by
  <img src="https://gogglesinc.github.io/cdn/images/goggles-small.png" alt="" id="goggles" />
  <span>
    <a href="http://someguy403.github.io" target="_blank" rel="noopener noreferrer"> Goggles </a>
  </span>
</p>
</aside>

<div class="edit">
<textarea id="todotext" placeholder="Enter Text Here!"></textarea>

<div class="editaction">
  <div class="dropdown">
    <button class="btn" id="add">Add</button>
    <button class="btn flex"><ion-icon name="chevron-down-outline"></ion-icon></button>
    <div class="dropdown-content">
      <button id="addtotodo">Add to 'Todo' List</button>
      <button id="addtocomplete">Add to 'Completed' List</button>
    </div>
  </div>
  <button id="clearcpl" class="btn">Clear Completed</button>
  <button id="clearall" class="btn">Clear All</button>
</div>
</div>

<main id="app">
<p id="tdt">Todo:</p>
<ul class="list" id="todo"></ul>
<hr />
<p id="cpt">Completed:</p>
<ul class="list" id="complete"></ul>
</main>
`;const h='<button id="done" class="flex" title="Complete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 176L217.6 336 160 272"></path></svg></button><button id="delete" class="flex" title="Delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192M192 320l128-128"></path></svg></button>',a=document.querySelector("#todo"),r=document.querySelector("#complete"),g=document.querySelector("#todotext"),b=document.querySelector("#add"),v=document.querySelector("#addtotodo"),L=document.querySelector("#addtocomplete"),y=document.querySelector("#clearcpl"),k=document.querySelector("#clearall"),p={todo:[],completed:[]};document.addEventListener("DOMContentLoaded",i);b.addEventListener("click",()=>{m("todo")});v.addEventListener("click",()=>{m("todo")});L.addEventListener("click",()=>{m("complete")});y.addEventListener("click",()=>{r.innerHTML="",c()});k.addEventListener("click",()=>{confirm("Are you sure to delete all todos? This action is IREVERSIBLE")&&(r.innerHTML="",a.innerHTML="",c())});//! Functions
function m(e){const o=g.value;o!==""&&(e==="todo"?s(a,o):e==="complete"&&s(r,o))}function i(){document.querySelectorAll("#done").forEach(t=>{t.addEventListener("click",w)}),document.querySelectorAll("#delete").forEach(t=>{t.addEventListener("click",E)})}function w(){const e=this.parentNode.parentNode;e.parentNode!==r&&(r.appendChild(e),c(),i())}function E(){const e=this.parentNode.parentNode;e.parentNode.removeChild(e),c(),i()}function s(e,o){const t=document.createElement("li");t.innerHTML=o,t.append(S()),t.classList.add("flex"),e.append(t),c(),i()}function S(){const e=document.createElement("div");return e.classList.add("actions"),e.classList.add("flex"),e.innerHTML=h,e}function f(e){const o=e.childNodes;let t=[];return o.forEach(l=>{t.push(l.innerText)}),t=t.filter(function(l){return l!==void 0}),t}function c(){const e=f(a),o=f(r);p.todo=e,p.completed=o,localStorage.setItem("todoapp",JSON.stringify(p)),i()}function x(){const e=localStorage.getItem("todoapp");if(e===null)return;const o=JSON.parse(e);o.todo.forEach(t=>{s(a,t)}),o.completed.forEach(t=>{s(r,t)}),i()}x();
