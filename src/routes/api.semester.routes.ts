import { PrismaClient } from '.prisma/client';
import * as express from 'express';
import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/verify.token';

const prisma: PrismaClient = new PrismaClient();
let router = express.Router();

router.post('/sem1', verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { isDayScholar, tutor_name, arrear_count, redo_count, cgpa } = req.body;
    var user = await prisma.sem1.findUnique({
      where: {
        email: res.locals.email
      }
    });

    if (user?.completed) return res.status(403).send({ message: 'You have already completed' });
    await prisma.sem1.update({
      where: { email: res.locals.email },
      data: {
        isDayScholar,
        tutor_name,
        arrear_count,
        redo_count,
        cgpa,
        completed: true
      }
    });
    res.status(200).send({
      message: 'Added successfully!!!'
    });
  } catch (error) {
    res.status(401).send({ message: error });
  }
});

router.post('/sem2', verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { isDayScholar, tutor_name, arrear_count, redo_count, cgpa } = req.body;
    var user = await prisma.sem2.findUnique({
      where: {
        email: res.locals.email
      }
    });

    if (user?.completed) return res.status(403).send({ message: 'You have already completed' });
    await prisma.sem2.update({
      where: { email: res.locals.email },
      data: {
        isDayScholar,
        tutor_name,
        arrear_count,
        redo_count,
        cgpa,
        completed: true
      }
    });
    res.status(200).send({
      message: 'Added successfully!!!'
    });
  } catch (error) {
    res.status(401).send({ message: error });
  }
});

router.post('/sem3', verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { isDayScholar, tutor_name, arrear_count, redo_count, cgpa } = req.body;
    var user = await prisma.sem3.findUnique({
      where: {
        email: res.locals.email
      }
    });

    if (user?.completed) return res.status(403).send({ message: 'You have already completed' });
    await prisma.sem3.update({
      where: { email: res.locals.email },
      data: {
        isDayScholar,
        tutor_name,
        arrear_count,
        redo_count,
        cgpa,
        completed: true
      }
    });
    res.status(200).send({
      message: 'Added successfully!!!'
    });
  } catch (error) {
    res.status(401).send({ message: error });
  }
});

router.post('/sem4', verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { isDayScholar, tutor_name, arrear_count, redo_count, cgpa } = req.body;
    var user = await prisma.sem4.findUnique({
      where: {
        email: res.locals.email
      }
    });

    if (user?.completed) return res.status(403).send({ message: 'You have already completed' });
    await prisma.sem4.update({
      where: { email: res.locals.email },
      data: {
        isDayScholar,
        tutor_name,
        arrear_count,
        redo_count,
        cgpa,
        completed: true
      }
    });
    res.status(200).send({
      message: 'Added successfully!!!'
    });
  } catch (error) {
    res.status(401).send({ message: error });
  }
});

router.post('/sem5', verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { isDayScholar, tutor_name, arrear_count, redo_count, cgpa } = req.body;
    var user = await prisma.sem5.findUnique({
      where: {
        email: res.locals.email
      }
    });

    if (user?.completed) return res.status(403).send({ message: 'You have already completed' });
    await prisma.sem5.update({
      where: { email: res.locals.email },
      data: {
        isDayScholar,
        tutor_name,
        arrear_count,
        redo_count,
        cgpa,
        completed: true
      }
    });
    res.status(200).send({
      message: 'Added successfully!!!'
    });
  } catch (error) {
    res.status(401).send({ message: error });
  }
});
router.post('/sem6', verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { isDayScholar, tutor_name, arrear_count, redo_count, cgpa } = req.body;
    var user = await prisma.sem6.findUnique({
      where: {
        email: res.locals.email
      }
    });

    if (user?.completed) return res.status(403).send({ message: 'You have already completed' });
    await prisma.sem6.update({
      where: { email: res.locals.email },
      data: {
        isDayScholar,
        tutor_name,
        arrear_count,
        redo_count,
        cgpa,
        completed: true
      }
    });
    res.status(200).send({
      message: 'Added successfully!!!'
    });
  } catch (error) {
    res.status(401).send({ message: error });
  }
});

module.exports = router;
