setTimeout(() => {

   let anim = document.querySelector(".anim");
   let anim2 = document.querySelector(".anim2");
   //let anim3 = document.querySelector(".anim3");
   let anim4 = document.querySelector(".anim4");

   anim.style.animation = 'move-anim 1.5s ease-out forwards';
   anim2.style.animation = 'move-anim-2 2s ease-out forwards';
   //anim3.style.animation = 'move-anim-3 1.2s ease-out forwards';
   anim4.style.animation = 'move-anim-4 1.6s ease-out forwards'

},1500)


//loadAnims = () => {
   //let anim = document.querySelectorAll(".anim");
   //let anim2 = document.querySelector(".anim2");

   //anim.forEach(anim => {
      //anim.style.animation = `move-anim .3s ${anim.dataset.delay} ease-out forwards`;
   //});
   //anim2.style.animation = 'move-anim-2 .2 ease-out .6';
//}

//loadAnims();

let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');
let navBig = document.querySelector('.nav-big');
let navSmall = document.querySelector('.nav-small');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));
let contact = document.querySelector('.contact');
let imgs = document.querySelectorAll('img');

let navEventListener = function() {
   hamburger.classList.toggle('active');
   nav.classList.toggle('active');
   navBig.classList.toggle('active');
   navSmall.classList.toggle('active');

      contact.classList.remove('active');

      if(hamburger.classList.contains('active')){
         setTimeout(() => {
            navBig.classList.add('active');
         })

         for(let i = 0; i < navLinks.length; i++){
            navLinks[i].classList.remove('active');
            setTimeout(() =>{
               navLinks[i].classList.add('active')
            }, i * 200)
         }

         setTimeout(() => {
            contact.classList.add('active');
         }, 1600);
      }
}

hamburger.addEventListener('click', navEventListener);
navBig.addEventListener('click', navEventListener);


changeNav = () => {
   let navMain = document.querySelector(".nav-main");
   let titleSec = document.querySelector(".title-sec");
   
   navOptions = {
      threshold: 0.5,
      rootMargin: '20% 0% 0% 0%'
   }

   const navObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
         if(!entry.isIntersecting) {
            navMain.classList.add('scrolled')
         } else {
            navMain.classList.remove('scrolled');
         }
      })
   
   }, navOptions);
   
   navObserver.observe(titleSec);
}

changeNav();



moveTexts = () => {
   let texts = document.querySelectorAll(".move-text");

   textOptions = {
      threshold: 0.5,
      rootMargin: '0% 0% -20% 0%'
   }

   const textObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
         if(entry.isIntersecting) {
            entry.target.style.animation = `move-move-texts 1s forwards ease-out`
         }
      })
   
   }, textOptions);
   
   texts.forEach(text => {
      textObserver.observe(text)
   })
}

moveTexts();

moveImgs = () => {
   let imgs = document.querySelectorAll(".sec-img");

   imgOptions = {
      threshold: 0.5,
      rootMargin: '0% 0% -25% 0%'
   }

   const imgObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
         console.log(entries);
         if(entry.isIntersecting) {
            entry.target.style.animation = `move-img 1s forwards ease-out`
         }
      })
   
   }, imgOptions);
   
   imgs.forEach(img => {
      imgObserver.observe(img)
   })
}

moveImgs();


moveBtns = () => {
   let btns = document.querySelectorAll(".move-btn");

   btnOptions = {
      threshold: 0.5,
      rootMargin: '0% 0% -30% 0%'
   }

   const textObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
         if(entry.isIntersecting) {
            entry.target.style.animation = `move-move-btn 1s forwards ease-out`
         } 
      })
   
   }, btnOptions);
   
   btns.forEach(btn => {
      textObserver.observe(btn)
   })
}

moveBtns();

movePs2 = () => {
   let ps = document.querySelectorAll(".move-page_p");

   textOptions = {
      threshold: 0.5,
      rootMargin: '0% 0% -10% 0%'
   }

   const textObserver = new IntersectionObserver(function(items) {
      items.forEach(item => {
         console.log(items);
         if(item.intersectionRatio > 0) {
            item.target.style.animation = `move-text-2 1s forwards ease`;
         }
         else {
            item.target.style.animation = 'none';
         }
      })
   
   }, textOptions);
   
   ps.forEach(p => {
      textObserver.observe(p)
   })
}

movePs2();