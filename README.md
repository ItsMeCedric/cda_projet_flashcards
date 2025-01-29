# FlashMcCards

Applications d'apprentissage type "flashcards"


# Lancer l'application React avec Vite

## Prérequis
Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version recommandée : LTS)
- [Git](https://git-scm.com/)

## Installation et Lancement

1. **Cloner le dépôt et se placer sur la branche `develop`**

   ```sh
   git clone <URL_DU_REPO>
   cd <NOM_DU_REPO>
   git checkout develop
   ```

2. **Installer les dépendances**

   ```sh
   npm install
   ```

3. **Démarrer le serveur de développement**

   ```sh
   npm run dev
   ```

4. **Accéder à l'application**
   
   Une fois le serveur lancé, ouvrez votre navigateur et accédez à :
   
   ```
   http://localhost:5173/
   ```

## Remarque

Le code se trouve dans le dossier *frontend*
Si vous rencontrez des problèmes liés aux dépendances, essayez de supprimer le dossier `node_modules` et `package-lock.json`, puis réinstallez les dépendances :

```sh
rm -rf node_modules package-lock.json
npm install
```