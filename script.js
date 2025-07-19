//slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

gsap.from("#nav .logo>h1:nth-child(2)",{
    y:-60,
    duration:1,
})
gsap.from(".fontSlider h3",{
  x:-80,
  duration:1,
})
gsap.from(".fontSlider .right button",{
  x:80,
  duration:1,
})
gsap.from(".box",{
  scrollTrigger:{
    tigger:".box",
    scroll:"body",
    // markers:true,
    start:"bottom 70%",
    end:"top 30%"
  },
  scale:0.8,
  duration:2,
})

gsap.from(".firstLeft h1,h2",{
  scrollTrigger:{
    tigger:".firstLeft",
    scroll:"lastPage",
    // markers:true,
    start:"bottom 40%",
    end:"top 30%"
  },
  scale:0.9,
  duration:2,
})

gsap.from("#div1",{
  scrollTrigger:{
    tigger:"#div1",
    scroll:"lastPage",
    // markers:true,
    start:"bottom 20%",
    end:"top 30%"
  },
  x:40,
  duration:2,
})
gsap.from("#div3",{
  scrollTrigger:{
    tigger:"#div3",
    scroll:"lastPage",
    // markers:true,
    start:"bottom 20%",
    end:"top 30%"
  },
  x:-40,
  duration:2,
})
gsap.from("#aboutRight1",{
  scrollTrigger:{
    tigger:"#aboutRight1",
    scroll:"aboutPage",
    // markers:true,
    start:"bottom 2%",
    // end:"top 30%"
  },
  y:-40,
  duration:2,
})
gsap.from("#aboutRight2",{
  scrollTrigger:{
    tigger:"#aboutRight2",
    scroll:"aboutPage",
    // markers:true,
    start:"bottom 2%",
    // end:"top 30%"
  },
  y:40,
  duration:2,
})
gsap.from("#aboutRight3",{
  scrollTrigger:{
    tigger:"#aboutRight3",
    scroll:"aboutPage",
    // markers:true,
    start:"bottom 2%",
    // end:"top 30%"
  },
  x:-40,
  duration:2,
})
gsap.from("#aboutRight4",{
  scrollTrigger:{
    tigger:"#aboutRight4",
    scroll:"aboutPage",
    // markers:true,
    start:"bottom 2%",
    // end:"top 30%"
  },
  y:40,
  duration:2,
})