import { Request, Response } from "express";
import authService from "../services/authService";

const register = (req: Request, res: Response) => {
  const data = req.body;
  return authService.register(data);
};

const login = (req: Request, res: Response) => {
  const data = req.body;
  return authService.login(data);
};

export default { register, login };
