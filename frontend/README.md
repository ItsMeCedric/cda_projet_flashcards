# Frontend

Le site web (frontend) de FlashMcCards.

# Lancer le frontend

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (version recommandée : LTS)

## Installation

1. **Cloner le dépôt**

   ```sh
   git clone https://CCICampus@dev.azure.com/CCICampus/CDA-TP2425-G3/_git/CDA-TP2425-G3
   cd CDA-TP2425-G3/frontend
   ```

2. **Installer les dépendances**

   ```sh
   npm install
   ```

## Utilisation

### Production

1. **Compilez le projet**

   ```sh
   npm run build
   ```

2. **Ouvrir l'accès au public**

   Les fichiers à héberger se trouveront dans le dossier `dist/`. Il suffit de mettre ces fichiers sur un serveur nginx par exemple.

### Développement

1. **Démarrer le serveur de développement**

   ```sh
   npm run dev
   ```

2. **Accéder à l'application**

   Une fois le serveur lancé, ouvrez votre navigateur et accédez à `http://localhost:5173`

## Remarque

Si vous rencontrez des problèmes liés aux dépendances, essayez de supprimer le dossier `node_modules` et `package-lock.json`, puis réinstallez les dépendances :

```sh
rm -rf node_modules package-lock.json
npm install
```
