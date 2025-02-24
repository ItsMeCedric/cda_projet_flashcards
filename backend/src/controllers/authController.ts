import { Request, Response } from "express";
import authService from "../services/authService";

const register = (req: Request, res: Response) => {
  const data = req.body;
  const user = authService.register(data);
  res.status(201).json(user);
};

const login = (req: Request, res: Response) => {
  const data = req.body;
  const response = authService.login(data);
  res.setHeader("Set-Cookie", `token=${response}; HttpOnly;`);
  res.status(200).json(response);
};

export default { register, login };
