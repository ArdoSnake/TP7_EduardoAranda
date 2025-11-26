
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.like-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      btn.classList.toggle('liked');
      const countSpan = btn.querySelector('.like-count');
      let count = parseInt(countSpan.textContent);
      if(btn.classList.contains('liked')){count++;} else {count--;}
      countSpan.textContent = count;
    });
  });
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  if(toggle){
    toggle.addEventListener('click',()=>{
      nav.classList.toggle('show');
    });
  }
});
