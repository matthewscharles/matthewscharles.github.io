(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const r=`<img src="icons/ISO_C++_Logo.svg" onclick="preventDefault()" alt="C++ Logo" width="30px">
<img src="icons/unreal-engine-svgrepo-com.svg" width="30px" alt="Unreal Engine logo">
<img src="icons/wwise_logo_icon_249154.svg" width="30px" alt="Wwise logo">
<img src="icons/Unofficial_JavaScript_logo_2.svg" width="30px" alt="JavaScript logo">
<img src="icons/Pure_Data_logo.svg" width="30px" height="30px" alt="pure data logo">
<img src="icons/Cycling_74_logo.svg" alt="Max MSP logo" height="30px" width="30px">
<img src="icons/Logo_C_sharp.svg" alt="C sharp Logo" width="30px">`,s=`<!-- <ul dir="auto">
  <li><a href="https://github.com/matthewscharles/metasound-plugins/">Branches</a>: a MetaSound plugin for Unreal Engine (C++)</li>
  <li><a href="https://www.good-vibrations.org.uk/gamelan-room/" rel="nofollow">Gamelan Room</a>: a web music app commissioned by Good Vibrations</li>
  <li><a href="https://www.humaninstruments.co.uk/haptic-baton" rel="nofollow">Haptic Baton</a>: accessible music technology as featured on <a href="https://www.youtube.com/watch?v=GPajyVGw82s" rel="nofollow">CNN</a></li>
  <li><a href="https://www.drakemusic.org/technology/instruments-projects/the-kellycaster/" rel="nofollow">The Kellycaster</a>: a bespoke digital guitar designed by John Kelly</li>
  <li><a href="https://www.youtube.com/watch?v=aw8Qo3xfbyI" rel="nofollow">Plastic Season</a>: 2024 album demo</li>
</ul> -->
<ul dir="auto">
  <li><a href="https://github.com/matthewscharles/metasound-plugins/">Branches: MetaSound Plugin</a></li>
  <li><a href="https://www.good-vibrations.org.uk/gamelan-room/" rel="nofollow">Gamelan Room</a></li>
  <li><a href="https://www.humaninstruments.co.uk/haptic-baton" rel="nofollow">Haptic Baton</a></li>
  <li><a href="https://www.drakemusic.org/technology/instruments-projects/the-kellycaster/" rel="nofollow">The Kellycaster</a></li>
  <li><a href="https://www.youtube.com/watch?v=aw8Qo3xfbyI" rel="nofollow">Plastic Season (demo)</a></li>
</ul>
`;document.querySelector("#app").innerHTML=`

    <div class="card logos">
      ${r}
    </div>
    <h3>Project links</h3>
    <div class="card links">
      ${s}
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
`;
