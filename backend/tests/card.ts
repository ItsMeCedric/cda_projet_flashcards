import db from "../models/index";
import request from "supertest";
import app from "../src/app";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

let token: string | undefined = undefined;

beforeAll(async () => {
  dotenv.config();
  await db.sync({ force: true });
  await request(app)
    .post("/auth/register")
    .send({
      username: "jest",
      email: "jest@jest.com",
      password: "jest",
    })
    .set("Content-Type", "application/json");
  token = jwt.sign({ id: 1, role: "admin" }, process.env.JWTSECRET as string, { expiresIn: "10m" });
  return request(app)
    .post("/users/1/decks")
    .send({
      name: "jest deck",
      subject: "jest jest jest",
      userId: 1,
    })
    .set("Content-Type", "application/json")
    .set("Cookie", [`Authorization=Bearer%20${token}`])
    .then((res) => {
      expect(res.status).toBe(201);
    });
});

export const cardFlow = () =>
  describe("card creation + edit + delete", () => {
    describe("card creation", () => {
      test("create", () => {
        return request(app)
          .post("/users/1/decks/1/cards")
          .send({
            question: "jest",
            answer: "jest",
            deckId: 1,
          })
          .set("Content-Type", "application/json")
          .set("Cookie", [`Authorization=Bearer%20${token}`])
          .then((res) => {
            expect(res.status).toBe(201);
          });
      });
    });

    describe("card modification", () => {
      test("edit", () => {
        return request(app)
          .patch("/users/1/decks/1/cards/1")
          .send({
            question: "edited question",
          })
          .set("Content-Type", "application/json")
          .set("Cookie", [`Authorization=Bearer%20${token}`])
          .then(async () => {
            const res = await request(app)
              .get("/users/1/decks/1/cards/1")
              .set("Cookie", [`Authorization=Bearer%20${token}`]);
            expect(res.body.question).toBe("edited question");
          });
      });
    });

    describe("card deletion", () => {
      test("delete", () => {
        return request(app)
          .delete("/users/1/decks/1/cards/1")
          .set("Cookie", [`Authorization=Bearer%20${token}`])
          .then(async () => {
            const res = await request(app)
              .get("/users/1/decks/1/cards/1")
              .set("Cookie", [`Authorization=Bearer%20${token}`]);
            expect(res.statusCode).toBe(404);
          });
      });
    });
  });
