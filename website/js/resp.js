  const burger=document.querySelector('.burger');
  const navbar=document.querySelector('.navbar');
  const rightnav=document.querySelector('.rightnav');
  const navlist=document.querySelector('.nav-list');
burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-nav');
    navlist.classList.toggle('v-nav');
   navbar.classList.toggle('h-nav');
})
