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