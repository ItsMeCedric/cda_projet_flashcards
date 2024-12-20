| Nom               | Description                                             | Type    | Commentaire |
| ----------------- | ------------------------------------------------------- | ------- | ----------- |
| username          | pseudo de l'utilisateur                                 | text    |             |
| lastName          | nom de l'utilisateur                                    | text    | optionel    |
| firstName         | prenom de l'utilisateur                                 | text    | optionel    |
| email             | addresse mail de l'utilisateur                          | text    |             |
| profilePictureUrl | url de photo du profil                                  | text    |             |
| verifiedEmail     | si le mail a été vérifié                                | bool    |             |
| hash              | hash argon2 du mot de passe de l'utilisateur            | text    |             |
|                   |                                                         |         |             |
| name              | nom du deck                                             | text    |             |
| subject           | sujet sur lequel se porte le contenu du deck            | text    |             |
| downloads         | nombre de téléchargements du deck                       | integer |             |
| mark              | note sur 5 du deck (1 nul, 5 excellent)                 | integer |             |
| visiblity         | public ou privé (ou autre...)                           | integer | FK          |
| eval              | mode (evaluation ou non)                                | integer | FK          |
|                   |                                                         |         |             |
| question          | question sur la carte                                   | text    |             |
| answer            | réponse sur la carte                                    | text    |             |
| questionImg       | url d'une image à afficher avec la question d'une carte | text    |             |
| answerImg         | url d'une image à afficher avec la réponse d'une carte  | text    |             |
| nextPlayDate      | date à laquelle sera reposée la question                | date    |             |
| boxNumber         | numéro du compartiment (Leitner)                        | integer |             |
|                   |                                                         |         |             |
| visibility        | visibilité du deck (privé/public)                       | integer | FK          |
|                   |                                                         |         |             |
| mode              | mode (évaluation ou non)                                | integer | FK          |
