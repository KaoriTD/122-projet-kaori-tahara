"use strict";

// Tableau de données — à générer avec Copilot / une IA
// Rating by https://www.sanrio.co.jp/special/characterranking/2025/en/result/
const data = [
    {
        id: 1,
        name: "Hello Kitty",
        category: "Cat",
        year: 1974,
        ranking: 5,
        image: "img/hello-kitty.png",
    },
    {
        id: 2,
        name: "Cinnamoroll",
        category: "Dog",
        year: 2001,
        ranking: 2,
        image: "img/cinnamoroll.png",
    },
    {
        id: 3,
        name: "My Melody",
        category: "Rabbit",
        year: 1975,
        ranking: 6,
        image: "img/my-melody.png",
    },
    {
        id: 4,
        name: "Pompompurin",
        category: "Dog",
        year: 1996,
        ranking: 1,
        image: "img/pompompurin.png",
    },
    {
        id: 5,
        name: "Kuromi",
        category: "Rabbit",
        year: 2005,
        ranking: 4,
        image: "img/kuromi.png",
    },
    {
        id: 6,
        name: "Keroppi",
        category: "Frog",
        year: 1988,
        ranking: 14,
        image: "img/keroppi.png",
    },
    {
        id: 7,
        name: "Bad Badtz-Maru",
        category: "Bird",
        year: 1993,
        ranking: 11,
        image: "img/bad-badtz-maru.png",
    },
    {
        id: 8,
        name: "Little Twin Stars",
        category: "Fairy",
        year: 1975,
        ranking: 7,
        image: "img/little-twin-stars.png"
    },
    {
        id: 9,
        name: "Tuxedosam",
        category: "Bird",
        year: 1979,
        ranking: 9,
        image: "img/tuxedosam.png"
    },
    {
        id: 10,
        name: "Pochacco",
        category: "Dog",
        year: 1989,
        ranking: 3,
        image: "img/pochacco.png",
    },
    {
        id: 11,
        name: "Hangyodon",
        category: "Mermen",
        year: 1985,
        ranking: 8,
        image: "img/hangyodon.png",
    },
    {
        id: 12,
        name: "Pekkle",
        category: "Bird",
        year: 1990,
        ranking: 10,
        image: "img/pekkle.png",
    },
    {
        id: 13,
        name: "Gudetama",
        category: "Egg",
        year: 2013,
        ranking: 16,
        image: "img/gudetama.png",
    },
    {
        id: 14,
        name: "Aggretsuko",
        category: "Red Panda",
        year: 2015,
        ranking: 36,
        image: "img/aggretsuko.png",
    }
];

/**
 * Trier les personnages à l'aide du bouton
 * @type {HTMLElement}
 */
// Bouton de tri
const btnSort = document.getElementById("btn-sort");
// Sens du tri
let sortAsc = false; // Tri DESC par défaut

btnSort.addEventListener("click", function () {

    // Tri UNE COPIE du tableau par notes DESC
    let sortedTab = [...data].sort(function (a, b) {
        return (sortAsc) ? a.ranking - b.ranking : b.ranking - a.ranking;
    });
    // Inverse le tableau
    sortAsc = !sortAsc;

    // Modify the button text
    btnSort.textContent = sortAsc ? "Sort by ranking ↑ (ASC)" : "Sort by ranking ↓ (DESC)";

    // Affiche tableau
    afficherCharacters(sortedTab);
});

/**
 * Recherche des personnages par leur nom.
 */
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = data.filter(item =>
        item.name.toLowerCase().includes(query)
    );
    afficherCharacters(filtered);
});

/**
 * Affiche les Characters dans la page
 * @param {Array} tabCharacters - Tableau d'objets Characters à afficher
 */
function afficherCharacters(tabCharacters) {

    //Récupère la liste #list
    const ulList = document.getElementById("list");
    // Variable temporaire pour construire
     let html= "";

//Parcours la liste et créer un li par character
    tabCharacters.forEach(character => {
        html += `
        <article class="card">
            <img src="${character.image}" alt="${character.name}">
            <div class="card-body">
                <h2>${character.name}</h2>
                <p>${character.category} - ${character.year}</p>
                <span class="ranking">Rank #${character.ranking}</span>
            </div>
        </article>
    `;
    });
    ulList.innerHTML = html;
}
// Ajouter la liste complète dans le DOM

// Appel au chargement de la page
afficherCharacters(data);