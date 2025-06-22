let btn = document.getElementById("shares");
let active = document.getElementById('contact');
let dctv = document.createElement('button');
dctv.classList.add('dctv');
dctv.innerHTML = "<img src='images/icon-share.svg' alt='dctv' />";
dctv.style.display = "none";
active.appendChild(dctv);

function updateDctvDisplay() {
    if (window.innerWidth > 375) {
        dctv.style.display = "none";
    }
}

btn.onclick = function() {
    if (active.style.display === "none" || active.style.display === "") {
        active.style.display = "flex";
        btn.classList.add("active");
        if (window.innerWidth <= 375) {
            dctv.style.display = "block";
        }
    } else {
        active.style.display = "none";
        btn.classList.remove("active");
        dctv.style.display = "none";
    }
};

dctv.onclick = function() {
    if (active.style.display === "flex") {
        active.style.display = "none";
        btn.classList.remove("active");
        dctv.style.display = "none";
    }
};

window.addEventListener('resize', updateDctvDisplay);