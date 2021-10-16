"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function verifyToken(req, res, next) {
    const token = req.header("Authorization");
    if (!token)
        return res.status(401).send({ message: "Access denied" });
    try {
        const verifyToken = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        const decodedToken = jsonwebtoken_1.default.decode(token, {
            complete: true,
        });
        if (verifyToken)
            res.status(200);
        res.locals.email = decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.payload.email;
        next();
    }
    catch (error) {
        res.status(400).send({ message: "Invalid token" });
    }
}
exports.verifyToken = verifyToken;
//# sourceMappingURL=verify.token.js.map