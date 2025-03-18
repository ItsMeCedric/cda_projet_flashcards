import { cardFlow } from "./card";
import { deckFlow } from "./deck";
import { userFlow } from "./user";

describe("all tests", () => {
  userFlow();
  deckFlow();
  cardFlow();
});
