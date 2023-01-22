import './style.css'
import quiklogo from './quik.svg'

document.querySelector('#app').innerHTML = `
<aside>
<a href="http://" target="_blank">
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
<nav class="todoapp">
  <a href="/todo-app/vite" target="_blank">
    <img src="https://vitejs.dev/logo.svg" alt="Vite" />
  </a>
  <a href="/todo-app/solid" target="_blank">
    <img src="https://www.solidjs.com/assets/logo-123b04bc.svg" alt="Solid" />
  </a>
  <a href="/todo-app/react" target="_blank">
    <img
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
      alt="React"
    />
  </a>
  <a href="/todo-app/quik" target="_blank">
    <img id="quik" src="${quiklogo}" alt="Quik" />
  </a>
</nav>
</div>
<div>
<p>Framework hamepages</p>
<nav class="frameworks">
  <a href="https://vitejs.dev/" target="_blank">Vite <ion-icon name="arrow-redo-outline"></ion-icon></a>
  <a href="https://www.solidjs.com/" target="_blank">Solid <ion-icon name="arrow-redo-outline"></ion-icon></a>
  <a href="https://reactjs.org/" target="_blank">React <ion-icon name="arrow-redo-outline"></ion-icon></a>
  <a href="https://qwik.builder.io/" target="_blank">Quik <ion-icon name="arrow-redo-outline"></ion-icon></a>
</nav>
</div>
<p>For more info visit the Github repo <ion-icon name="arrow-up-outline"></ion-icon></p>`