
window.onload = function () {
  // Welcome message animation
  const name = localStorage.getItem('userName');
  const welcomeElement = document.getElementById('welcome');

  if (name) {
    welcomeElement.textContent = `Welcome, ${name}! `;
    
  } else {
    welcomeElement.textContent = 'Welcome!';
  }
  
 



  // Delay text appearance
  setTimeout(() => {
    welcomeElement.classList.add('show');
  }, 100);

  const introElement = document.getElementById('intro');

  setTimeout(() => {
    welcomeElement.classList.add('show');
    introElement.classList.add('show');
  }, 100);

  // Slide-in div activation
  const slide = document.querySelector('.slide-in');
  if (slide) {
    slide.classList.add('active');
  }
};
