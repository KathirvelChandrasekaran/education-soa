"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.get("/", (req, res, next) => {
    res.send("Hello");
});
app.use("/api/v1/auth", require("./routes/api.auth.routes"));
app.use((req, res, next) => {
    next(new http_errors_1.default.NotFound());
});
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message || "Server error",
    });
};
app.use(errorHandler);
const server = app.listen(process.env.PORT || 3000, () => console.log("http://localhost:3000"));
//# sourceMappingURL=app.js.map