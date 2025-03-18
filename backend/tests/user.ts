import db from "../models/index";
import request from "supertest";
import app from "../src/app";
import dotenv from "dotenv";

beforeAll(async () => {
  dotenv.config();
  await db.sync({ force: true });
});

export const userFlow = () =>
  describe("user auth flow", () => {
    describe("register", () => {
      test("register user", () => {
        return request(app)
          .post("/auth/register")
          .send({
            username: "jest",
            email: "jest@jest.com",
            password: "jest",
          })
          .set("Content-Type", "application/json")
          .then((res) => {
            expect(res.status).toBe(201);
          });
      });
    });

    describe("login", () => {
      test("login user", () => {
        return request(app)
          .post("/auth/login")
          .send({
            email: "jest@jest.com",
            password: "jest",
          })
          .set("Content-Type", "application/json")
          .then((res) => {
            expect(res.status).toBe(200);
          });
      });
    });
  });
