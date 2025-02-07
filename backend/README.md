# Backend

Le site web (backend) de FlashMcCards.

# Lancer le backend

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (version recommandée : LTS)
- [Postgres](https://www.postgresql.org/) avec une DB initialisée

## Installation

1. **Cloner le dépôt**

   ```sh
   git clone https://CCICampus@dev.azure.com/CCICampus/CDA-TP2425-G3/_git/CDA-TP2425-G3
   cd CDA-TP2425-G3/backend
   ```

2. **Installer les dépendances**

   ```sh
   npm install
   ```

3. **Créer un utilisateur pour la base de données**

```sh
sudo useradd -s /bin/false flashmccards

```

3. **Créer une base de données**

```sh
createdb flashmccards -O <USER SQL>
```

## Utilisation

1. **Lancez les migrations de la base de données**

   ```sh
   npx sequelize db:migrate
   ```

2. **Lancez le serveur**

   ```sh
   node src/index.js
   ```

3. **Accéder à l'application**

   Une fois le serveur lancé, ouvrez votre navigateur et accédez à `http://localhost:45882`

## Remarque

Si vous rencontrez des problèmes liés aux dépendances, essayez de supprimer le dossier `node_modules` et `package-lock.json`, puis réinstallez les dépendances :

```sh
rm -rf node_modules package-lock.json
npm install
```
