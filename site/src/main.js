import './style.css'
import logos from './logos.html?raw'

document.querySelector('#app').innerHTML = `
<h1>Charles Matthews</h1>
<h2>Technical Audio and Music Designer</h2>
    ${logos}
    <h3>Game audio demo playlist</h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=2lW76TEhJVdbHEOR&amp;list=PLIKWa1FaZD5y24pnfeUiXkJ6GzWY5KAUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <h3>Unreal Engine plugin development</h3>
<a href="https://github.com/matthewscharles/metasound-branches">Branches: Metasound Plugins</a>
<div class="embed-container">
    <iframe width="640" height="390" 
    src="https://www.youtube.com/embed/HgudP5fzDWM" 
    frameborder="0" allowfullscreen></iframe>
</div>
`