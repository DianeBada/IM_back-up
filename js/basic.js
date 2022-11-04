$(document).ready(function(){
  $('.block-row').parallax();


})

nav_icon = document.getElementById('burger-button');
  main_menu = document.getElementById('main-menu');
  menuList = document.querySelectorAll('.main-menu ul li a');
  current = 1 
  nav-icon.addEventListener('click',function(){
    if(current == 1){
      main_menu.classList.add("active");
      current = 2
    }else if(current == 2){
      main_menu.classList.remove("active");
      current = 1
    }   
  });
  menuList.forEach(function(navElement) {
    navElement.addEventListener('click',function(){
      if(current == 2){
        main_menu.classList.remove("active");
        current = 1
      }
    });
  });