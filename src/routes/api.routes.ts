import { PrismaClient } from ".prisma/client";
import * as express from "express";
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";

const prisma: PrismaClient = new PrismaClient();
let router = express.Router();

router.post(
  "/auth/login",
  (req: Request, res: Response, next: NextFunction) => {}
);

router.post(
  "/auth/register",
  async (req, res: Response, next: NextFunction) => {
    try {
      const { emailID, password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const student = await prisma.auth.findUnique({
        where: { emailID },
      });
      if (student)
        res.send({
          message: "User already found!. Please login",
        });
      else {
        await prisma.auth.create({
          data: { emailID, password: hashedPassword },
        });
        res.send({
          message: "Registered successfully!!!",
        });
      }
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
