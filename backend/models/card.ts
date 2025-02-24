"use strict";

import { DataTypes } from "sequelize";
import db from ".";
import { CardInstance } from "../src/@types/card";

const Card = db.define<CardInstance>("Card", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  question: DataTypes.STRING,
  answer: DataTypes.STRING,
  questionImg: DataTypes.STRING,
  answerImg: DataTypes.STRING,
  playedDate: DataTypes.DATE,
  boxNumber: DataTypes.NUMBER,
});

export default Card;

