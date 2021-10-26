"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require(".prisma/client");
const express = __importStar(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verify_token_1 = require("../utils/verify.token");
const prisma = new client_1.PrismaClient();
let router = express.Router();
router.post('/login', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { emailID, password } = req.body;
        const student = yield prisma.auth.findUnique({
            where: { emailID }
        });
        if (!student)
            res.send({
                message: 'User not found!. Please register'
            });
        else {
            const validPassword = yield bcryptjs_1.default.compare(password, student.password);
            if (validPassword) {
                const token = jsonwebtoken_1.default.sign({ email: emailID }, process.env.TOKEN_SECRET, {
                    expiresIn: '1h'
                });
                res.header('Authorization', token);
                res.send({
                    message: 'Login successfully!!!',
                    token: token
                });
            }
            else
                res.send({
                    message: 'Login failed. Please check the credentials !!!'
                });
        }
    }
    catch (error) {
        next(error);
    }
}));
router.post('/register', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { emailID, password } = req.body;
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
        const student = yield prisma.auth.findUnique({
            where: { emailID }
        });
        if (student)
            res.status(404).send({
                message: 'User already found!. Please login'
            });
        else {
            yield prisma.auth.create({
                data: { emailID, password: hashedPassword, role: 'student' }
            });
            const token = jsonwebtoken_1.default.sign({ email: emailID, role: 'Student' }, process.env.TOKEN_SECRET, {
                expiresIn: '1h'
            });
            res.setHeader('Authorization', token);
            res.send({
                message: 'Registered successfully!!!'
            });
        }
    }
    catch (error) {
        next(error);
    }
}));
router.post('/studentDetails', verify_token_1.verifyToken, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { course, deptID, dob, gender, isDayScholar, name } = req.body;
        const user = yield prisma.auth.findUnique({
            where: {
                emailID: res.locals.email
            }
        });
        yield prisma.particularsAcademic.create({
            data: {
                email: res.locals.email
            }
        });
        yield prisma.particularsEducaton.create({
            data: {
                email: res.locals.email
            }
        });
        yield prisma.particularsPersonal.create({
            data: {
                email: res.locals.email
            }
        });
        yield prisma.sem1.create({
            data: {
                email: res.locals.email
            }
        });
        yield prisma.sem2.create({
            data: {
                email: res.locals.email
            }
        });
        yield prisma.sem3.create({
            data: {
                email: res.locals.email
            }
        });
        yield prisma.sem4.create({
            data: {
                email: res.locals.email
            }
        });
        yield prisma.sem5.create({
            data: {
                email: res.locals.email
            }
        });
        yield prisma.sem6.create({
            data: {
                email: res.locals.email
            }
        });
        yield prisma.student.create({
            data: {
                course,
                user_id: user === null || user === void 0 ? void 0 : user.user_id,
                dob,
                email: user === null || user === void 0 ? void 0 : user.emailID,
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
    }
    catch (error) {
        res.send({ message: error });
    }
}));
router.get('/studentDetails', verify_token_1.verifyToken, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prisma.student.findUnique({
            where: {
                email: res.locals.email
            }
        });
        res.status(200).send(data);
    }
    catch (error) {
        res.send({ message: error });
    }
}));
module.exports = router;
//# sourceMappingURL=api.auth.routes.js.map