const navSlide=function(){
  const burger=document.querySelector('.burger'); 
  const nav=document.querySelector('.nav-links');
  const navLinks=document.querySelectorAll('.nav-links li');

burger.addEventListener('click',function(){
    // Toogle  Nav
    nav.classList.toggle('nav-active');

    // Animation links
    navLinks.forEach(function(link, index) {
         if(link.style.animation){
            link.style.animation='';

        }
        else{
            link.style.animation=`navLinkFade 0.5s ease forwords ${index/5 + 0.3}s`;
        }
     
        // console.log(index / 5)

        
    });

    // Burger Animation
    burger.classList.toggle('toggle');
});
   


}

const app=function(){
   navSlide();
}
app();
