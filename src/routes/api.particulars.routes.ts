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
      var user = await prisma.particularsPersonal.findUnique({
        where: {
          email: res.locals.email,
        },
      });

      if (user?.completed)
        return res.status(403).send({ message: "You have already completed" });

      await prisma.particularsPersonal.update({
        where: {
          email: res.locals.email,
        },
        data: {
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
          completed: true,
        },
      });
      res.send({
        message: "Added successfully!!!",
      });
    } catch (error) {
      res.status(401).send({
        message: error,
      });
    }
  }
);

router.post(
  "/education",
  verifyToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        sslc,
        sslc_yop,
        sslc_name,
        sslc_percent,
        hsc,
        hsc_yop,
        hsc_name,
        hsc_percent,
        ug,
        ug_yop,
        ug_name,
        ug_percent,
      } = req.body;
      var user = await prisma.particularsEducaton.findUnique({
        where: {
          email: res.locals.email,
        },
      });

      if (user?.completed)
        return res.status(403).send({ message: "You have already completed" });
      await prisma.particularsEducaton.update({
        where: {
          email: res.locals.email,
        },
        data: {
          sslc,
          sslc_yop,
          sslc_name,
          sslc_percent,
          hsc,
          hsc_yop,
          hsc_name,
          hsc_percent,
          ug,
          ug_yop,
          ug_name,
          ug_percent,
          completed: true,
        },
      });
      res.send({
        message: "Added successfully!!!",
      });
    } catch (error) {
      res.status(401).send({
        message: error,
      });
    }
  }
);

module.exports = router;
