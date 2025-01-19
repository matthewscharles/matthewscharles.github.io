import './style.css'
import logos from './logos.html?raw'
import links from './links.html?raw'

document.querySelector('#app').innerHTML = `

    <div class="card logos">
      ${logos}
    </div>
    <h3>Project links</h3>
    <div class="card links">
      ${links}
    </div>
    <hr>
    <div class="card">
    <h3>Game audio demo playlist</h3>
      <div class="embed-container">
          <iframe width="640" height="390" 
          src="https://www.youtube.com/embed/videoseries?si=2lW76TEhJVdbHEOR&amp;list=PLIKWa1FaZD5y24pnfeUiXkJ6GzWY5KAUE" 
          frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
    <hr>
    <div class="card">
      <h3>Unreal Engine plugin development</h3>
      <a href="https://github.com/matthewscharles/metasound-branches">Branches: Metasound Plugins</a>
      <div class="embed-container">
          <iframe width="640" height="390" 
          src="https://www.youtube.com/embed/HgudP5fzDWM" 
          frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
</div>
`