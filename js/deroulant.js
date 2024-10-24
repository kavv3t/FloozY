const toggleButton = document.querySelector('.menu-toggle');
const section = document.querySelector('.partie2');

toggleButton.addEventListener('click', () => {
  section.classList.toggle('expanded');
  if (section.classList.contains('expanded')) {
    toggleButton.innerHTML = "🡇";
  } else {
    toggleButton.innerHTML = "🡅";
  }
});
