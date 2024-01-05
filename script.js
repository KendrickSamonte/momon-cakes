const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
    yValue = 0;

let rotateDegree = 0;

function update(cursorPosition){
    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;

        let isInLeft = 
        parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = 
        (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

        el.style.transform = `rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${-xValue * speedx}px)) 
        translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px)
        translateZ(${zValue * speedz}px) `;
    });
}

update(0);

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
    
    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
    
    update(e.clientX);
});



//

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }



var tl = gsap.timeline({
    paused: "true"
});
tl.to(".menu",{
    duration: 1,
    x: "0%",
    ease: Expo.easeInOut
});
tl.fromTo(".li",{
    y:"-100%",
    opacity: 0
},{
    duration: .5,
    opacity: 1,
    y: "0%",
    stagger: 0.25
});
tl.fromTo(".social-li",{
    y:"-50%",
    opacity: 0
},{
    duration:0.8,
    opacity: 1,
    stagger: 0.25,
    ease: Expo.easeOut
},
"-=0.5");

function toggle(){
    tl.play();
}
function togglec(){
    tl.reverse();
}


