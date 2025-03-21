"use strict";

require("dotenv").config();
const argon2 = require("argon2");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertion des decks
    const decks = await queryInterface.bulkInsert(
      "Decks",
      [
        {
          name: "Capitales Européennes",
          subject: "Apprendre les capitales européennes",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Capitales Américaines",
          subject: "Apprendre les capitales des pays d'Amérique",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Capitales Asiatiques",
          subject: "Apprendre les capitales des pays asiatiques",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bases de l'Anglais",
          subject: "Vocabulaire de base en anglais",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bases de l'Espagnol",
          subject: "Vocabulaire de base en espagnol",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bases de l'Allemand",
          subject: "Vocabulaire de base en allemand",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bases de JavaScript",
          subject: "Apprendre les bases de JavaScript",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bases de HTML",
          subject: "Apprendre les bases de HTML",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bases de CSS",
          subject: "Apprendre les bases de CSS",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bases de Node.js",
          subject: "Apprendre les bases de Node.js",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );
    // Insertion des cartes pour chaque deck
    // Capitales Européennes
    await queryInterface.bulkInsert(
      "Cards",
      [
        {
          question: "Quelle est la capitale de la France ?",
          answer: "Paris",
          deckId: decks[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Quelle est la capitale de l'Allemagne ?",
          answer: "Berlin",
          deckId: decks[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Quelle est la capitale de l'Espagne ?",
          answer: "Madrid",
          deckId: decks[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Quelle est la capitale du Royaume-Uni ?",
          answer: "Londres",
          deckId: decks[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Quelle est la capitale de l'Italie ?",
          answer: "Rome",
          deckId: decks[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Quelle est la capitale de la Belgique ?",
          answer: "Bruxelles",
          deckId: decks[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Quelle est la capitale des Pays-Bas ?",
          answer: "Amsterdam",
          deckId: decks[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Quelle est la capitale de la Suède ?",
          answer: "Stockholm",
          deckId: decks[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Quelle est la capitale de la Suisse ?",
          answer: "Berne",
          deckId: decks[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Quelle est la capitale du Portugal ?",
          answer: "Lisbonne",
          deckId: decks[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Quelle est la capitale de la Grèce ?",
          answer: "Athènes",
          deckId: decks[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Quelle est la capitale de l'Autriche ?",
          answer: "Vienne",
          deckId: decks[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Quelle est la capitale de la Norvège ?",
          answer: "Oslo",
          deckId: decks[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Quelle est la capitale du Danemark ?",
          answer: "Copenhague",
          deckId: decks[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Quelle est la capitale de la Pologne ?",
          answer: "Varsovie",
          deckId: decks[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    // Bases de l'Allemand
    await queryInterface.bulkInsert(
      "Cards",
      [
        {
          question: "Comment dit-on 'bonjour' en allemand ?",
          answer: "Hallo",
          deckId: decks[5].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment dit-on 'merci' en allemand ?",
          answer: "Danke",
          deckId: decks[5].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment dit-on 'oui' en allemand ?",
          answer: "Ja",
          deckId: decks[5].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment dit-on 'non' en allemand ?",
          answer: "Nein",
          deckId: decks[5].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment dit-on 'au revoir' en allemand ?",
          answer: "Auf Wiedersehen",
          deckId: decks[5].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment dit-on 's'il vous plaît' en allemand ?",
          answer: "Bitte",
          deckId: decks[5].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment dit-on 'excusez-moi' en allemand ?",
          answer: "Entschuldigung",
          deckId: decks[5].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment dit-on 'bonjour, comment ça va ?' en allemand ?",
          answer: "Hallo, wie geht's?",
          deckId: decks[5].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment dit-on 'je m'appelle' en allemand ?",
          answer: "Ich heiße",
          deckId: decks[5].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment dit-on 'merci beaucoup' en allemand ?",
          answer: "Vielen Dank",
          deckId: decks[5].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment dit-on 'je ne parle pas bien allemand' en allemand ?",
          answer: "Ich spreche nicht gut Deutsch",
          deckId: decks[5].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment dit-on 'où est la gare' en allemand ?",
          answer: "Wo ist der Bahnhof?",
          deckId: decks[5].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment dit-on 'j'ai faim' en allemand ?",
          answer: "Ich habe Hunger",
          deckId: decks[5].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment dit-on 'je suis perdu' en allemand ?",
          answer: "Ich bin verloren",
          deckId: decks[5].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    // Bases de JavaScript
    await queryInterface.bulkInsert(
      "Cards",
      [
        {
          question: "Que signifie 'let' en JavaScript ?",
          answer: "Une déclaration de variable",
          deckId: decks[6].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Que fait 'console.log()' en JavaScript ?",
          answer: "Affiche un message dans la console",
          deckId: decks[6].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Quel type de données est 'true' en JavaScript ?",
          answer: "Boolean",
          deckId: decks[6].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Que fait 'typeof' en JavaScript ?",
          answer: "Renvoie le type de la variable",
          deckId: decks[6].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Quel est l'opérateur pour ajouter des variables en JavaScript ?",
          answer: "+",
          deckId: decks[6].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Qu'est-ce qu'une fonction en JavaScript ?",
          answer: "Un bloc de code exécutable",
          deckId: decks[6].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment déclarer une fonction en JavaScript ?",
          answer: "function nomDeFonction() {}",
          deckId: decks[6].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Que fait une boucle 'for' en JavaScript ?",
          answer: "Répète un bloc de code un certain nombre de fois",
          deckId: decks[6].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment accéder à un élément d'un tableau en JavaScript ?",
          answer: "Avec un index, par exemple tableau[0]",
          deckId: decks[6].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Que sont les objets en JavaScript ?",
          answer: "Des collections de propriétés et de valeurs",
          deckId: decks[6].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Que signifie '=='' en JavaScript ?",
          answer: "Comparaison de valeurs, sans vérifier le type",
          deckId: decks[6].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Que signifie '===' en JavaScript ?",
          answer: "Comparaison stricte (valeur et type)",
          deckId: decks[6].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Qu'est-ce que 'NaN' en JavaScript ?",
          answer: "Not a Number",
          deckId: decks[6].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Que signifie 'var' en JavaScript ?",
          answer: "Déclaration de variable",
          deckId: decks[6].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    // Bases de HTML
    await queryInterface.bulkInsert(
      "Cards",
      [
        {
          question: "Qu'est-ce qu'un élément <div> en HTML ?",
          answer: "Un conteneur générique",
          deckId: decks[7].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment insérer une image en HTML ?",
          answer: "<img src='url'>",
          deckId: decks[7].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Que fait la balise <a> en HTML ?",
          answer: "Définit un lien hypertexte",
          deckId: decks[7].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Que signifie 'DOCTYPE' en HTML ?",
          answer: "Indique la version du HTML utilisée",
          deckId: decks[7].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Qu'est-ce qu'un formulaire en HTML ?",
          answer: "Un ensemble d'éléments pour collecter des informations",
          deckId: decks[7].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment insérer un lien vers un fichier CSS en HTML ?",
          answer: "<link rel='stylesheet' href='style.css'>",
          deckId: decks[7].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Que fait la balise <table> en HTML ?",
          answer: "Crée un tableau",
          deckId: decks[7].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Que signifie <head> en HTML ?",
          answer: "La section du document contenant les métadonnées",
          deckId: decks[7].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Quelle balise définit le titre de la page web en HTML ?",
          answer: "<title>",
          deckId: decks[7].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment insérer une vidéo en HTML ?",
          answer: "<video src='url'>",
          deckId: decks[7].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Quelle est la fonction de la balise <meta> en HTML ?",
          answer: "Définir des informations sur le document",
          deckId: decks[7].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Que fait la balise <p> en HTML ?",
          answer: "Définit un paragraphe",
          deckId: decks[7].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment créer une liste ordonnée en HTML ?",
          answer: "<ol><li>...</li></ol>",
          deckId: decks[7].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    // Bases de CSS
    await queryInterface.bulkInsert(
      "Cards",
      [
        {
          question: "Comment changer la couleur de fond en CSS ?",
          answer: "background-color",
          deckId: decks[8].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment définir la taille de police en CSS ?",
          answer: "font-size",
          deckId: decks[8].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment rendre un élément centré en CSS ?",
          answer: "text-align: center",
          deckId: decks[8].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Que signifie 'id' en CSS ?",
          answer: "Un identifiant unique pour un élément",
          deckId: decks[8].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment appliquer un style à tous les <p> en CSS ?",
          answer: "p { ... }",
          deckId: decks[8].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment ajouter une bordure en CSS ?",
          answer: "border: 1px solid black",
          deckId: decks[8].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment définir l'espace entre les éléments en CSS ?",
          answer: "margin",
          deckId: decks[8].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment créer un arrière-plan avec une image en CSS ?",
          answer: "background-image: url('image.jpg')",
          deckId: decks[8].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment appliquer un style uniquement sur les éléments au survol en CSS ?",
          answer: "element:hover",
          deckId: decks[8].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Que signifie 'class' en CSS ?",
          answer: "Une classe utilisée pour styliser plusieurs éléments",
          deckId: decks[8].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment changer la couleur du texte en CSS ?",
          answer: "color",
          deckId: decks[8].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment modifier la largeur d'un élément en CSS ?",
          answer: "width",
          deckId: decks[8].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Que fait 'display: flex;' en CSS ?",
          answer: "Crée un conteneur flexible",
          deckId: decks[8].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    // Bases de Node.js
    await queryInterface.bulkInsert(
      "Cards",
      [
        {
          question: "Qu'est-ce que Node.js ?",
          answer: "Un environnement d'exécution JavaScript côté serveur",
          deckId: decks[9].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment créer un serveur HTTP avec Node.js ?",
          answer: "const http = require('http'); http.createServer(...)",
          deckId: decks[9].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Que signifie NPM dans Node.js ?",
          answer: "Node Package Manager",
          deckId: decks[9].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment installer un paquet avec NPM ?",
          answer: "npm install <package-name>",
          deckId: decks[9].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment lire un fichier avec Node.js ?",
          answer: "fs.readFile()",
          deckId: decks[9].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Que fait 'require' en Node.js ?",
          answer: "Importe des modules dans le fichier",
          deckId: decks[9].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Qu'est-ce qu'une route dans Node.js ?",
          answer: "Une URL associée à une fonction de traitement",
          deckId: decks[9].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment démarrer un serveur avec Node.js ?",
          answer: "server.listen(port)",
          deckId: decks[9].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment créer une API REST avec Node.js ?",
          answer: "En utilisant Express.js",
          deckId: decks[9].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Qu'est-ce qu'un callback en Node.js ?",
          answer: "Une fonction passée comme argument à une autre fonction",
          deckId: decks[9].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Que fait 'process.env' en Node.js ?",
          answer: "Accède aux variables d'environnement",
          deckId: decks[9].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment installer Express.js ?",
          answer: "npm install express",
          deckId: decks[9].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Comment définir des variables d'environnement dans Node.js ?",
          answer: "process.env.VAR_NAME = 'value'",
          deckId: decks[9].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
