### Dictionnaire des données

| Nom               | Description                                             | Type    | Commentaire |
| ----------------- | ------------------------------------------------------- | ------- | ----------- |
| username          | pseudo de l'utilisateur                                 | text    |             |
| lastName          | nom de l'utilisateur                                    | text    | optionel    |
| firstName         | prénom de l'utilisateur                                 | text    | optionel    |
| email             | addresse mail de l'utilisateur                          | text    |             |
| profilePictureUrl | url de photo du profil                                  | text    |             |
| verifiedEmail     | si le mail a été vérifié                                | bool    |             |
| hash              | hash argon2 du mot de passe de l'utilisateur            | text    |             |
|                   |                                                         |         |             |
| name              | nom du deck                                             | text    |             |
| subject           | sujet sur lequel se porte le contenu du deck            | text    |             |
| downloads         | nombre de téléchargements du deck                       | integer |             |
| mark              | note sur X du deck (0 nul, X excellent)                 | integer |             |
|                   |                                                         |         |             |
| question          | question sur la carte                                   | text    |             |
| answer            | réponse sur la carte                                    | text    |             |
| questionImg       | url d'une image à afficher avec la question d'une carte | text    | optionel    |
| answerImg         | url d'une image à afficher avec la réponse d'une carte  | text    | optionel    |
| playedDate        | date à laquelle la question a été répondue              | date    |             |
| boxNumber         | numéro du compartiment (Leitner)                        | integer |             |