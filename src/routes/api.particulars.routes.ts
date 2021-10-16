import { PrismaClient } from ".prisma/client";
import * as express from "express";
import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/verify.token";

const prisma: PrismaClient = new PrismaClient();
let router = express.Router();

router.post(
  "/personalinfo",
  verifyToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        degree,
        roll_number,
        photo_url,
        branch,
        date_joined,
        study_from,
        study_to,
        religion,
        community,
        parent_name,
        address,
        phone,
        annual_income,
      } = req.body;
      await prisma.particulars.create({
        data: {
          email: res.locals.email,
          degree,
          roll_number,
          photo_url,
          branch,
          date_joined,
          study_from,
          study_to,
          religion,
          community,
          parent_name,
          address,
          phone,
          annual_income,
        },
      });
      res.send({
        message: "Added successfully!!!",
      });
    } catch (error) {
      res.send({ message: error });
    }
  }
);

module.exports = router;
