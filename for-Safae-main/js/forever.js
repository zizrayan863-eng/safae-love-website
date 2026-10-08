const messages = [

"One last thing...",

"I love you.",

"Te amo.",

"كنحبك",

"Je t'aime.",

"Ti amo.",

"Ich liebe dich.",

"Eu te amo.",

"愛してる",

"사랑해",

"我爱你",

"Seni seviyorum",

"Я люблю тебя",

"No matter what language I use...",

"My heart will always say the same thing."

];

const text = document.getElementById("text");
const card = document.getElementById("card");
const stars = document.getElementById("stars");
const hearts = document.getElementById("hearts");

for(let i=0;i<220;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.animationDuration=(2+Math.random()*5)+"s";
    star.style.animationDelay=Math.random()*5+"s";

    stars.appendChild(star);

}

setInterval(()=>{

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"%";

    heart.style.animationDuration=(6+Math.random()*5)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>heart.remove(),11000);

},500);

let index=0;

function showMessage(){

    if(index>=messages.length){

        text.style.opacity="0";

        setTimeout(()=>{

            card.classList.add("show");

        },1000);

        return;

    }

    text.innerHTML=messages[index];

    text.style.opacity="1";

    setTimeout(()=>{

        text.style.opacity="0";

        index++;

        setTimeout(showMessage,1000);

    },2200);

}

showMessage();
const music = document.getElementById("bgMusic");

document.addEventListener("click", () => {
    music.play();
}, { once: true });