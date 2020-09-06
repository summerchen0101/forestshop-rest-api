"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
var routes_1 = __importDefault(require("./routes"));
// import errorHandler, { handleNotFround } from './errors/handler'
mongoose_1.default.Promise = global.Promise;
exports.app = express_1.default();
exports.app.use('/', routes_1.default);
exports.app.use(morgan_1.default('dev'));
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: false }));
exports.app.use(cookie_parser_1.default());
// app.use(handleNotFround);
// app.use(errorHandler);
mongoose_1.default
    .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(function () {
    exports.app.listen(process.env.PORT, function () {
        return console.log("Example app listening on port " + process.env.PORT + "!");
    });
})
    .catch(function () {
    console.log('Mongodb connection failed.');
});
