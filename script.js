// ======================
// PIN SYSTEM
// ======================

const correctPin = "2111";
let currentPin = "";

function addPin(number){

    if(currentPin.length < 4){

        currentPin += number;

        document.getElementById("pinInput").value =
        currentPin;

    }

}

function clearPin(){

    currentPin =
    currentPin.slice(0,-1);

    document.getElementById("pinInput").value =
    currentPin;

}

function checkPin(){

    if(currentPin === correctPin){

        document.getElementById("pinScreen")
        .style.display = "none";

        document.getElementById("website")
        .classList.remove("hidden");

        createHearts();

    }else{

        alert("Wrong PIN ❤️");

        currentPin = "";

        document.getElementById("pinInput").value = "";

    }

}

// ======================
// OPEN HEART
// ======================

function openHeart(){

    const music =
    document.getElementById("music");

    music.play();

    const bottleSection =
    document.getElementById("bottleSection");

    bottleSection.classList.remove("hidden");

    bottleSection.scrollIntoView({
        behavior:"smooth"
    });

}

// ======================
// FLOATING HEARTS
// ======================

function createHearts(){

    const hearts =
    document.getElementById("hearts");

    setInterval(()=>{

        const heart =
        document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left =
        Math.random()*100 + "%";

        heart.style.fontSize =
        (Math.random()*20 + 15) + "px";

        heart.style.animationDuration =
        (Math.random()*4 + 5) + "s";

        hearts.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },9000);

    },1200);

}

// ======================
// BOTTLE
// ======================

function breakBottle(){

    const bottle =
    document.getElementById("bottle");

    bottle.classList.add(
        "bottle-break"
    );

    createFlowerBurst();

    setTimeout(()=>{

        document.getElementById(
            "letterContainer"
        ).style.display = "flex";

        showLetter();

    },700);

}

// ======================
// FLOWER BURST
// ======================

function createFlowerBurst(){

    const flowers =
    document.getElementById("flowers");

    const emojis = [
        "🌹",
        "🌷",
        "🌸",
        "💐",
        "🌺"
    ];

    for(let i=0;i<15;i++){

        const flower =
        document.createElement("div");

        flower.className = "flower";

        flower.innerHTML =
        emojis[
            Math.floor(
                Math.random() *
                emojis.length
            )
        ];

        flower.style.setProperty(
            "--x",
            (Math.random()*500-250)+"px"
        );

        flower.style.setProperty(
            "--y",
            (Math.random()*-400-50)+"px"
        );

        flower.style.animation =
        "flowerBurst 2s ease-out forwards";

        flowers.appendChild(flower);

        setTimeout(()=>{

            flower.remove();

        },2000);

    }

}

// ======================
// LETTER
// ======================

function showLetter(){

    const message = `

Happy Birthday, Achilles ❤️

Today is your special day.

I just wanted to remind you
how amazing and special you are.

May happiness,
good health,
and beautiful moments
always be with you.

Thank you for being you.

Enjoy your day
and keep smiling ❤️

With love,

Kakak Ian ❤️

`;

    document.getElementById(
        "letterText"
    ).innerText = message;

}

// ======================
// QUIZ
// ======================

let currentQuestion = 0;

const questions =
document.querySelectorAll(
    ".question"
);

function checkAnswer(
    button,
    isCorrect
){

    if(isCorrect){

        button.classList.add(
            "correct"
        );

        setTimeout(()=>{

            questions[
                currentQuestion
            ].classList.remove(
                "active"
            );

            currentQuestion++;

            if(
                currentQuestion <
                questions.length
            ){

                questions[
                    currentQuestion
                ].classList.add(
                    "active"
                );

            }else{

                createExplosion();

                setTimeout(()=>{

                    document
                    .getElementById(
                        "quizSuccess"
                    )
                    .classList
                    .remove(
                        "hidden"
                    );

                    document
                    .getElementById(
                        "quizSuccess"
                    )
                    .scrollIntoView({
                        behavior:"smooth"
                    });

                },1800);

            }

        },700);

    }else{

        button.classList.add(
            "wrong"
        );

        setTimeout(()=>{

            button.classList.remove(
                "wrong"
            );

        },700);

    }

}

// ======================
// FINAL EXPLOSION
// ======================

function createExplosion(){

    const emojis = [
        "❤️",
        "💖",
        "💝",
        "✨",
        "🎉",
        "🌹"
    ];

    document.body.animate([
        {
            transform:"translateX(-5px)"
        },
        {
            transform:"translateX(5px)"
        },
        {
            transform:"translateX(-5px)"
        },
        {
            transform:"translateX(0)"
        }
    ],{
        duration:300
    });

    for(let i=0;i<50;i++){

        const item =
        document.createElement(
            "div"
        );

        item.innerHTML =
        emojis[
            Math.floor(
                Math.random() *
                emojis.length
            )
        ];

        item.style.position =
        "fixed";

        item.style.left =
        "50%";

        item.style.top =
        "50%";

        item.style.fontSize =
        "2rem";

        item.style.pointerEvents =
        "none";

        item.style.zIndex =
        "9999";

        document.body
        .appendChild(item);

        const x =
        (Math.random()*1000)
        -500;

        const y =
        (Math.random()*800)
        -400;

        item.animate([
        {
            transform:
            "translate(0,0) scale(.3)",
            opacity:1
        },
        {
            transform:
            `translate(${x}px,${y}px) scale(1.5)`,
            opacity:0
        }
        ],{
            duration:1800,
            easing:"ease-out"
        });

        setTimeout(()=>{

            item.remove();

        },1800);

    }

}
