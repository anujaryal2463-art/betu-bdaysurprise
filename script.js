/* ===========================
   LOADER
=========================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},800);

},3000);

});

/* ===========================
   PASSWORD
=========================== */

const PASSWORD="24062003"; // Change this

function unlock(){

const input=document.getElementById("password").value;

if(input===PASSWORD){

document.getElementById("lockScreen").style.display="none";

document.getElementById("website").style.display="block";

launchConfetti();

window.scrollTo({

top:0,

behavior:"smooth"

});

}
else{

const wrong=document.getElementById("wrong");

wrong.innerHTML="Wrong Password ❤️";

wrong.style.animation="fade .5s";

}

}

document
.getElementById("password")
.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

unlock();

}

});

/* ===========================
   CONFETTI
=========================== */

function launchConfetti(){

confetti({

particleCount:180,

spread:120,

origin:{y:.6}

});

setTimeout(()=>{

confetti({

particleCount:120,

spread:90,

origin:{y:.55}

});

},500);

}

/* ===========================
   SCROLL REVEAL
=========================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:.2
});

document.querySelectorAll(

".glass,.photo-card,.wish"

).forEach(el=>{

el.classList.add("reveal");

observer.observe(el);

});
/* ===========================
   PREMIUM CAMERA
=========================== */

const camera = document.getElementById("camera");
const photos = document.querySelectorAll(".photo-card");

let currentPhoto = 0;

camera.addEventListener("click", () => {

    // Camera press animation
    camera.style.transform = "scale(.92)";

    setTimeout(() => {
        camera.style.transform = "";
    }, 150);

    // Camera flash
    const flash = document.querySelector(".flash");

    flash.style.background = "#ffffff";
    flash.style.boxShadow = "0 0 60px white";

    setTimeout(() => {
        flash.style.background = "#ddd";
        flash.style.boxShadow = "none";
    }, 180);

    // Show one photo at a time
    if (currentPhoto < photos.length) {

        const card = photos[currentPhoto];

        card.style.display = "block";

        setTimeout(() => {

            card.style.opacity = "1";
            card.style.transform = "translateY(0) rotate(0deg)";

        }, 80);

        heartBurst(card);

        currentPhoto++;

    }

    // Finished
    else {

        camera.style.cursor = "default";

    }

});


/* ===========================
   HEART BURST
=========================== */

function heartBurst(element){

    for(let i=0;i<10;i++){

        const heart=document.createElement("span");

        heart.innerHTML="❤";

        heart.style.position="absolute";

        heart.style.left="50%";

        heart.style.top="50%";

        heart.style.pointerEvents="none";

        heart.style.fontSize=(12+Math.random()*12)+"px";

        heart.style.color="#ff5f93";

        heart.style.opacity="1";

        heart.style.transition="all 1s ease";

        document.body.appendChild(heart);

        const x=(Math.random()-0.5)*220;

        const y=(Math.random()-0.5)*220;

        requestAnimationFrame(()=>{

            heart.style.transform=`translate(${x}px,${y}px) scale(1.6)`;

            heart.style.opacity="0";

        });

        setTimeout(()=>{

            heart.remove();

        },1000);

    }

}


/* ===========================
   PHOTO ENTRANCE
=========================== */

photos.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(80px) rotate(-8deg)";

    card.style.transition="0.8s ease";

});


/* ===========================
   CAMERA HOVER GLOW
=========================== */

camera.addEventListener("mouseenter",()=>{

    camera.style.boxShadow="0 25px 60px rgba(255,95,147,.35)";

});

camera.addEventListener("mouseleave",()=>{

    camera.style.boxShadow="0 20px 45px rgba(0,0,0,.25)";

});
/* ===========================
   PREMIUM CAKE
=========================== */

const cake = document.getElementById("cake");
const wishes = document.querySelectorAll(".wish");

let cakeOpened = false;

cake.addEventListener("click", () => {

    if(cakeOpened) return;

    cakeOpened = true;

    // Cake animation
    cake.style.transform = "scale(1.08) rotate(-2deg)";

    setTimeout(() => {
        cake.style.transform = "scale(1)";
    },300);

    // Blow out candle
    const flame = document.querySelector(".flame");

    if(flame){

        flame.style.opacity = "0";

    }

    // Confetti
    confetti({

        particleCount:180,

        spread:100,

        origin:{y:.65}

    });

    // Reveal wishes
    wishes.forEach((wish,index)=>{

        setTimeout(()=>{

            wish.style.display="block";

            setTimeout(()=>{

                wish.style.opacity="1";
                wish.style.transform="translateY(0)";

            },80);

        },index*600);

    });

});

/* ===========================
   GIFT
=========================== */

const gift = document.getElementById("gift");
const giftMessage = document.getElementById("giftMessage");

let openedGift = false;

gift.addEventListener("click",()=>{

    if(openedGift) return;

    openedGift=true;

    gift.style.transform="scale(1.2) rotate(12deg)";

    setTimeout(()=>{

        gift.innerHTML="🧸";

        gift.style.transform="scale(1)";

    },400);

    setTimeout(()=>{

        giftMessage.style.display="block";

        giftMessage.style.opacity="1";

    },500);

});

/* ===========================
   TYPEWRITER EFFECT
=========================== */

const typing=document.getElementById("typing");

const fullText=typing.innerHTML;

typing.innerHTML="";

let index=0;

function typeWriter(){

    if(index<fullText.length){

        typing.innerHTML+=fullText.charAt(index);

        index++;

        setTimeout(typeWriter,30);

    }

}

const typingObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

typeWriter();

typingObserver.disconnect();

}

});

});

typingObserver.observe(typing);

/* ===========================
   PHOTO TILT
=========================== */

photos.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;

const rotateX=-(y-rect.height/2)/18;

card.style.transform=

`perspective(900px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotate(0deg) scale(1)";

});

});

/* ===========================
   FINAL CONFETTI
=========================== */

const endSection=document.querySelector(".end");

const endObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

confetti({

particleCount:120,

spread:120,

origin:{y:.7}

});

endObserver.disconnect();

}

});

});

endObserver.observe(endSection);
// global soft floating movement

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth)*10;
const y=(e.clientY/window.innerHeight)*10;

document.body.style.backgroundPosition=
`${x}px ${y}px`;

});
