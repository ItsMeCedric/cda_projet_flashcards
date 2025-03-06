import { Request, Response } from "express";
import authService from "../services/authService";

const register = (req: Request, res: Response) => {
  const data = req.body;
  authService.register(data);
  res.status(201).json({ message: "Compte créé avec succés" });
};

const login = async (req: Request, res: Response) => {
  const data = req.body;
  const response = await authService.login(data);
  res.cookie("Authorization", `Bearer ${response.token}`, { secure: true, httpOnly: true, sameSite: "strict", path: "/api" });
  res.status(200).json(response.user);
};

const logout = (req: Request, res: Response) => {
  res.clearCookie("Authorization");
  res.sendStatus(200);
};

export default { register, login, logout };
