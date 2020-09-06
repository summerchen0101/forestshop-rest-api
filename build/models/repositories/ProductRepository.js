"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = __importDefault(require("../Product"));
var ProductRepository = /** @class */ (function () {
    function ProductRepository(model) {
        this.model = model;
    }
    ProductRepository.prototype.create = function (doc) {
        return this.model.create(doc);
    };
    ProductRepository.prototype.getList = function () {
        return this.model.find();
    };
    ProductRepository.prototype.update = function (id, doc) {
        var data = {
            name: doc.name,
            price: doc.price
        };
        return this.model.findByIdAndUpdate(id, data);
    };
    ProductRepository.prototype.remove = function (id) {
        return this.model.findByIdAndRemove(id);
    };
    return ProductRepository;
}());
exports.default = new ProductRepository(Product_1.default);
