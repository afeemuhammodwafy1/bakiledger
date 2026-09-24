const menu = document.querySelector('[data-menu]');
const links = document.querySelector('[data-links]');
if(menu && links){
  menu.addEventListener('click',()=>{
    const open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  links.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    links.classList.remove('open');
    menu.setAttribute('aria-expanded','false');
    menu.setAttribute('aria-label','Open navigation');
  }));
}
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const el=document.querySelector(a.getAttribute('href'));
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});
const params = new URLSearchParams(window.location.search);
const success = document.getElementById('form-success');
if(success && params.get('sent') === '1'){
  success.hidden = false;
  success.scrollIntoView({behavior:'smooth',block:'center'});
}
