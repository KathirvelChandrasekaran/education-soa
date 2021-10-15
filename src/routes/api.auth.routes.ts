import { PrismaClient } from ".prisma/client";
import * as express from "express";
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { verifyToken } from "../utils/verify.token";

const prisma: PrismaClient = new PrismaClient();
let router = express.Router();

router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { emailID, password } = req.body;

      const student = await prisma.auth.findUnique({
        where: { emailID },
      });
      if (!student)
        res.send({
          message: "User not found!. Please register",
        });
      else {
        const validPassword = await bcrypt.compare(password, student.password);
        if (validPassword) {
          const token: string = jwt.sign(
            { email: emailID },
            process.env.TOKEN_SECRET as string,
            {
              expiresIn: "1h",
            }
          );
          res.header("Authorization", "Bearer " + token);
          res.send({
            message: "Login successfully!!!",
            token: token,
          });
        } else
          res.send({
            message: "Login failed. Please check the credentials !!!",
          });
      }
    } catch (error) {
      next(error);
    }
  }
);

router.post("/register", async (req, res: Response, next: NextFunction) => {
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
      const token: string = jwt.sign(
        { email: emailID },
        process.env.TOKEN_SECRET as string,
        {
          expiresIn: "1h",
        }
      );
      res.setHeader("Authorization", token);
      res.send({
        message: "Registered successfully!!!",
      });
    }
  } catch (error) {
    next(error);
  }
});

router.post(
  "/studentDetails",
  verifyToken,
  async (req: Request, res: Response, next: NextFunction) => {
    return res.send({ message: "Authorization" });
    //   const {
    //     course,
    //     deptID,
    //     dob,
    //     email,
    //     gender,
    //     isDayScholar,
    //     name,
    //     dept_name,
    //   } = req.body;
    //   await prisma.student.create({
    //     data: {
    //       course,
    //       deptId: deptID,
    //       dob,
    //       email,
    //       gender,
    //       name,
    //       isDayScholar,
    //       department: {
    //         create: {
    //           dept_name,
    //           dept_id: deptID,
    //         },
    //       },
    //     },
    //   });
    // }
  }
);

module.exports = router;
