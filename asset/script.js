const slider = document.getElementById("slider1");
const imgs = slider.querySelectorAll("img");
const dotContainer = slider.querySelector(".dots");
let idx = 0;

imgs.forEach((img, i) => {  // 建立小圓點
    let d = document.createElement("div");
    d.classList.add("dot");
    if (i === 0) d.classList.add("active");
    d.addEventListener("click", () => showSlide(i));
    dotContainer.appendChild(d);
});

const dots = dotContainer.querySelectorAll(".dot");

function showSlide(n) {  // 顯示第 n 張圖片
    imgs[idx].classList.remove("active");
    dots[idx].classList.remove("active");
    idx = n;
    imgs[idx].classList.add("active");
    dots[idx].classList.add("active");
}

setInterval(() => {  // 自動切換圖片
    let next = (idx + 1) % imgs.length;
    showSlide(next);
}, 3000);