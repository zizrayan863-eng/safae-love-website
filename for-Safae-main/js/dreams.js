const dreams=[

"Meeting you for the very first time.",

"Hugging you and never wanting to let go.",

"Holding your hand while walking together.",

"Watching the sunset with you.",

"Giving you flowers.",

"Listening to music together.",

"Dancing with you in the middle of nowhere.",

"Watching Michael Jackson videos together.",

"Cooking together.",

"Traveling the world with you.",

"Looking at the stars together.",

"Celebrating your birthday together.",

"Taking silly photos together.",

"Laughing until we can't breathe.",

"Growing old together."

];

const text=document.getElementById("dreamText");
const number=document.getElementById("dreamNumber");
const button=document.getElementById("nextDream");
const stars=document.getElementById("stars");

for(let i=0;i<170;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDuration=(2+Math.random()*5)+"s";

stars.appendChild(star);

}

let current=0;

button.onclick=()=>{

current++;

if(current>=dreams.length){

window.location.href="forever.html";

return;

}

text.animate(

[
{opacity:0,transform:"translateY(20px)"},
{opacity:1,transform:"translateY(0)"}
],

{duration:500}

);

text.textContent=dreams[current];

number.textContent=`Dream #${current+1}`;

};