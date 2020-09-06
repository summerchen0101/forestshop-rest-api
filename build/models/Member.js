"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var memberSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
}, { timestamps: true });
var Member = mongoose_1.default.model('Member', memberSchema);
exports.default = Member;
