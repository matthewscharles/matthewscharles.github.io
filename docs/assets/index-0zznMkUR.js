(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const r=`<!-- <ul dir="auto">
  <li><a href="https://github.com/matthewscharles/metasound-plugins/">Branches</a>: a MetaSound plugin for Unreal Engine (C++)</li>
  <li><a href="https://www.good-vibrations.org.uk/gamelan-room/" rel="nofollow">Gamelan Room</a>: a web music app commissioned by Good Vibrations</li>
  <li><a href="https://www.humaninstruments.co.uk/haptic-baton" rel="nofollow">Haptic Baton</a>: accessible music technology as featured on <a href="https://www.youtube.com/watch?v=GPajyVGw82s" rel="nofollow">CNN</a></li>
  <li><a href="https://www.drakemusic.org/technology/instruments-projects/the-kellycaster/" rel="nofollow">The Kellycaster</a>: a bespoke digital guitar designed by John Kelly</li>
  <li><a href="https://www.youtube.com/watch?v=aw8Qo3xfbyI" rel="nofollow">Plastic Season</a>: 2024 album demo</li>
</ul> -->
<!-- <ul dir="auto">
  <li><a href="https://github.com/matthewscharles/metasound-plugins/">Branches: MetaSound Plugin</a></li>
  <li><a href="https://www.good-vibrations.org.uk/gamelan-room/" rel="nofollow">Gamelan Room</a></li>
  <li><a href="https://www.humaninstruments.co.uk/haptic-baton" rel="nofollow">Haptic Baton</a></li>
  <li><a href="https://www.drakemusic.org/technology/instruments-projects/the-kellycaster/" rel="nofollow">The Kellycaster</a></li>
  <li><a href="https://www.youtube.com/watch?v=aw8Qo3xfbyI" rel="nofollow">Plastic Season (demo)</a></li>
</ul> -->


<ul class="card-container" role="list">
  <li class="project-card" role="listitem">
    <div class="project-header">
        <div class="project-thumbnail">
          <a href="https://www.youtube.com/watch?v=JACIFoUdL-o&list=PLIKWa1FaZD5y24pnfeUiXkJ6GzWY5KAUE">
            <img src="thumbnails/playlist.png" alt="Demo Playlist">
          </a>
        </div>
        <div class="project-content">
          <a href="https://www.youtube.com/watch?v=JACIFoUdL-o&list=PLIKWa1FaZD5y24pnfeUiXkJ6GzWY5KAUE" class="project-name">Game Audio Playlist</a>
          <div class="project-icons">
            <img src="icons/unreal-engine-svgrepo-com.svg" class="icon-category" alt="Unreal Engine logo">
            <img src="icons/ISO_C++_Logo.svg" onclick="preventDefault()" alt="C++ Logo" class="icon-category">
            <img src="icons/wwise_logo_icon_249154.svg" class="icon-category" alt="Wwise logo">
            <img src="icons/Unofficial_JavaScript_logo_2.svg" class="icon-category" alt="JavaScript logo">
          </div>
        </div>
        
    </div>
    <div class="project-content">
      
      <p class="project-description">
       Explore this playlist for recent examples of audio implementation, sound redesign, plugin development, and procedural music.
      </p>
      <hr>
    </div>
    <div class="project-more">
      <ul>
          <li><a href="https://www.youtube.com/watch?v=JACIFoUdL-o&list=PLIKWa1FaZD5y24pnfeUiXkJ6GzWY5KAUE&index=1">‣ Sink the Drum Machine (UE + Wwise)</a></li>
          <li><a href="https://www.youtube.com/watch?v=bDwOI6jmXPo&list=PLIKWa1FaZD5y24pnfeUiXkJ6GzWY5KAUE&index=2">‣ Game Animation Sample Project</a></li>
          <li><a href="https://www.youtube.com/watch?v=wVmA1v8fNa8&list=PLIKWa1FaZD5y24pnfeUiXkJ6GzWY5KAUE&index=3">‣ Linear redesign: Fortnite</a></li>
          <li><a href="https://www.youtube.com/watch?v=HgudP5fzDWM&list=PLIKWa1FaZD5y24pnfeUiXkJ6GzWY5KAUE&index=4">‣ Branches plugin</a></li>
          <li><a href="https://www.youtube.com/watch?v=gC1We0uL63w&list=PLIKWa1FaZD5y24pnfeUiXkJ6GzWY5KAUE&index=5">‣ Procedural music</a></li>
      </ul>
    </div>
    <div class="project-video">
      <iframe src="https://www.youtube.com/embed/videoseries?si=coITJhe-fCQ3w86C&list=PLIKWa1FaZD5y24pnfeUiXkJ6GzWY5KAUE" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
    </div>
    <div class="video-title-box">
        <a href="https://www.youtube.com/watch?v=JACIFoUdL-o&list=PLIKWa1FaZD5y24pnfeUiXkJ6GzWY5KAUE" target="_blank">Demo playlist on YouTube</a>
    </div>
  </li>
  <li class="project-card" role="listitem">
    <div class="project-header">
        <div class="project-thumbnail">
          <a href="https://matthewscharles.github.io/metasound-branches/">
            <img src="thumbnails/branches.png" alt="MetaSound Branches">
          </a>
        </div>
        <div class="project-content">
          <a href="https://matthewscharles.github.io/metasound-branches/" class="project-name">Branches</a>
          <div class="project-icons">
            <img src="icons/ISO_C++_Logo.svg" onclick="preventDefault()" alt="C++ Logo" class="icon-category">
            <img src="icons/unreal-engine-svgrepo-com.svg" class="icon-category" alt="Unreal Engine logo">
          </div>
          
        </div>
    </div>
    <div class="project-content">
      
      <p class="project-description">An audio plugin for Unreal Engine's MetaSound environment, created in C++ and incorporating extensive examples.</p>
      <p class="project-description">More information and development notes are available at the <a href="https://github.com/matthewscharles/metasound-branches/">GitHub Repository</a> <a href=here</p>
    </div>
    <div class="project-video">
      <iframe  src="https://www.youtube.com/embed/HgudP5fzDWM?si=0JrRcT-wfprh7L-b" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
    </div>
    <div class="video-title-box">
        <a href="https://www.youtube.com/embed/HgudP5fzDWM?si=0JrRcT-wfprh7L-b" target="_blank">Branches demo: example patches</a>
    </div>
  </li>

  <li class="project-card" role="listitem">
    <div class="project-header">
        <div class="project-thumbnail">
          <a href="https://www.good-vibrations.org.uk/gamelan-room">
            <img src="thumbnails/gamelan-room.png" alt="Gamelan Room">
          </a>
        </div>
        <div class="project-content">
          <a href="https://www.good-vibrations.org.uk/gamelan-room" class="project-name">Gamelan Room</a>
          <div class="project-icons">
            <img src="icons/Unofficial_JavaScript_logo_2.svg" class="icon-category" alt="JavaScript logo">
            <img src="icons/Blender_logo_no_text.svg" class="icon-category" alt="Blender logo">
          </div>

        </div>
    </div>
    <div class="project-content">
      <p class="project-description">
        A web app for Javanese music commissioned for music workshops in prisons; access instruments using a touch screen or keyboard.
      </p>
    </div>
    <div class="project-video">
      <iframe  src="https://www.youtube.com/embed/zQFO18hA9kI" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
    </div>
    <div class="video-title-box">
        <a href="https://www.youtube.com/embed/zQFO18hA9kI" target="_blank">Gamelan Room: sequencer demo</a>
    </div>
  </li>
  
  <li class="project-card" role="listitem">
    <div class="project-header">
        <div class="project-thumbnail">
          <a href="https://www.github.com/matthewscharles/">
            <img src="thumbnails/technology.png" alt="Music Technology">
          </a>
        </div>
        <div class="project-content">
          <a href="https://www.github.com/matthewscharles/" class="project-name">Music Technology</a>
          <div class="project-icons">
            <img src="icons/ISO_C++_Logo.svg" onclick="preventDefault()" alt="C++ Logo" class="icon-category">
            <img src="icons/Unofficial_JavaScript_logo_2.svg" class="icon-category" alt="JavaScript logo">
            <img src="icons/Pure_Data_logo.svg" class="icon-category" height="30px" alt="pure data logo">
            <img src="icons/Cycling_74_logo.svg" alt="Max MSP logo" height="30px" class="icon-category">
            <img src="icons/kicad.svg" alt="KiCad logo" height="30px" class="icon-category">
          </div>
          
        </div>
    </div>
    <div class="project-content">
      <p class="project-description">
        For the past ten years I have worked on improving access to music technology in collaboration with musicians, often through building new instruments.
      </p>
    </div>
    <hr>
    <div class="project-more">
      <ul>
        <li>‣ <a href="https://www.humaninstruments.co.uk/haptic-baton" rel="nofollow">The Haptic Baton</a></li>
        <li>‣ <a href="https://www.drakemusic.org/technology/instruments-projects/the-kellycaster/" rel="nofollow">The Kellycaster</a></li>
        <li>‣ <a href="https://www.drakemusic.org/music/projects-commissions-participation/planted-symphony/" rel="nofollow">Planted Symphony</a></li>
        <li>‣ <a href="https://www.youtube.com/watch?v=QApY4qj2PDw" rel="nofollow">Define Your Journey</a></li>
        <li>‣ <a href="https://instrumentmaker.org/" rel="nofollow">InstrumentMaker.org</a></li>
      </ul>
    </div>
    <div class="project-video">
      <iframe  src="https://www.youtube.com/embed/GPajyVGw82s" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
    </div>
    <div class="video-title-box">
        <a href="https://www.youtube.com/embed/GPajyVGw82s" target="_blank">The Haptic Baton on CNN</a>
    </div>
  </li>
</ul>`;document.querySelector("#app").innerHTML=`
    <div class="card links">
      ${r}
    </div>
    
`;
