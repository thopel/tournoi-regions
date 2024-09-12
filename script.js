window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const scrollPosition = window.scrollY;
  header.classList.toggle("fixed", scrollPosition > 0);
});

const button = document.querySelector(".dialogBtn");
const h1 = document.querySelector("h1");

button.addEventListener("click", function () {
  h1.classList.add("dialog");
  setTimeout(() => h1.classList.remove("dialog"), 5000);
});

document.addEventListener("DOMContentLoaded", () => {
  const heroSubImage = document.querySelector(".hero .image-wrapper .sub-image");
  const heroSubtitle = document.querySelector(".hero .subtitle");
  const heroImage = document.querySelector(".hero .image-wrapper img");
  const productButtons = document.querySelectorAll(".curved-menu button");

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

  heroImage.classList.add("enter-top");
  heroSubImage.classList.add("rotate-in");

  function updateHero(productName) {
    const product = products[productName];
    if (product) {
      heroImage.classList.replace("enter-top", "exit-bottom");
      heroSubImage.classList.replace("rotate-in", "slide-out");

      heroImage.addEventListener("animationend", function onExitAnimationEnd(event) {
        if (event.animationName === "exit-bottom") {
          heroImage.removeEventListener("animationend", onExitAnimationEnd);

          heroSubtitle.innerHTML = product.subtitle;
          heroImage.src = product.image;
          heroSubImage.src = product.subImage;

          heroImage.classList.replace("exit-bottom", "enter-top");
          heroSubImage.classList.replace("slide-out", "rotate-in");
        }
      });

      productButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.textContent.trim() === productName);
      });
    }
  }

  productButtons.forEach((button) => {
    button.addEventListener("click", () => updateHero(button.textContent.trim()));
  });
});
