import './style.scss';
import logos from './logos.html?raw';
import links from './projects.html?raw';
import playlist from './playlist.html?raw';

document.querySelector('#app').innerHTML = `
    <a href="https://github.com/matthewscharles/"><img src="icons/github-mark.svg" height="15em"> matthewscharles</a>
    <div class="card links">
      ${links}
    </div>
    <hr>
`