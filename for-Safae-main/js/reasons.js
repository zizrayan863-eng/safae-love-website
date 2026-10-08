const reasons = [

"I love the way you make my days brighter.",
"I love your beautiful smile.",
"I love your laugh.",
"I love your kind heart.",
"I love your eyes.",
"I love your voice.",
"I love your personality.",
"I love your sweetness.",
"I love your intelligence.",
"I love how strong you are.",
"I love how caring you are.",
"I love your passion.",
"I love your sense of humor.",
"I love your confidence.",
"I love the way you think.",
"I love how you inspire me.",
"I love how unique you are.",
"I love every little thing about you.",
"I love how beautiful your soul is.",
"I love how you make me smile.",

"I love that you motivate me to become a better person.",
"I love learning Spanish because of you.",
"I love dreaming about meeting you.",
"I love imagining our first hug.",
"I love imagining our first kiss.",
"I love the future I see with you.",
"I love your dreams.",
"I love your goals.",
"I love your kindness to animals.",
"I love how much you love dogs.",
"I love that you love lilies.",
"I love your music taste.",
"I love that Michael Jackson makes you happy.",
"I love hearing about your day.",
"I love making you laugh.",
"I love making you smile.",
"I love seeing you happy.",
"I love talking to you for hours.",
"I love every message from you.",
"I love every good morning from you.",

"I love every good night from you.",
"I love your honesty.",
"I love your loyalty.",
"I love your beautiful heart.",
"I love your patience.",
"I love your cute moments.",
"I love your excitement.",
"I love your curiosity.",
"I love your soft side.",
"I love your strong side.",
"I love the way you care about people.",
"I love how respectful you are.",
"I love your positive energy.",
"I love your beautiful mind.",
"I love your beautiful heart even more.",
"I love the way you understand me.",
"I love how safe you make me feel.",
"I love the peace you bring me.",
"I love every conversation we have.",
"I love every memory we're creating.",

"I love believing in us.",
"I love the distance because it makes us stronger.",
"I love waiting for the day we finally meet.",
"I love imagining our future dates.",
"I love imagining holding your hand.",
"I love imagining watching sunsets with you.",
"I love imagining dancing with you.",
"I love imagining traveling together.",
"I love imagining laughing together.",
"I love imagining growing old together.",
"I love imagining our future home.",
"I love imagining our future family.",
"I love imagining every adventure with you.",
"I love your beautiful soul.",
"I love your beautiful heart.",
"I love the way you make me feel loved.",
"I love your support.",
"I love your trust.",
"I love your warmth.",
"I love everything that makes you... you.",

"I love that you came into my life.",
"I love every little detail about you.",
"I love the way you make ordinary days special.",
"I love your hugs, even if I still have to wait for them.",
"I love your future with me.",
"I love believing in destiny because of you.",
"I love how lucky I feel.",
"I love how much you've changed my life.",
"I love every dream that includes you.",
"I love the way you live in my heart.",
"I love missing you because it reminds me how much I love you.",
"I love counting the days until we meet.",
"I love every reason to love you.",
"I love writing this for you.",
"I love calling you Habibti.",
"I love knowing you're somewhere under the same sky.",
"I love that the moon sees both of us.",
"I love you today.",
"I'll love you tomorrow.",
"And I'll keep loving you... forever."

];

const reason = document.getElementById("reason");
const number = document.getElementById("number");
const button = document.getElementById("next");
const music = document.getElementById("bgMusic");
let musicStarted = false;
const stars = document.getElementById("stars");

for(let i=0;i<170;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDuration=(2+Math.random()*5)+"s";

star.style.animationDelay=Math.random()*5+"s";

stars.appendChild(star);

}

let current=0;

button.onclick=()=>{
if(!musicStarted){
    music.play();
    musicStarted = true;
}
current++;

if(current>=reasons.length){

window.location.href="dreams.html";

return;

}

reason.animate([

{opacity:0,transform:"translateY(20px)"},

{opacity:1,transform:"translateY(0px)"}

],{

duration:500

});

reason.textContent=reasons[current];

number.textContent=`Reason #${current+1}`;

}