const container = document.getElementById('animation-container');
    
function createHeart(x, y) {
const heart = document.createElement('div');
heart.className = 'heart';

heart.style.left = `${x}px`;
heart.style.top = `${y}px`;

const size = 20;
heart.style.width = `${size}px`;
heart.style.height = `${size}px`;

heart.style.animationDuration = `${Math.random() * 3 + 5}s`;

container.appendChild(heart);

heart.addEventListener('animationend', () => {
    heart.remove();
});
}

setInterval(() => {
  const x = Math.random() * window.innerWidth;
  const y = window.innerHeight;
  createHeart(x, y);
}, 2000);

// document.addEventListener('click', (e) => {
//   const x = e.clientX;
//   const y = e.clientY;
//   createHeart(x, y);
// });

// document.getElementById('btn-yes').addEventListener('click', () => {
// window.location.href = 'https://www.ejemplo.com';
// });

const btnNo = document.getElementById('btn-no');
const section = btnNo.closest('section'); 
const bodyPadding = parseInt(window.getComputedStyle(document.body).paddingLeft, 10); 

btnNo.addEventListener('click', () => {
const sectionWidth = section.offsetWidth - 2 * bodyPadding; 
const sectionHeight = section.offsetHeight - 2 * bodyPadding; 

const btnWidth = btnNo.offsetWidth;
const btnHeight = btnNo.offsetHeight;

const newX = Math.random() * (sectionWidth - btnWidth) + bodyPadding;
const newY = Math.random() * (sectionHeight - btnHeight) + bodyPadding; 

btnNo.style.left = `${newX}px`;
btnNo.style.top = `${newY}px`;
});

const sections = document.querySelectorAll('.fade-in'); 

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5 
});

sections.forEach(section => {
  observer.observe(section);
});

const btnYes = document.getElementById("btn-yes");
const effectContainer = document.getElementById("effect-container");

btnYes.addEventListener("click", () => {
    const heart = document.createElement("div");
    heart.classList.add("big-heart");
    heart.textContent = "❤️";

    const rect = btnYes.getBoundingClientRect();
    heart.style.left = `${rect.left + rect.width / 2}px`;
    heart.style.top = `${rect.top}px`;

    effectContainer.appendChild(heart);

    heart.addEventListener("animationend", () => heart.remove());

    const spark = document.createElement("div");
    spark.classList.add("spark");

    spark.style.left = `${rect.left + rect.width / 2}px`;
    spark.style.top = `${rect.top + rect.height / 2}px`;

    effectContainer.appendChild(spark);

    spark.addEventListener("animationend", () => spark.remove());
});

document.getElementById('btn-yes').addEventListener('click', function () {
    this.classList.add('btn-glow'); 
});
