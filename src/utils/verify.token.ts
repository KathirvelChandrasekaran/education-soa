import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send({ message: "Access denied" });
  try {
    const verifyToken = jwt.verify(token, process.env.TOKEN_SECRET as string);
    if (verifyToken) res.status(200);
    next();
  } catch (error) {
    res.status(400).send({ message: "Invalid token" });
  }
}
