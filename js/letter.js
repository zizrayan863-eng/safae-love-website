const stars = document.querySelector(".stars");

for (let i = 0; i < 180; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDuration = (2 + Math.random() * 5) + "s";
    star.style.animationDelay = Math.random() * 5 + "s";
    stars.appendChild(star);
}

const hidden = document.getElementById("hiddenText");
const typing = document.getElementById("typing");

if (hidden && typing) {
    const text = hidden.value;

    let i = 0;

    function write() {
        typing.textContent = text.substring(0, i);

        if (i < text.length) {
            i++;
            setTimeout(write, 35);
        }
    }

    write();
}

document.getElementById("continue").onclick = () => {
    window.location.href = "reasons.html";
};
/* LIGHT FOLLOWS MOUSE */

const light=document.querySelector(".paper-light");

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/40;

const y=e.clientY/40;

light.style.transform=
`translate(${x}px,${y}px)`;

});
/* PARALLAX */

const book=document.getElementById("book");

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX-window.innerWidth/2)/80;

const y=(e.clientY-window.innerHeight/2)/80;

book.style.transform=

`rotateY(${x}deg) rotateX(${-y}deg)`;

});