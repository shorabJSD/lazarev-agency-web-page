function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

function movingAniamtion(){
    var tl = gsap.timeline();
    tl.from("#page1", {
       opacity:0,
       duration:0.5
    })
    tl.from("#page1", {
        transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
        duration:2, 
        ease:"expo.out"
    })
    tl.from("#page1 h1, #page1 h4, #page1 div ", {
        opacity:0,
        stagger:0.1,
    })
    tl.from("#nav", {
        opacity:0,
        duration:0.1
    })
   
}



function navAnimation(){
     //add mouse over on nav menu, sum menu will be displayed; 
 var navbar = document.querySelector("#nav");
 navbar.addEventListener("mouseenter", ()=>{
 
    let timeline = gsap.timeline();
    timeline.to(".sub_menu", {
        display:"block", 
    })  
   
    timeline.to(".nav_bottom", { 
        height:"13vw",  
        bottom:"-13vw", 
    });
    timeline.to(".sub_menu, li, a, span", {
        y:0,
        stagger:{
            amount:0.6,
        }
    });
 });


 //add mouse leave event, all of element of sum menu will be none;
 navbar.addEventListener("mouseleave", ()=>{
 
    let timeline = gsap.timeline();
    timeline.to(".sub_menu, li, a, span", {
        y:20,
        stagger:{
          amount:0.2,
        }
    });
    timeline.to(".sub_menu", {
        display:"none",
        duration:0.1
    })
    timeline.to(".nav_bottom", {
        height:"0vw",
        bottom:"0vw",
        duration:0.2,
    })
 });
 
};





function page2Animation(){
    const box = document.querySelectorAll(".des_box");
    box.forEach(elem=>{
        elem.addEventListener("mousemove", (event)=>{
            gsap.to(elem.childNodes[3], {
                scale:1,
                x:event.x - elem.getBoundingClientRect().x-50,
                y:event.y - elem.getBoundingClientRect().y - 50,
            })
        })
        elem.addEventListener("mouseleave", ()=>{
            gsap.to(elem.childNodes[3], {
                scale:0,
            })
        })
    })
}



//page3 animation;

function page3VideoAnimation(){
const vedioReel = document.querySelector("#page3 video");
const playBtn = document.querySelector(".page3_icon");

playBtn.addEventListener("click", ()=>{
     vedioReel.play();
     gsap.to(vedioReel, {
        transform : 'scaleX(1) scaleY(1)',
        borderRadius:0,
        zIndex:9999,
        opacity:1,
     })
})

vedioReel.addEventListener("click", ()=>{
     vedioReel.load();
     gsap.to(vedioReel, {
        transform : 'scaleX(0.7) scaleY(0.2)',
        borderRadius:2,
        zIndex:-1,
        opacity:0,
     }) 
})
}

function pikaSectionAniamation(){
    const rightPika = document.querySelectorAll(".right_pika");

rightPika.forEach(elem=>{
    elem.addEventListener("mousemove", (ev)=>{
        elem.childNodes[3].style.opacity = 1;
        elem.childNodes[3].play()
        // console.log(elem.childNodes[5]);
        gsap.to(elem.childNodes[5], {
            scale:1,
            x:ev.x - elem.getBoundingClientRect().x -100,
            y:ev.y - elem.getBoundingClientRect().y-100,
        })
    });
});
rightPika.forEach(elem=>{
    elem.addEventListener("mouseleave", ()=>{
        elem.childNodes[3].style.opacity = 0;
        elem.childNodes[3].load();
        gsap.to(elem.childNodes[5], {
            scale:0,
        })
    });
});

}

function proDeleveryStrategy(){
    gsap.from(".pro_list h4", {
        x:0,
       duration:1,
        scrollTrigger:{
            trigger:".pro_list",
            scroller:"#main", 
            scrub:true,
            start:"top 100%",
        }
    });
};

locomotiveAnimation()
navAnimation();
page2Animation()
page3VideoAnimation()
pikaSectionAniamation()
proDeleveryStrategy()
movingAniamtion()


 