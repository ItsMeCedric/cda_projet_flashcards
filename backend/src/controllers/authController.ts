import { Request, Response } from "express";
import authService from "../services/authService";

const register = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    await authService.register(data);
    res.status(201).json({ message: "Compte créé avec succés" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const login = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const response = await authService.login(data);
    res.cookie("Authorization", `Bearer ${response.token}`, {
      secure: true,
      httpOnly: true,
      sameSite: "strict",
      path: "/api",
    });
    res.status(200).json(response.user);
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

const logout = (req: Request, res: Response) => {
  res.clearCookie("Authorization");
  res.sendStatus(200);
};

export default { register, login, logout };
