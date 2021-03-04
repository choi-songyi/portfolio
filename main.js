'use strict'

// 1. navigation toggle event
const nav = document.querySelector('.nav');
function navbar(){
    if( document.documentElement.scrollTop > 30 ){
    nav.style.transform = 'translateY(0)'; 
    } else {
    nav.style.transform = 'translateY(-60px)';
    }}
 window.addEventListener('scroll',navbar)

// 2. navigation menu smooth scroll
const menu = document.querySelector('.menu');
const basicMenu = document.querySelector('.basic-menu');
function smoothScroll(e){
    if(e.target.dataset.key === 'home'){
        document.documentElement.scrollTop = 0;
    };
}
menu.addEventListener('click',smoothScroll);
basicMenu.addEventListener('click',smoothScroll);