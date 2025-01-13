-- les 3 commandes commentées ne sont pas nécessaires avec Docker (Compose).

-- CREATE DATABASE flashcards;
-- CREATE USER flashcards WITH PASSWORD '6ODFzTfw4s6Fn6aRTLlIoPkN4oWXhOknF9s9bYgDRTY';
-- GRANT ALL PRIVILEGES ON DATABASE "flashcards" to flashcards;

CREATE TABLE IF NOT EXISTS Users(
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  firstName TEXT,
  lastName TEXT,
  email TEXT NOT NULL,
  profilePicture TEXT,
  verified BOOLEAN,
  hash TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Decks(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  subject TEXT NOT NULL,
  downloads INTEGER NOT NULL,
  mark INTEGER,
  userId INTEGER REFERENCES Users(id)
);

CREATE TABLE IF NOT EXISTS Cards(
  id SERIAL PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  questiomImg TEXT,
  answerImg TEXT,
  playedDate TIMESTAMP WITH TIME ZONE,
  box INTEGER,
  deckId INTEGER REFERENCES Decks(id)
  -- est-ce que c'est utile?
  -- userId INTEGER REFERENCES Users(id)
);
