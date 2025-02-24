import { Optional, Model } from "sequelize";

interface CardAttributes {
  id: number;
  question: string;
  questionImg: string;
  answer: string;
  answerImg: string;
  playedDate: Date;
  boxNumber: number;
}

interface CardCreationAttributes extends Optional<CardAttributes, "id" | "playedDate" | "boxNumber"> {}

interface CardInstance extends Model<CardAttributes, CardCreationAttributes>, CardAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}
