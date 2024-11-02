scroll(".partie3");

function scroll(balise) {
  const balisage = document.querySelector(balise);
  const mainAnimation = document.querySelector(balise);
  // let hasAnimated = false;
  
  // Fonction pour ajuster la translation et l'opacité en fonction du défilement
  const handleScroll = () => {
      // if (hasAnimated) return; // Si l'animation s'est déjà déroulée, on sort de la fonction
  
      const animationRect = mainAnimation.getBoundingClientRect(); // Position de la section dans le viewport
      const windowHeight = window.innerHeight; // Hauteur de la fenêtre
  
      if (balise === ".partie3" && animationRect.top < windowHeight + 600) { // && animationRect.bottom > 200 ne fonctionne pas apparemment
        balisage.style.transform = "translateY(0)"; // Translate le texte vers le centre
        balisage.style.opacity = 1; 
      } else {
        balisage.style.transform = "translateY(50%)";
        balisage.style.opacity = 0;
    }
  };
  
  window.addEventListener("scroll", handleScroll);
  
}