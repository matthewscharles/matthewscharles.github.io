import './style.css'
import logos from './logos.html?raw'

document.querySelector('#app').innerHTML = `
<h1>Charles Matthews</h1>
<h2>Technical Audio and Music Designer</h2>
    ${logos}
    <h3>Unreal Engine plugin development</h3>
<a href="https://github.com/matthewscharles/metasound-branches">Branches: Metasound Plugins</a>
<div class="embed-container">
    <iframe width="640" height="390" 
    src="https://www.youtube.com/embed/HgudP5fzDWM" 
    frameborder="0" allowfullscreen></iframe>
</div>
`