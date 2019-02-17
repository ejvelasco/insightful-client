"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fs_1 = require("mz/fs");
var underscore_1 = require("underscore");
var axios_1 = require("axios");
var Client = /** @class */ (function () {
    function Client(options) {
        var _this = this;
        this.parseJSONFile = function (fileName) { return __awaiter(_this, void 0, void 0, function () {
            var data, obj, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fs_1["default"].readFile(fileName, "utf8")];
                    case 1:
                        data = _a.sent();
                        obj = JSON.parse(data);
                        return [2 /*return*/, obj];
                    case 2:
                        err_1 = _a.sent();
                        // @TODO handle error
                        console.log(err_1);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.compareObjects = function (oldObj, newObj) { return __awaiter(_this, void 0, void 0, function () {
            var _a, streaming, apiKey, result, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.options, streaming = _a.streaming, apiKey = _a.apiKey;
                        if (!streaming) return [3 /*break*/, 1];
                        return [3 /*break*/, 3];
                    case 1:
                        result = underscore_1["default"].isEqual(oldObj, newObj);
                        console.log(result);
                        return [4 /*yield*/, axios_1["default"].post("https://insightful-server.herokuapp.com/results/", {
                                fields: {
                                    api_key: "VMVK61C-1VSM6QY-HZV19R6-AXE5657",
                                    error: !result,
                                    message: "amount",
                                    project: "teamdealeronline"
                                }
                            })];
                    case 2:
                        res = _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var defaultOptions = {
            streaming: false,
            apiKey: ""
        };
        //@TODO: merge options
        this.options = options;
    }
    Client.prototype.compareFile = function () {
        console.log("Comparing File!");
    };
    return Client;
}());
exports.Client = Client;
