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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require(".prisma/client");
const express = __importStar(require("express"));
const verify_token_1 = require("../utils/verify.token");
const prisma = new client_1.PrismaClient();
let router = express.Router();
router.post("/personalinfo", verify_token_1.verifyToken, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { degree, roll_number, photo_url, branch, date_joined, study_from, study_to, religion, community, parent_name, address, phone, annual_income, } = req.body;
        var user = yield prisma.particularsPersonal.findUnique({
            where: {
                email: res.locals.email,
            },
        });
        if (user === null || user === void 0 ? void 0 : user.completed)
            return res.status(403).send({ message: "You have already completed" });
        yield prisma.particularsPersonal.update({
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
    }
    catch (error) {
        res.status(401).send({
            message: error,
        });
    }
}));
router.post("/education", verify_token_1.verifyToken, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sslc, sslc_yop, sslc_name, sslc_percent, hsc, hsc_yop, hsc_name, hsc_percent, ug, ug_yop, ug_name, ug_percent, } = req.body;
        var user = yield prisma.particularsEducaton.findUnique({
            where: {
                email: res.locals.email,
            },
        });
        if (user === null || user === void 0 ? void 0 : user.completed)
            return res.status(403).send({ message: "You have already completed" });
        yield prisma.particularsEducaton.update({
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
        res.status(200).send({
            message: "Added successfully!!!",
        });
    }
    catch (error) {
        res.status(401).send({
            message: error,
        });
    }
}));
router.post("/academic", verify_token_1.verifyToken, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cgpa, guide_name, org_name, overall_rank, placed_organization, placed_organization_address, project, team_members, } = req.body;
        var user = yield prisma.particularsAcademic.findUnique({
            where: {
                email: res.locals.email,
            },
        });
        if (user === null || user === void 0 ? void 0 : user.completed)
            return res.status(403).send({ message: "You have already completed" });
        yield prisma.particularsAcademic.update({
            where: {
                email: res.locals.email,
            },
            data: {
                cgpa,
                guide_name,
                org_name,
                overall_rank,
                placed_organization,
                placed_organization_address,
                project,
                team_members,
                completed: true,
            },
        });
        res.status(200).send({
            message: "Added successfully!!!",
        });
    }
    catch (error) {
        res.status(401).send({ message: error });
    }
}));
router.post("/sem1", verify_token_1.verifyToken, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { isDayScholar, tutor_name, arrear_count, redo_count, cgpa } = req.body;
        var user = yield prisma.sem1.findUnique({
            where: {
                email: res.locals.email,
            },
        });
        if (user === null || user === void 0 ? void 0 : user.completed)
            return res.status(403).send({ message: "You have already completed" });
        yield prisma.sem1.update({
            where: { email: res.locals.email },
            data: {
                isDayScholar,
                tutor_name,
                arrear_count,
                redo_count,
                cgpa,
                completed: true,
            },
        });
        res.status(200).send({
            message: "Added successfully!!!",
        });
    }
    catch (error) {
        res.status(401).send({ message: error });
    }
}));
router.post("/sem2", verify_token_1.verifyToken, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { isDayScholar, tutor_name, arrear_count, redo_count, cgpa } = req.body;
        var user = yield prisma.sem2.findUnique({
            where: {
                email: res.locals.email,
            },
        });
        if (user === null || user === void 0 ? void 0 : user.completed)
            return res.status(403).send({ message: "You have already completed" });
        yield prisma.sem2.update({
            where: { email: res.locals.email },
            data: {
                isDayScholar,
                tutor_name,
                arrear_count,
                redo_count,
                cgpa,
                completed: true,
            },
        });
        res.status(200).send({
            message: "Added successfully!!!",
        });
    }
    catch (error) {
        res.status(401).send({ message: error });
    }
}));
router.post("/sem3", verify_token_1.verifyToken, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { isDayScholar, tutor_name, arrear_count, redo_count, cgpa } = req.body;
        var user = yield prisma.sem3.findUnique({
            where: {
                email: res.locals.email,
            },
        });
        if (user === null || user === void 0 ? void 0 : user.completed)
            return res.status(403).send({ message: "You have already completed" });
        yield prisma.sem3.update({
            where: { email: res.locals.email },
            data: {
                isDayScholar,
                tutor_name,
                arrear_count,
                redo_count,
                cgpa,
                completed: true,
            },
        });
        res.status(200).send({
            message: "Added successfully!!!",
        });
    }
    catch (error) {
        res.status(401).send({ message: error });
    }
}));
router.post("/sem4", verify_token_1.verifyToken, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { isDayScholar, tutor_name, arrear_count, redo_count, cgpa } = req.body;
        var user = yield prisma.sem4.findUnique({
            where: {
                email: res.locals.email,
            },
        });
        if (user === null || user === void 0 ? void 0 : user.completed)
            return res.status(403).send({ message: "You have already completed" });
        yield prisma.sem4.update({
            where: { email: res.locals.email },
            data: {
                isDayScholar,
                tutor_name,
                arrear_count,
                redo_count,
                cgpa,
                completed: true,
            },
        });
        res.status(200).send({
            message: "Added successfully!!!",
        });
    }
    catch (error) {
        res.status(401).send({ message: error });
    }
}));
router.post("/sem5", verify_token_1.verifyToken, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { isDayScholar, tutor_name, arrear_count, redo_count, cgpa } = req.body;
        var user = yield prisma.sem5.findUnique({
            where: {
                email: res.locals.email,
            },
        });
        if (user === null || user === void 0 ? void 0 : user.completed)
            return res.status(403).send({ message: "You have already completed" });
        yield prisma.sem5.update({
            where: { email: res.locals.email },
            data: {
                isDayScholar,
                tutor_name,
                arrear_count,
                redo_count,
                cgpa,
                completed: true,
            },
        });
        res.status(200).send({
            message: "Added successfully!!!",
        });
    }
    catch (error) {
        res.status(401).send({ message: error });
    }
}));
router.post("/sem6", verify_token_1.verifyToken, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { isDayScholar, tutor_name, arrear_count, redo_count, cgpa } = req.body;
        var user = yield prisma.sem6.findUnique({
            where: {
                email: res.locals.email,
            },
        });
        if (user === null || user === void 0 ? void 0 : user.completed)
            return res.status(403).send({ message: "You have already completed" });
        yield prisma.sem6.update({
            where: { email: res.locals.email },
            data: {
                isDayScholar,
                tutor_name,
                arrear_count,
                redo_count,
                cgpa,
                completed: true,
            },
        });
        res.status(200).send({
            message: "Added successfully!!!",
        });
    }
    catch (error) {
        res.status(401).send({ message: error });
    }
}));
module.exports = router;
//# sourceMappingURL=api.particulars.routes.js.map