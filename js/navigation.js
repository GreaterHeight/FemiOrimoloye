(function(){
 const toggle=document.querySelector('.menu-toggle'),nav=document.getElementById('primary-menu'); if(!toggle||!nav)return;
 const links=[...nav.querySelectorAll('a')];
 function close(){toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');document.body.classList.remove('menu-open');}
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('is-open',!open);});
 links.forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('is-open')){close();toggle.focus();}});
})();
