import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const env = process.env.NODE_ENV || "development";

interface RequestWithUser extends Request {
  user: JWTToken;
}

interface JWTToken {
  id: number;
  role: string;
}

const verifyAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (env == "development") {
   (req as RequestWithUser).user = { id: 3 };
    next();
    return;
  }
  
  const token = req.cookies["Authorization"] && req.cookies["Authorization"].split(" ")[1];
  if (!token) {
    res.sendStatus(401);
    return;
  }
  try {
    const ret = jwt.verify(token, process.env.JWTSECRET as string);
    (req as RequestWithUser).user = ret as JWTToken;
    next();
  } catch (err) {
    res.sendStatus(403);
  }
};

export default verifyAuth;
