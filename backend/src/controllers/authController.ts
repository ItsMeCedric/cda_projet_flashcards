import { Request, Response } from "express";
import authService from "../services/authService";

const register = (req: Request, res: Response) => {
  const data = req.body;
  authService.register(data);
  res.status(201).json({ message: "Compte créé avec succés" });
};

const login = (req: Request, res: Response) => {
  const data = req.body;
  const response = authService.login(data);
  res.cookie("Authorization", "Bearer ${token}", { secure: true, httpOnly: true, sameSite: "strict" });
  res.status(200).json(response);
};

const logout = (req: Request, res: Response) => {
  res.clearCookie("Authorization");
  res.sendStatus(200);
};

export default { register, login, logout };
