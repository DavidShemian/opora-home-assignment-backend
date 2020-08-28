"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initLogger = void 0;
const winston_1 = __importDefault(require("winston"));
const logger = winston_1.default.createLogger({
    transports: [
        new winston_1.default.transports.Console()
    ],
});
exports.initLogger = () => {
    const tempGlobal = global;
    tempGlobal.logger = logger;
};