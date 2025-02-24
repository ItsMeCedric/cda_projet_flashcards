import { Optional, Model } from "sequelize";

interface DeckAttributes {
  id: string;
  name: string;
  downloads: number;
  mark: number;
}

interface DeckCreationAttributes extends Optional<DeckAttributes, "id"> {}

interface DeckInstance extends Model<DeckAttributes, DeckCreationAttributes>, DeckAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}
