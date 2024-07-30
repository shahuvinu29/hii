document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('cover').style.display = 'flex';
});

function openBook() {
  document.getElementById('cover').style.display = 'none';
  document.getElementById('toc').style.display = 'block';
}

let currentPage = 'toc';

function goToChapter(chapterId) {
  document.getElementById(currentPage).style.display = 'none';
  document.getElementById(chapterId).style.display = 'block';
  currentPage = chapterId;
  updateNavButtons();
}

function prevPage() {
  const chapters = document.querySelectorAll('.page');
  let index = Array.from(chapters).findIndex(chapter => chapter.id === currentPage);
  if (index > 0) {
    goToChapter(chapters[index - 1].id);
  }
}

function nextPage() {
  const chapters = document.querySelectorAll('.page');
  let index = Array.from(chapters).findIndex(chapter => chapter.id === currentPage);
  if (index < chapters.length - 1) {
    goToChapter(chapters[index + 1].id);
  }
}

function updateNavButtons() {
  const chapters = document.querySelectorAll('.page');
  let index = Array.from(chapters).findIndex(chapter => chapter.id === currentPage);
  document.getElementById('prev-btn').style.display = index > 0 ? 'block' : 'none';
  document.getElementById('next-btn').style.display = index < chapters.length - 1 ? 'block' : 'none';
}

updateNavButtons();



document.addEventListener('DOMContentLoaded', function() {
  const balloonContainer = document.getElementById('balloon-container');

  function createBalloon() {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      balloon.style.left = `${Math.random() * 100}vw`;
      balloon.style.animationDuration = `${Math.random() * 5 + 5}s`;
      balloon.style.opacity = Math.random();
      
      const balloonImg = document.createElement('img');
      balloonImg.src = 'balloon.png'; // Replace with your balloon PNG image URL
      balloonImg.style.width = '100%';
      
      balloon.appendChild(balloonImg);
      balloonContainer.appendChild(balloon);
      
      setTimeout(() => {
          balloon.remove();
      }, 10000);
  }

  setInterval(createBalloon, 500);
});


const numberOfImages = 10; // Number of images (adjust as needed)
const imageSrc = [
    "home 2.jpg",
    "bday1.png",
    "10k Celebration.png",
    "balloon.png",
    "Home page.jpg"
]; // Array of image sources

// Function to generate random properties and unique animation durations
function getRandomProperties() {
    const left = Math.random() * 100; // Random horizontal position in percentage
    const duration = Math.random() * 10 + 10; // Random duration between 10s and 20s
    const delay = Math.random() * 10; // Random delay between 0s and 10s
    return { 
        left: `${left}%`, 
        duration: `${duration}s`, 
        delay: `${delay}s`
    };
}

// Function to create and position images
function createImages(container) {
    for (let i = 0; i < numberOfImages; i++) {
        const img = document.createElement('img');
        img.src = imageSrc[i % imageSrc.length]; // Loop through image sources
        img.classList.add('floating-image');
        const { left, duration, delay } = getRandomProperties();
        img.style.left = `${left}`; // Horizontal position
        img.style.animationDuration = duration; // Animation duration
        img.style.animationDelay = delay; // Animation delay
        img.style.animationTimingFunction = 'linear'; // Ensures constant speed
        container.appendChild(img);
    }
}

// Initialize images in the container
const container = document.querySelector('.page'); // Adjust as needed
createImages(container);
