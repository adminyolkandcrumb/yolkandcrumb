/////////// ********* Function 1 : SLIDER *****************//

let slideIndex = 1;
let slideTimer;

// ตรวจสอบว่าหน้านี้มี Slider หรือไม่
const slides = document.getElementsByClassName("my-slides");
const dots = document.getElementsByClassName("dot");

// เริ่ม Slider เฉพาะหน้าที่มี .my-slides
if (slides.length > 0) {
    showSlides(slideIndex);
    startTimer();
}


// ฟังก์ชันกดปุ่ม ถัดไป/ย้อนกลับ
function plusSlides(n) {
    clearInterval(slideTimer);
    slideIndex += n;
    showSlides(slideIndex);
    startTimer();
}


// ฟังก์ชันเมื่อกดที่จุดวงกลม
function currentSlide(n) {
    clearInterval(slideTimer);
    slideIndex = n;
    showSlides(slideIndex);
    startTimer();
}


// ฟังก์ชันหลักในการควบคุมการแสดงภาพ
function showSlides(n) {

    // ถ้าหน้านี้ไม่มี Slider ให้ออกจาก function ทันที
    if (slides.length === 0) {
        return;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }


    // ซ่อนรูปภาพทั้งหมด
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    // เอา class active ออกจากจุดทั้งหมด
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }


    // แสดงรูปปัจจุบัน
    slides[slideIndex - 1].style.display = "block";


    // ป้องกันกรณีมี slide แต่ไม่มี dot
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add("active");
    }
}


// เปลี่ยนภาพอัตโนมัติทุก 4 วินาที
function startTimer() {

    // ไม่มี Slider ไม่ต้องสร้าง Timer
    if (slides.length === 0) {
        return;
    }

    clearInterval(slideTimer);

    slideTimer = setInterval(function () {

        slideIndex++;

        showSlides(slideIndex);

    }, 4000);
}



/////////// ********* Function 2 : HAMBURGER MENU *****************//

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");


// ตรวจสอบก่อนว่ามี element อยู่จริง
if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        // เปิด / ปิด Navigation
        mainNav.classList.toggle("active");

        // เปลี่ยน ☰ เป็น X
        menuToggle.classList.toggle("active");

        // Accessibility
        const isOpen = mainNav.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    // เมื่อกด PASTRY / DESSERT / DRINKS / ABOUT
    // ให้ปิด Hamburger menu
    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}