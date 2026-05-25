const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
musicBtn.addEventListener("click", () => {
  music.play();
  musicBtn.innerText = "🎶 Müzik Çalıyor";
});
const btn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surpriseScreen");

btn.addEventListener("click", () => {
  surprise.classList.add("active");

  createHearts();
  createFireworks();
});

/* Kalpler */

function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = Math.random() * 30 + 20 + "px";
    heart.style.zIndex = "9999";
    heart.style.animation = "fall 4s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }, 200);
}

/* Havai fişek */

function createFireworks() {
  setInterval(() => {
    const firework = document.createElement("div");

    firework.style.position = "fixed";
    firework.style.width = "15px";
    firework.style.height = "15px";
    firework.style.borderRadius = "50%";
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 100 + "vh";
    firework.style.background = `hsl(${Math.random() * 360},100%,70%)`;
    firework.style.boxShadow = `
        0 0 40px white,
        0 0 80px pink,
        0 0 120px hotpink`;

    firework.style.zIndex = "9999";
    firework.style.animation = "boom 1s ease-out forwards";

    document.body.appendChild(firework);

    setTimeout(() => {
      firework.remove();
    }, 1000);
  }, 150);
}

/* Animasyonlar */

const style = document.createElement("style");

style.innerHTML = `

@keyframes fall{

    to{
        transform:translateY(110vh) rotate(360deg);
        opacity:0;
    }

}

@keyframes boom{

    from{
        transform:scale(0);
        opacity:1;
    }

    to{
        transform:scale(8);
        opacity:0;
    }

}

`;

document.head.appendChild(style);
