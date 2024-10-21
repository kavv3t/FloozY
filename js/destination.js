document.addEventListener('DOMContentLoaded', function() {
  const section = document.querySelector('.container > section');
  
  if (section) {
    section.addEventListener('click', () => {
      window.open('https://google.com', '_blank');
    });
  } else {
    console.error('Section non trouvée');
  }
});