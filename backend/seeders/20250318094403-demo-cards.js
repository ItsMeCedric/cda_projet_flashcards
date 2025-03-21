"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cards",
      [
        { id: 1, question: "Quelle est la capitale de la France ?", answer: "Paris", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 2, question: "Quelle est la capitale de l'Allemagne ?", answer: "Berlin", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 3, question: "Quelle est la capitale de l'Espagne ?", answer: "Madrid", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 4, question: "Quelle est la capitale de l'Italie ?", answer: "Rome", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 5, question: "Quelle est la capitale du Royaume-Uni ?", answer: "Londres", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 6, question: "Quelle est la capitale de la Suède ?", answer: "Stockholm", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 7, question: "Quelle est la capitale de la Pologne ?", answer: "Varsovie", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 8, question: "Quelle est la capitale de la Grèce ?", answer: "Athènes", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 9, question: "Quelle est la capitale de la Hongrie ?", answer: "Budapest", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 10, question: "Quelle est la capitale de la Belgique ?", answer: "Bruxelles", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 11, question: "Quelle est la capitale des Pays-Bas ?", answer: "Amsterdam", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 12, question: "Quelle est la capitale de la République tchèque ?", answer: "Prague", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 13, question: "Quelle est la capitale de l'Autriche ?", answer: "Vienne", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 14, question: "Quelle est la capitale du Portugal ?", answer: "Lisbonne", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 15, question: "Quelle est la capitale de la Finlande ?", answer: "Helsinki", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 16, question: "Quelle est la capitale de la Norvège ?", answer: "Oslo", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 17, question: "Quelle est la capitale de la Suisse ?", answer: "Berne", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 18, question: "Quelle est la capitale de l'Irlande ?", answer: "Dublin", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 19, question: "Quelle est la capitale du Danemark ?", answer: "Copenhague", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 20, question: "Quelle est la capitale de la Roumanie ?", answer: "Bucarest", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 1, createdAt: new Date(), updatedAt: new Date() },
      ],
      [
        { id: 21, question: "Quelle est la capitale de la Californie ?", answer: "Sacramento", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 22, question: "Quelle est la capitale du Texas ?", answer: "Austin", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 23, question: "Quelle est la capitale de New York ?", answer: "Albany", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 24, question: "Quelle est la capitale de la Floride ?", answer: "Tallahassee", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 25, question: "Quelle est la capitale de l'Illinois ?", answer: "Springfield", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 26, question: "Quelle est la capitale de la Pennsylvanie ?", answer: "Harrisburg", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 27, question: "Quelle est la capitale de l'Ohio ?", answer: "Columbus", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 28, question: "Quelle est la capitale de la Géorgie ?", answer: "Atlanta", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 29, question: "Quelle est la capitale du Michigan ?", answer: "Lansing", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 30, question: "Quelle est la capitale de la Caroline du Nord ?", answer: "Raleigh", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 31, question: "Quelle est la capitale du New Jersey ?", answer: "Trenton", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 32, question: "Quelle est la capitale de la Virginie ?", answer: "Richmond", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 33, question: "Quelle est la capitale du Washington ?", answer: "Olympia", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 34, question: "Quelle est la capitale de l'Arizona ?", answer: "Phoenix", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 35, question: "Quelle est la capitale du Massachusetts ?", answer: "Boston", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 36, question: "Quelle est la capitale de l'Indiana ?", answer: "Indianapolis", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 37, question: "Quelle est la capitale du Tennessee ?", answer: "Nashville", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 38, question: "Quelle est la capitale du Missouri ?", answer: "Jefferson City", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 39, question: "Quelle est la capitale du Maryland ?", answer: "Annapolis", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: 40, question: "Quelle est la capitale du Wisconsin ?", answer: "Madison", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 2, createdAt: new Date(), updatedAt: new Date() },
      ],
      [
        { id: 41, question: "Comment dit-on 'bonjour' en anglais ?", answer: "Hello", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 42, question: "Comment dit-on 'au revoir' en anglais ?", answer: "Goodbye", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 43, question: "Comment dit-on 'merci' en anglais ?", answer: "Thank you", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 44, question: "Comment dit-on 's'il vous plaît' en anglais ?", answer: "Please", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 45, question: "Comment dit-on 'oui' en anglais ?", answer: "Yes", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 46, question: "Comment dit-on 'non' en anglais ?", answer: "No", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 47, question: "Comment dit-on 'bonne nuit' en anglais ?", answer: "Good night", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 48, question: "Comment dit-on 'bonjour' en anglais ?", answer: "Good morning", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 49, question: "Comment dit-on 'comment ça va ?' en anglais ?", answer: "How are you?", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 50, question: "Comment dit-on 'je vais bien' en anglais ?", answer: "I am fine", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 51, question: "Comment dit-on 'quel est ton nom ?' en anglais ?", answer: "What is your name?", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 52, question: "Comment dit-on 'mon nom est' en anglais ?", answer: "My name is", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 53, question: "Comment dit-on 'où est la salle de bain ?' en anglais ?", answer: "Where is the bathroom?", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 54, question: "Comment dit-on 'je suis désolé' en anglais ?", answer: "I am sorry", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 55, question: "Comment dit-on 'je ne comprends pas' en anglais ?", answer: "I do not understand", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 56, question: "Comment dit-on 'parlez-vous anglais ?' en anglais ?", answer: "Do you speak English?", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 57, question: "Comment dit-on 'combien ça coûte ?' en anglais ?", answer: "How much does it cost?", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 58, question: "Comment dit-on 'je veux' en anglais ?", answer: "I want", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 59, question: "Comment dit-on 'je suis perdu' en anglais ?", answer: "I am lost", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 60, question: "Comment dit-on 'pouvez-vous m'aider ?' en anglais ?", answer: "Can you help me?", questionImg: null, answerImg: null, playedDate: new Date(), boxNumber: 0, deckId: 3, createdAt: new Date(), updatedAt: new Date() },
      ],      
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cards", { deckId: 1 }, {});
  },
};


