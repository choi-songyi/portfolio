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

// 3. change language button event
const cnBtn = document.querySelector('#cn');
const krBtn = document.querySelector('#kr');
function changeCn(){
    document.querySelector('#korean').style.display = 'none';
    document.querySelector('#chinese').style.display = 'block';
}
function changeKr(){
    document.querySelector('#chinese').style.display = 'none';
    document.querySelector('#korean').style.display = 'block';
}
cnBtn.addEventListener('click',changeCn);
krBtn.addEventListener('click',changeKr);

// 4. skills icoon and contact list fadein event
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

// 5. parralax event for name card
function parralax(element,distance,speed){
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance*speed}px)`;   
}
function scroll(e){
   let y=document.documentElement.scrollTop;
   parralax("#name",y,0.5);
}
window.addEventListener('scroll',scroll);

// 6. thumbnail click event
const click = document.querySelector('.click');
const box = document.querySelectorAll('.thumbnail');
for(let i=0; i<box.length; i++){
    box[i].addEventListener('mouseenter',showClick);
    box[i].addEventListener('mouseleave',noClick);
}
function mouseMove(e){
    let scrollTop = document.documentElement.scrollTop;
    click.style.transform="translate("+e.clientX + "px,"+(e.clientY+scrollTop+10)+"px)";   
}
function showClick(){
    click.classList.add('showClick');
}
function noClick(){
    click.classList.remove('showClick');
}
window.addEventListener('mousemove',mouseMove);