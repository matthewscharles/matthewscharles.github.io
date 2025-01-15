(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();document.querySelector("#app").innerHTML=`
<h1>Charles Matthews</h1>
<h2>Technical Audio and Music Designer</h2>
  <div class="logos">
    <span><img src="icons/ISO_C++_Logo.svg" onclick="preventDefault()" alt="C++ Logo" width="30px"></span>
    <span><img src="icons/unreal-engine-svgrepo-com.svg" width="30px" alt="Unreal Engine logo"></span>
    <span><img src="icons/wwise_logo_icon_249154.svg" width="30px" alt="Wwise logo"></span>
    <span><img src="icons/Unofficial_JavaScript_logo_2.svg" width="30px" alt="JavaScript logo"></span>
    <span><img src="icons/Pure_Data_logo.svg" width="30px" height="30px" alt="pure data logo"></span>
    <span><img src="icons/Cycling_74_logo.svg" alt="Max MSP logo" height="30px" width="30px"></span>
    <span><img src="icons/Logo_C_sharp.svg" alt="C sharp Logo" width="30px"></span>
  </div>
    <h3>Unreal Engine plugin development</h3>
<a href="https://github.com/matthewscharles/metasound-branches">Branches: Metasound Plugins</a>
<div class="embed-container">
    <iframe width="640" height="390" 
    src="https://www.youtube.com/embed/HgudP5fzDWM" 
    frameborder="0" allowfullscreen></iframe>
</div>
`;
