"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FbnsDeviceAuth = void 0;
const decorators_1 = require("instagram-private-api/dist/decorators");
const shared_1 = require("../shared");
class FbnsDeviceAuth {
    constructor(ig) {
        this.authLog = (0, shared_1.debugChannel)('fbns', 'device-auth');
        this.ig = ig;
        this.clientId = this.ig.state.phoneId?.substr(0, 20) || '';
        this.deviceId = '';
        this.userId = 0;
        this.deviceSecret = '';
        this.password = '';
    }
    update() {
        if (this.clientId === '') {
            this.clientId = this.ig.state.phoneId?.substr(0, 20) || '';
        }
    }
    read(jsonStr) {
        this.authLog(`Reading auth json ${jsonStr ?? 'empty'}`);
        if (!jsonStr)
            return;
        this.json = jsonStr;
        const { ck, cs, di, ds, sr, rc } = JSON.parse(jsonStr);
        this.userId = ck || this.userId;
        this.password = cs || this.password;
        if (di) {
            this.deviceId = di;
            this.clientId = this.deviceId.substr(0, 20);
        }
        else {
            this.deviceId = '';
        }
        this.deviceSecret = ds || this.deviceSecret;
        this.sr = sr || this.sr;
        this.rc = rc || this.rc;
    }
    toString() {
        return this.json || '';
    }
}
exports.FbnsDeviceAuth = FbnsDeviceAuth;
__decorate([
    (0, decorators_1.Enumerable)(false)
], FbnsDeviceAuth.prototype, "ig", void 0);
//# sourceMappingURL=fbns.device-auth.js.map