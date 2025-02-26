import { NextFunction, Request, Response } from "express";
import jwt, { Jwt, JwtPayload } from "jsonwebtoken";

interface RequestWithUser extends Request {
  user: JwtPayload | string;
}

const authMiddleware = (req: RequestWithUser, res: Response, next: NextFunction) => {
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    res.sendStatus(500);
    // a modif
    return;
  }
  try {
    const ret = jwt.verify(token, process.env.JWTSECRET as string);
    req.user = ret;
    next();
  } catch (err) {
    res.sendStatus(403);
  }
};
