import { PrismaClient } from ".prisma/client";
import * as express from "express";
import { NextFunction, Request, Response } from "express";

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
      const auth = await prisma.auth.create({
        data: { emailID, password },
      });
      res.send({
        message: "auth.emailID",
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
