"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ProductController_1 = __importDefault(require("../controllers/ProductController"));
var router = express_1.default.Router();
router.get('/', ProductController_1.default.getProducts);
router.post('/', ProductController_1.default.createProduct);
router.put('/:id', ProductController_1.default.updateProduct);
router.delete('/:id', ProductController_1.default.delProduct);
exports.default = router;
