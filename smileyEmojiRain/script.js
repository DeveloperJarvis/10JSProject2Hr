function createSmile() {
    const smile = document.createElement("div");
    smile.classList.add("smile");

    smile.style.left = Math.random() * 100 + "vw";
    smile.style.animationDuration = Math.random() * 2 + 3 + "s";

    smile.innerText = "😄";

    document.body.appendChild(smile);

    setTimeout(() => {
        smile.remove();
    }, 5000);
}

setInterval(createSmile, 300);