//------------Menu-----------------
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  let x = window.pageYOffset; // Thêm let để khai báo biến
  if (x > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
const imgContainer = document.querySelector(".aspect-ratio-169");
const dotItem = document.querySelectorAll(".dot");
let imgNumber = imgPosition.length;
let index = 0;

imgPosition.forEach(function (image, index) {
  image.style.left = index * 100 + "%";
  dotItem[index].addEventListener("click", function () {
    slider(index);
  });
});

function imgSlide() {
  index++;
  if (index >= imgNumber) {
    index = 0;
  }
  slider(index); // Loại bỏ khối lệnh thừa
}

function slider(index) {
  imgContainer.style.left = "-" + index * 100 + "%";
  const dotActive = document.querySelector(".active");
  dotActive.classList.remove("active");
  dotItem[index].classList.add("active");
}

setInterval(imgSlide, 5000);

//--------------Menu-SLIDERBAR-CARTEGORY--------------
const itemsliderbar = document.querySelectorAll(".cartegory-left-li");
itemsliderbar.forEach(function (menu) {
  menu.addEventListener("click", function () {
    menu.classList.toggle("block");
  });
});

//-------------Product------------------------
const bigImg = document.querySelector(".product-content-left-big-img img");
const smalImg = document.querySelectorAll(
  ".product-content-left-small-img img"
);
smalImg.forEach(function (imgItem, X) {
  imgItem.addEventListener("click", function () {
    bigImg.src = imgItem.src;
  });
});

const baoquan = document.querySelector(".baoquan");
const chitiet = document.querySelector(".chitiet");

if (baoquan) {
  baoquan.addEventListener("click", function () {
    document.querySelector(
      ".product-content-right-bottom-content-chitiet"
    ).style.display = "none";
    document.querySelector(
      ".product-content-right-bottom-content-baoquan"
    ).style.display = "block";
  });
}

if (chitiet) {
  chitiet.addEventListener("click", function () {
    document.querySelector(
      ".product-content-right-bottom-content-chitiet"
    ).style.display = "block";
    document.querySelector(
      ".product-content-right-bottom-content-baoquan"
    ).style.display = "none";
  });
}

const butTon = document.querySelector(".product-content-right-bottom-top");
if (butTon) {
  butTon.addEventListener("click", function () {
    document
      .querySelector(".product-content-right-bottom-content-big")
      .classList.toggle("activeB");
  });
}
