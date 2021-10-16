import { Prisma, PrismaClient } from ".prisma/client";
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
          res.header("Authorization", token);
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
    try {
      // const {
      //   course,
      //   deptID,
      //   dob,
      //   email,
      //   gender,
      //   isDayScholar,
      //   name,
      //   dept_name,
      // } = req.body;
      // let data: Prisma.StudentCreateInput;
      // data = {
      //   course: req.body.course,
      //   email: req.body.email,
      //   dob: "1634312471669",
      //   name: req.body.name,
      //   gender: req.body.gender,
      // };
      // await prisma.student.create({
      //   data: {
      //     course: "MCA",
      //     dob: "1634312471669",
      //     email: "kathir@email.com",
      //     gender: "male",
      //     name: "Kathir",
      //   },
      // });
      await prisma.student.create({
        data: {
          course: "MCA",
          dob: "1634312471669",
          email: "kathir@email.com",
          gender: "male",
          name: "Kathir",
          deptId: "2",
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
