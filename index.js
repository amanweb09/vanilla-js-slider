const nextArrow = document.querySelector('div.next');
const prevArrow = document.querySelector('div.prev');


let slide_index = 0;
showSlider(slide_index);

function showSlider(indexNum) {
    const slides = document.querySelectorAll('.slides');
    const currentSlide = slides[indexNum];

    currentSlide.style.display = 'block';
    currentSlide.classList.add('curent_slide');

    const dots = document.querySelectorAll('.dot')
    const currentDot = dots[indexNum];

    dots.forEach((dot) => {
        dot.classList.remove('current_dot')
    })

    currentDot.classList.add('current_dot')
}

const dots = document.querySelectorAll('.dot')
const currentDot = dots[slide_index];


setInterval(() => {
    const slides = document.querySelectorAll('.slides');

    slides.forEach((slide) => {
        slide.style.display = 'none'
    })

    slide_index += 1;

    if (slide_index >= slides.length) {
        slide_index = 0
    }
    showSlider(slide_index);

}, 3500);


nextArrow.addEventListener('click', () => {
    const slides = document.querySelectorAll('.slides');

    slides.forEach((slide) => {
        slide.style.display = 'none'
    })

    slide_index += 1;
    if (slide_index >= slides.length) {
        slide_index = 0
    }
    showSlider(slide_index);
})

prevArrow.addEventListener('click', () => {
    const slides = document.querySelectorAll('.slides');
    slides.forEach((slide) => {
        slide.style.display = 'none'
    })
    slide_index -= 1;
    if (slide_index <= 0) {
        slide_index = slides.length - 1
    }

    showSlider(slide_index);
})

function changeSlide(id) {
    const index_num = parseInt(id)
    slide_index = index_num - 1

    const slides = document.querySelectorAll('.slides');
    slides.forEach((slide) => {
        slide.style.display = 'none'
    })

    showSlider(slide_index);
}

