const root=document.documentElement;
const themeButton=document.querySelector('.theme');
const storageKey='stephanie-website-theme';
function setTheme(theme){root.dataset.theme=theme;themeButton.textContent=theme==='dark'?'Light':'Dark';themeButton.setAttribute('aria-label',theme==='dark'?'Switch to light theme':'Switch to dark theme');}
let savedTheme;try{savedTheme=localStorage.getItem(storageKey);}catch{}
const requestedTheme=new URLSearchParams(location.search).get('theme');
setTheme(requestedTheme==='light'||requestedTheme==='dark'?requestedTheme:savedTheme||'light');
themeButton.addEventListener('click',()=>{const next=root.dataset.theme==='dark'?'light':'dark';setTheme(next);try{localStorage.setItem(storageKey,next);}catch{}});
const menuButton=document.querySelector('.menu');const navigation=document.querySelector('.nav-links');
menuButton.addEventListener('click',()=>{const opened=navigation.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(opened));menuButton.textContent=opened?'Close':'Menu';});
navigation.addEventListener('click',event=>{if(event.target.closest('a')){navigation.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='Menu';}});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){navigation.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='Menu';}});
