/* =========================
   PAGE NAVIGATION
========================= */

function nextPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   BALLOONS
========================= */

let poppedBalloons = 0;

function popBalloon(number) {

    const wrapper = document.querySelector(
        `.balloon-wrapper:nth-child(${number})`
    );

    if (wrapper.classList.contains("popped")) {
        return;
    }

    wrapper.classList.add("popped");

    poppedBalloons++;

    createPopEffect(wrapper);

    if (poppedBalloons === 4) {

        setTimeout(() => {

            document
                .getElementById("photoButton")
                .classList.remove("hidden");

        }, 1000);

    }
}


/* Balloon Pop Particles */

function createPopEffect(element) {

    const rect = element.getBoundingClientRect();

    for (let i = 0; i < 15; i++) {

        const particle = document.createElement("div");

        particle.innerHTML = "❤️";

        particle.style.position = "fixed";

        particle.style.left =
            rect.left + rect.width / 2 + "px";

        particle.style.top =
            rect.top + 60 + "px";

        particle.style.fontSize = "12px";

        particle.style.pointerEvents = "none";

        particle.style.zIndex = "100";

        document.body.appendChild(particle);

        const x =
            (Math.random() - 0.5) * 200;

        const y =
            (Math.random() - 0.5) * 200;

        particle.animate(
            [
                {
                    transform: "translate(0,0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${x}px,${y}px)`,
                    opacity: 0
                }
            ],
            {
                duration: 800,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            particle.remove();
        }, 800);
    }
}


/* =========================
   PHOTOS
========================= */

const photos = [

    {
        image: "photos/photo1.jpg",
        title: "My favorite smile ❤️",
        text: "Your smile can make even an ordinary day beautiful."
    },

    {
        image: "photos/photo2.jpg",
        title: "A beautiful memory ✨",
        text: "Some moments become memories that we never want to forget."
    },

    {
        image: "photos/photo3.jpg",
        title: "You are special ❤️",
        text: "Life feels a little more beautiful with you in it."
    },

    {
        image: "photos/photo4.jpg",
        title: "Forever grateful 💕",
        text: "I'm grateful for every beautiful moment we have shared."
    },

    {
        image: "photos/photo5.jpg",
        title: "Just the beginning 🌙",
        text: "I hope we create many more beautiful memories together."
    }

];

let currentPhoto = 0;


function updatePhoto() {

    const image =
        document.getElementById("memoryPhoto");

    const title =
        document.getElementById("photoTitle");

    const text =
        document.getElementById("photoText");

    const number =
        document.getElementById("photoNumber");


    image.style.opacity = "0";

    setTimeout(() => {

        image.src =
            photos[currentPhoto].image;

        title.innerText =
            photos[currentPhoto].title;

        text.innerText =
            photos[currentPhoto].text;

        number.innerText =
            `${currentPhoto + 1} / ${photos.length}`;

        image.style.opacity = "1";

    }, 200);

}


function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    updatePhoto();
}


function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    updatePhoto();
}


/* =========================
   LETTER
========================= */

function openLetter() {

    const envelope =
        document.getElementById("envelope");

    const letter =
        document.getElementById("letterContent");

    envelope.classList.add("open");

    setTimeout(() => {

        letter.classList.add("show");

        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 700);
}


/* =========================
   FLOATING HEARTS
========================= */

function createFloatingHeart() {

    const heart =
        document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML =
        ["❤️", "💕", "💗", "💖", "✨"][
            Math.floor(Math.random() * 5)
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        15 + Math.random() * 20 + "px";

    heart.style.animationDuration =
        4 + Math.random() * 5 + "s";

    document
        .querySelector(".hearts")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}


setInterval(createFloatingHeart, 700);
