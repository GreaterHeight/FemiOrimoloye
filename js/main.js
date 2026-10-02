(function(){
  const root=document.documentElement;
  const year=document.querySelector('[data-year]'); if(year) year.textContent=new Date().getFullYear();
  document.querySelectorAll('[data-track]').forEach(el=>el.addEventListener('click',()=>{try{if(window.dataLayer)window.dataLayer.push({event:el.dataset.track});}catch(e){}}));
})();
