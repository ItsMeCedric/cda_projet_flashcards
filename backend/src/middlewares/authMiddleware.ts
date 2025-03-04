import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface RequestWithUser extends Request {
  user: JwtPayload | string;
}

const verifyAuth = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    res.sendStatus(401);
    return;
  }
  try {
    const ret = jwt.verify(token, process.env.JWTSECRET as string);
    (req as RequestWithUser).user = ret;
    next();
  } catch (err) {
    res.sendStatus(403);
  }
};

export default verifyAuth;
