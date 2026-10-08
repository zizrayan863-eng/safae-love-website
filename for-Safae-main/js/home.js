const stars = document.getElementById("stars");

for(let i=0;i<250;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.animationDuration=(2+Math.random()*6)+"s";
    star.style.animationDelay=Math.random()*5+"s";

    star.style.width=(1+Math.random()*2)+"px";
    star.style.height=star.style.width;

    stars.appendChild(star);

}

const begin=document.getElementById("begin");
const music=document.getElementById("bgMusic");

begin.addEventListener("click",()=>{

    music.play();

    document.body.style.transition="opacity 1s";
    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="letter.html";

    },1000);

}); 