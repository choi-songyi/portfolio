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

// 3. skills icoon and contact list fadein event
function skillsFadein(){
    const skills = document.querySelector('.skills');
    const contact = document.querySelector('.contactList');
    let skillsPosition = skills.getBoundingClientRect().top;
    let contactListPosition = contact.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(skillsPosition<screenPosition){
        skills.classList.add('fadein');
    }
    if(skillsPosition>screenPosition){
        skills.classList.remove('fadein');
    }
    if(contactListPosition<screenPosition){
        contact.classList.add('fadeinContact');
    } 
    if(contactListPosition>screenPosition){
        contact.classList.remove('fadeinContact');
    }
}
window.addEventListener('scroll', skillsFadein);

// 4. parralax event for name card
function parralax(element,distance,speed){
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance*speed}px)`;   
}
function scroll(e){
   let y=document.documentElement.scrollTop;
   parralax("#name",y,0.5);
}
window.addEventListener('scroll',scroll);