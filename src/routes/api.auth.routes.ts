import { PrismaClient } from '.prisma/client';
import * as express from 'express';
import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { verifyToken } from '../utils/verify.token';

const prisma: PrismaClient = new PrismaClient();
let router = express.Router();

router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { emailID, password } = req.body;

    const student = await prisma.auth.findUnique({
      where: { emailID }
    });
    if (!student)
      res.send({
        message: 'User not found!. Please register'
      });
    else {
      const validPassword = await bcrypt.compare(password, student.password);
      if (validPassword) {
        const token: string = jwt.sign({ email: emailID }, process.env.TOKEN_SECRET as string, {
          expiresIn: '1h'
        });
        res.header('Authorization', token);
        res.send({
          message: 'Login successfully!!!',
          token: token
        });
      } else
        res.send({
          message: 'Login failed. Please check the credentials !!!'
        });
    }
  } catch (error) {
    next(error);
  }
});

router.post('/register', async (req, res: Response, next: NextFunction) => {
  try {
    const { emailID, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const student = await prisma.auth.findUnique({
      where: { emailID }
    });
    if (student)
      res.status(404).send({
        message: 'User already found!. Please login'
      });
    else {
      await prisma.auth.create({
        data: { emailID, password: hashedPassword, role: 'student' }
      });

      const token: string = jwt.sign({ email: emailID, role: 'Student' }, process.env.TOKEN_SECRET as string, {
        expiresIn: '1h'
      });
      res.setHeader('Authorization', token);
      res.send({
        message: 'Registered successfully!!!'
      });
    }
  } catch (error) {
    next(error);
  }
});

router.post('/studentDetails', verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { course, deptID, dob, gender, isDayScholar, name } = req.body;
    const user = await prisma.auth.findUnique({
      where: {
        emailID: res.locals.email
      }
    });

    await prisma.particularsAcademic.create({
      data: {
        email: res.locals.email
      }
    });
    await prisma.particularsEducaton.create({
      data: {
        email: res.locals.email
      }
    });
    await prisma.particularsPersonal.create({
      data: {
        email: res.locals.email
      }
    });
    await prisma.sem1.create({
      data: {
        email: res.locals.email
      }
    });
    await prisma.sem2.create({
      data: {
        email: res.locals.email
      }
    });
    await prisma.sem3.create({
      data: {
        email: res.locals.email
      }
    });
    await prisma.sem4.create({
      data: {
        email: res.locals.email
      }
    });
    await prisma.sem5.create({
      data: {
        email: res.locals.email
      }
    });
    await prisma.sem6.create({
      data: {
        email: res.locals.email
      }
    });

    await prisma.student.create({
      data: {
        course,
        user_id: user?.user_id as string,
        dob,
        email: user?.emailID as string,
        gender,
        name,
        deptId: deptID,
        isDayScholar,
        completed: true
      }
    });

    res.send({
      message: 'Added successfully!!!'
    });
  } catch (error) {
    res.send({ message: error });
  }
});

router.get('/studentDetails', verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await prisma.student.findUnique({
      where: {
        email: res.locals.email
      }
    });
    res.status(200).send(data);
  } catch (error) {
    res.send({ message: error });
  }
});

module.exports = router;
