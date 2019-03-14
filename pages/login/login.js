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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("../../services/user-service");
Page({
    data: {
        signing: true,
        signOnLabel: function () {
            return this.signing ? "Signing On" : "Click here to Login";
        }
    },
    onLoad: function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            user_service_1.default.mockDelay(user_service_1.default.login).then(function (code) {
                console.log(code);
                wx.redirectTo({
                    url: '../index/index'
                });
            });
            return [2];
        });
    }); },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpQkE0Q0U7O0FBNUNGLDREQUFzRDtBQUl0RCxJQUFJLENBQUM7SUFDRixJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsSUFBSTtRQUNiLFdBQVcsRUFBRTtZQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztRQUM3RCxDQUFDO0tBQ0Y7SUFDRCxNQUFNLEVBQUU7O1lBaUJQLHNCQUFXLENBQUMsU0FBUyxDQUFDLHNCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTtnQkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFbEIsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDWixHQUFHLEVBQUUsZ0JBQWdCO2lCQUN0QixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQTs7O1NBQ0g7Q0FTRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnO1xuaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItc2VydmljZSc7XG5cbi8vIGNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcblxuUGFnZSh7XG4gICBkYXRhOiB7XG4gICAgIHNpZ25pbmc6IHRydWUsXG4gICAgIHNpZ25PbkxhYmVsOiBmdW5jdGlvbigpIHtcbiAgICAgICByZXR1cm4gdGhpcy5zaWduaW5nID8gXCJTaWduaW5nIE9uXCIgOiBcIkNsaWNrIGhlcmUgdG8gTG9naW5cIjtcbiAgICAgfVxuICAgfSxcbiAgIG9uTG9hZDogYXN5bmMgKCkgPT4ge1xuICAgIC8vIGxldCB1c2VySW5mbyA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJJbmZvKHRydWUpO1xuICAgIC8vIGRlYnVnZ2VyO1xuICAgIC8vIGlmKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKXtcbiAgICAvLyAgIHd4LnJlZGlyZWN0VG8oe1xuICAgIC8vICAgICB1cmw6ICdsb2dzJ1xuICAgIC8vICAgfSlcbiAgICAvLyB9XG5cbiAgICAvLyB1c2VyU2VydmljZS5sb2dpbigpLnRoZW4oY29kZSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhjb2RlKTtcblxuICAgIC8vICAgd3gucmVkaXJlY3RUbyh7XG4gICAgLy8gICAgIHVybDogJy4uL2xvZ3MvbG9ncydcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0pXG5cbiAgICB1c2VyU2VydmljZS5tb2NrRGVsYXkodXNlclNlcnZpY2UubG9naW4pLnRoZW4oY29kZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhjb2RlKTtcblxuICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgIHVybDogJy4uL2luZGV4L2luZGV4J1xuICAgICAgfSk7XG4gICAgfSlcbiAgfSxcbiAgLy8gZ2V0VXNlckluZm8oZTogYW55KSB7XG4gIC8vICAgY29uc29sZS5sb2coZSlcbiAgLy8gICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG4gIC8vICAgLy8gdGhpcy5zZXREYXRhISh7XG4gIC8vICAgLy8gICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXG4gIC8vICAgLy8gICBoYXNVc2VySW5mbzogdHJ1ZVxuICAvLyAgIC8vIH0pXG4gIC8vIH1cbn0pIl19