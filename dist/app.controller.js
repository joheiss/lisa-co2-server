"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getLocations() {
        return this.appService.getLocations();
    }
    getLocation(param) {
        return this.appService.getLocation(param.id);
    }
    addLocation(location) {
        return this.appService.addLocation(location);
    }
    getSensors() {
        return this.appService.getSensors();
    }
    getSensor(param) {
        return this.appService.getSensor(param.id);
    }
    addSensor(sensor) {
        return this.appService.addSensor(sensor);
    }
    deleteSensor(param) {
        return this.appService.deleteSensor(param.id);
    }
    updateSensor(sensor) {
        return this.appService.updateSensor(sensor);
    }
};
__decorate([
    common_1.Get('locations'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getLocations", null);
__decorate([
    common_1.Get('locations/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getLocation", null);
__decorate([
    common_1.Post('locations'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "addLocation", null);
__decorate([
    common_1.Get('sensors'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getSensors", null);
__decorate([
    common_1.Get('sensors/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getSensor", null);
__decorate([
    common_1.Post('sensors'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "addSensor", null);
__decorate([
    common_1.Delete('sensors/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "deleteSensor", null);
__decorate([
    common_1.Put('sensors/:id'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "updateSensor", null);
AppController = __decorate([
    common_1.Controller('v1'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map