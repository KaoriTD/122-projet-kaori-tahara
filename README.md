# 🎀 Sanrio Character Collection 💖

Projet JavaScript — Cours 122 (ESIG)

## 🌸 Description

Ce projet gère des données sur 14 personnages de Sanrio 💖
Chaque personnage est représenté par plusieurs informations comme son nom, sa catégorie, son année de création, son image et une note inspirée du Sanrio Character Ranking 2025 🏆

J’ai choisi cette thématique car j’aime l’univers de Sanrio et ses personnages mignons, ce qui rend le projet plus amusant à réaliser ✨
Cela permet aussi de travailler avec des données simples tout en créant une petite collection visuelle agréable 🌸

## 🔗 Lien GitHub Pages

👉 https://kaoritd.github.io/122-projet-kaori-tahara/

## ⚙️ Fonctionnalités

- 📋 Affichage dynamique de la liste
- 🔽 Tri par plusieurs critères
- 🔍 Recherche en temps réel
- ➕ Ajout via formulaire
- ❌ Suppression d'éléments
- 📱 Responsive (mobile + desktop)

## 📸 Captures d'écran

<img width="636" height="877" alt="image" src="https://github.com/user-attachments/assets/a3b73199-bfa8-4f38-9321-15b10a8a3607" />


## 🤖 Transparence IA

### 🛠️ Outils utilisés
Copilot et ChatGPT

### 💬 Prompts utilisés
#### Générer les données
Je suis étudiant en informatique et je crée un site web en JavaScript
pour gérer une collection de charactères de Sanrio.

Voici un exemple de ce que je veux obtenir, avec UN objet :

const data = [
  {
    id: 1,
        name: "Hello Kitty",
        category: "Cat",
        year: 1974,
        ranking: 5,
        image: "img/hello-kitty.png",
  }
];

Génère un tableau de 14 objets avec EXACTEMENT les mêmes propriétés
que mon exemple. Les données doivent être réalistes et variées :
- Au moins 3-4 valeurs différentes pour [PROPRIÉTÉ CATÉGORIE, ex: category]
- Des valeurs numériques variées pour [PROPRIÉTÉ TRIABLE, ex: ranking]
- Les id de 1 à 4
- Pour chaque image, utilise les images stockés dans le dossier img/
Remplace le contenu du tableau data par ces nouvelles données.
Donne-moi UNIQUEMENT le code JavaScript, rien d'autre.

### 🧠 Ce que j'ai appris vs ce que l'IA a généré
La structure du projet a été fournie par l'enseignant, et l'implémentation des fonctionnalités principales (affichage, tri, recherche, ajout, suppression) a été réalisée durant les cours avec son accompagnement.

L’IA m’a aidé à :

* générer les données des 14 personnages Sanrio
* corriger certaines erreurs
* organiser et structurer les fichiers script.js, index.html et style.css pour faciliter la relecture
* formuler des textes plus clairs pour le README

Grâce à cela, j’ai mieux compris comment organiser un projet JavaScript et manipuler des données de manière dynamique 💡

---

<details>
<summary>📋 Exemple — Projet "Jeux Vidéo"</summary>

> Cet exemple montre à quoi pourrait ressembler un README complété.
> **Supprime cet encart** quand tu remplis ton propre README.

## Description

Application web pour gérer ma collection de jeux vidéo. J'ai choisi cette
ressource car je suis passionné de gaming et je voulais un catalogue personnel
pour trier mes jeux par note et plateforme.

## Lien GitHub Pages

https://mon-pseudo.github.io/esig-122-jeux-video/

## Fonctionnalités

- [x] Affichage dynamique de la liste (cartes avec image, nom, catégorie, note)
- [x] Tri par nom, note et année
- [x] Recherche en temps réel par nom
- [x] Ajout d'un jeu via formulaire
- [x] Suppression avec confirmation
- [x] Responsive (mobile + desktop)

## Captures d'écran

![Aperçu desktop](img/screenshot-desktop.png)
![Aperçu mobile](img/screenshot-mobile.png)

## Transparence IA

### Outils utilisés
- GitHub Copilot (dans WebStorm) pour la génération des données et l'autocomplétion
- ChatGPT pour comprendre `Array.sort()` avec `localeCompare()`

### Prompts utilisés
- "Génère un tableau de 10 jeux vidéo avec id, name, category, platform, rating, year, image"
- "Explique-moi comment trier un tableau d'objets par une propriété texte en JavaScript"

### Ce que j'ai appris vs ce que l'IA a généré
- **Généré par l'IA** : le tableau de données initial (10 objets)
- **Écrit par moi** : toute la logique d'affichage, tri, recherche, ajout et suppression
- **Appris grâce à l'IA** : j'ai compris comment `localeCompare()` gère les accents en français

</details>
