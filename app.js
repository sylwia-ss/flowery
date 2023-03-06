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

mumReviews = () => {

   const reviews = [
      {
         id: 1,
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officiis quod magni aut libero iure pariatur, unde nemo tempora, hic, eligendi corporis? Recusandae esse illo voluptatum commodi impedit iure accusantium voluptate beatae illum.",
      },
      {
         id: 2,
         text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis.",
      },
      {
         id: 3,
         text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt ab illo inventore veritatis et quasi.!",
      },
      {
         id: 4,
         text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      }
   ];
   
   //const person = document.getElementById("author");
   //const review = document.getElementById("info");
   const prevBtn = document.querySelector(".btn-prev");
   const nextBtn = document.querySelector(".btn-next");
   
   let currentItem = 0;
   
   window.addEventListener('DOMContentLoaded', function () {
      showPerson(currentItem);
   });
   
   function showPerson() {
      const item = reviews[currentItem];
      //author.textContent = item.author;
      info.textContent = item.text;
   }
   
   nextBtn.addEventListener('click', function() {
      currentItem++;
      if(currentItem > reviews.length - 1){
         currentItem = 0;
      }
      showPerson(currentItem);
   });
   
   prevBtn.addEventListener('click', function() {
      currentItem--;
      if(currentItem < 0){
         currentItem = reviews.length - 1;
      }
      showPerson(currentItem);
   });
}

mumReviews();