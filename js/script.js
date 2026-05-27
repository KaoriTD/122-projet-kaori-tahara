"use strict";

// Tableau de données — à générer avec Copilot / une IA
// Rating by https://www.sanrio.co.jp/special/characterranking/2025/en/result/
let data = [
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

// Eléments du DOM
const btnSort = document.getElementById("btn-sort");
const searchInput = document.getElementById("search");
const form = document.getElementById("form-add");
const inputName = document.getElementById("input-name");
const inputCategory = document.getElementById("input-category");
const inputRanking = document.getElementById("input-ranking");
const list = document.getElementById("list");

// Sens du tri
let sortAsc = false; // Tri DESC par défaut

/**
 * Rafraîchit l'affichage en combinant filtre et tri.
 * Filtre d'abord selon la recherche, puis trie selon l'état sortAsc.
 */
function refresh() {
    const query = searchInput.value.toLowerCase();

    // 1. Filtrer selon le champ de recherche
    let result = data.filter(item =>
        item.name.toLowerCase().includes(query)
    );

    // 2. Trier selon l'état du bouton
    result = [...result].sort((a, b) =>
        sortAsc ? a.ranking - b.ranking : b.ranking - a.ranking
    );

    // 3. Afficher le résultat
    afficherCharacters(result);
}

// Tri : on inverse l'état, on met à jour le bouton, puis on rafraîchit
btnSort.addEventListener("click", () => {
    sortAsc = !sortAsc;
    btnSort.textContent = sortAsc ? "Sort by ranking ↑ (ASC)" : "Sort by ranking ↓ (DESC)";
    refresh();
});

// Recherche : à chaque frappe, on rafraîchit
searchInput.addEventListener("input", refresh);

// Formulaire : add a character
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = inputName.value.trim();
    const rating = Number(inputRanking.value);

    // Vérification du nom
    if (!name) {
        alert("Le nom est requis.");
        inputName.focus(); // Replace le curseur dans le champ problématique
        return;
    }

    // Vérification de la note
    if (!rating || rating < 1 || rating > 40) {
        alert("La note doit être entre 1 et 40.");
        inputRanking.focus();
        return;
    }

    const newCharacter = {
        id: Date.now(),
        name: inputName.value.trim(),
        category: inputCategory.value,
        ranking: Number(inputRanking.value),
        year: new Date().getFullYear(),
        image: "img/hello-kitty.png", // Image par défaut
    };

    data.push(newCharacter); // Ajouter au tableau de données
    refresh();               // Rafraîchir l'affichage

    form.reset();            // Vider tous les champs
});

// Suppression : délégation sur le conteneur #list
document.getElementById("list").addEventListener("click", function (event) {
   const btn = event.target.closest(".btn-delete");
   if (!btn) return;

   const card = btn.closest(".card");
   const id = Number(card.dataset.id);

   if (!confirm("Delete this character?")) return;

   data = data.filter(item => item.id !== id);
   refresh();
});

/**
 * Affiche les Characters dans la page
 * @param {Array} tabCharacters - Tableau d'objets Characters à afficher
 */
function afficherCharacters(tabCharacters) {
    const container = document.getElementById("list");

    // Guard clause : si le tableau est vide, afficher un message et stopper
    if (tabCharacters.length === 0) {
        container.innerHTML = "<p class='no-result'>Aucun résultat pour cette recherche.</p>";
        return;
    }
    let html = "";

    // Parcours la liste et créer une carte par personnage
    tabCharacters.forEach(character => {
        html += `
        <article class="card" data-id="${character.id}">
            <img src="${character.image}" alt="${character.name}">
            <div class="card-body">
                <h2>${character.name}</h2>
                <p>${character.category} - ${character.year}</p>
                <span class="ranking">Rank #${character.ranking}</span>
                <button class="btn-delete">Supprimer</button>
            </div>
        </article>
    `;
    });
    list.innerHTML = html;
}

// Appel au chargement de la page
refresh();
