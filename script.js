window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

// Sélectionne le bouton et l'élément h1
const button = document.querySelector(".dialogBtn");
const h1 = document.querySelector("h1");

// Ajoute un écouteur d'événement sur le bouton
button.addEventListener("click", function () {
  // Ajoute la classe "dialog" à l'élément h1
  h1.classList.add("dialog");
  setTimeout(function () {
    // Supprime la classe "dialog" de l'élément h1
    h1.classList.remove("dialog");
  }, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
  // Sélection des éléments
  const heroSubImage = document.querySelector(".hero .image-wrapper .sub-image");
  const heroSubtitle = document.querySelector(".hero .subtitle");
  const heroImage = document.querySelector(".hero .image-wrapper img");
  const productButtons = document.querySelectorAll(".curved-menu button");

  // Créer les données des produits (description, images, etc.)
  const products = {
    "Vanilla being": {
      subtitle: "Les glaces Holy Scoops débarquent enfin en Normandie, la meilleure</br> région de France mérite les meilleures douceurs !",
      image: "./assets/ice-cream.webp",
      subImage: "./assets/spoon.webp",
    },
    Calvados: {
      subtitle: "L'eau-de-vie normande qui te fait dire « Je n'en boirai qu'un</br> petit verre », puis te fait danser la gigue avec les vaches.",
      image: "./assets/calvados.webp",
      subImage: "./assets/tire-bouchon.webp",
    },
    "Crème d’Isigny": {
      subtitle: "Le nuage de crème qui fait que même une tartine de pain devient</br> un festin royal.",
      image: "./assets/creme-isigny.webp",
      subImage: "./assets/empty-spoon.webp",
    },
    Camembert: {
      subtitle: "Le fromage qui sent assez fort pour te rappeler qu'il est dans</br> le frigo... même depuis l'autre bout de la maison.",
      image: "./assets/camembert.webp",
      subImage: "./assets/knife.webp",
    },
    "Tarte Normande": {
      subtitle: "La tarte où les pommes essaient désespérément de nager dans un</br> océan de crème, mais finissent toujours au fond de l'estomac.",
      image: "./assets/tarte.webp",
      subImage: "./assets/empty-spoon.webp",
    },
    Teurgoule: {
      subtitle: "Ce dessert qui mijote si longtemps que tu as le temps de vieillir</br> avec lui, mais le goût fait oublier les heures perdues devant le four.",
      image: "./assets/teurgoule.webp",
      subImage: "./assets/empty-spoon.webp",
    },
    "Trou Normand": {
      subtitle: "L'excuse officielle pour boire un petit coup entre deux plats,</br> histoire de faire de la place pour la suite.",
      image: "./assets/trou-normand.webp",
      subImage: "./assets/empty-spoon.webp",
    },
  };

  heroImage.classList.add("enter-top"); // Enlève l'animation d'entrée
  heroSubImage.classList.add("rotate-in"); // Enlève l'animation de rotation d'entrée

  function updateHero(productName) {
    const product = products[productName];
    if (product) {
      // Étape 1 : Faire descendre l'image principale et faire tourner l'image secondaire
      heroImage.classList.remove("enter-top"); // Enlève l'animation d'entrée
      heroImage.classList.add("exit-bottom"); // Ajoute l'animation de sortie par le bas

      heroSubImage.classList.remove("rotate-in"); // Enlève l'animation de rotation d'entrée
      heroSubImage.classList.add("slide-out"); // Ajoute l'animation de rotation inverse

      // Étape 2 : Attendre la fin de l'animation de sortie uniquement
      heroImage.addEventListener("animationend", function onExitAnimationEnd(event) {
        // Vérifie que l'animation terminée est bien celle de la sortie
        if (event.animationName === "exit-bottom") {
          // Supprimer l'écouteur d'événement pour éviter qu'il se déclenche à chaque fois
          heroImage.removeEventListener("animationend", onExitAnimationEnd);

          // Étape 3 : Changer l'image et le sous-titre
          heroSubtitle.innerHTML = product.subtitle;
          heroImage.src = product.image;
          heroSubImage.src = product.subImage;

          // Étape 4 : Faire entrer l'image principale par le haut et faire tourner l'image secondaire dans l'autre sens
          heroImage.classList.remove("exit-bottom"); // Retire l'animation de sortie
          heroImage.classList.add("enter-top"); // Ajoute l'animation d'entrée par le haut

          heroSubImage.classList.remove("slide-out"); // Retire l'animation de rotation inverse
          heroSubImage.classList.add("rotate-in"); // Ajoute l'animation de rotation d'entrée
        }
      });

      // Met à jour la classe active des boutons
      productButtons.forEach((btn) => {
        btn.classList.remove("active");
        if (btn.textContent.trim() === productName) {
          btn.classList.add("active");
        }
      });
    }
  }

  // Ajouter un event listener pour chaque bouton produit
  productButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.textContent;
      updateHero(productName);
    });
  });
});
