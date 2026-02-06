gsap.registerPlugin(ScrollTrigger);

/* HERO */

gsap.from(".hero-left",{
y:40,
opacity:0,
duration:1
});

gsap.from(".hero-right",{
x:40,
opacity:0,
duration:1
});

/* SECTIONS */

gsap.utils.toArray("section").forEach(section=>{
gsap.from(section,{
scrollTrigger:{
trigger:section,
start:"top 85%"
},
y:50,
opacity:0
});
});

