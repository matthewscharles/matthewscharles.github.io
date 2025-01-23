import './style.scss';
import logos from './logos.html?raw';
import links from './projects.html?raw';
import playlist from './playlist.html?raw';

document.querySelector('#app').innerHTML = `
    
    
    <div class="card links">
      ${links}
    </div>
    
`