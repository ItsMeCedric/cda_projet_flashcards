import { Request, Response } from "express";
import authService from "../services/authService";
import jwt from "jsonwebtoken";
import userRepository from "../repositories/userRepository";

interface JWTToken {
  id: number;
  role: string;
}

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
      path: "/",
      maxAge: 1000 * 60 * 60 * 2,
    });
    const sendUser = {
      id: response.user?.id,
      username: response.user?.username,
      profilePicture: response.user?.profilePicture,
      role: response.user?.role,
      email: response.user?.email,
    };
    res.status(200).json(sendUser);
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

const loggedIn = async (req: Request, res: Response) => {
  if (req.cookies && req.cookies["Authorization"]) {
    const token = req.cookies["Authorization"].split(" ")[1];
    try {
      const ret = jwt.verify(token, process.env.JWTSECRET as string) as JWTToken;
      const user = await userRepository.findById(ret.id);
      const sendUser = {
        id: user?.id,
        username: user?.username,
        profilePicture: user?.profilePicture,
        role: user?.role,
        email: user?.email,
      };
      res.status(200).json(sendUser);
    } catch (err) {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
};

const logout = (req: Request, res: Response) => {
  res.clearCookie("Authorization");
  res.sendStatus(200);
};

export default { register, login, loggedIn, logout };
