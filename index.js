let navs_with_sub = document.querySelectorAll(".has_sub");
let hero_img = document.querySelector(".hero_img");
let meun = document.querySelector(".menu_con");
let link = document.querySelector(".link_con");
let overlay = document.querySelector(".overlay");

navs_with_sub.forEach((with_sub) => {
  with_sub.addEventListener("click", function () {
    let sub = with_sub.querySelector(".submenu ul");
    let arrow = with_sub.querySelector(".arrow");
    arrow.classList.toggle("active");
    console.log(sub, arrow);
    sub.classList.toggle("active");
  });
});

window.addEventListener("resize", function () {
  if (this.window.innerWidth <= 768) {
    hero_img.src = "images/image-hero-mobile.png";
  } else {
    hero_img.src = "images/image-hero-desktop.png";
  }
});

if (this.window.innerWidth < 768) {
  hero_img.src = "images/image-hero-mobile.png";
  console.log(window.innerWidth);
} else if (this.window.innerWidth > 768) {
  hero_img.src = "images/image-hero-desktop.png";
}

meun.addEventListener("click", function () {
  meun.classList.toggle("active");
  link.classList.toggle("active");
  overlay.classList.toggle("active");
});
