"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getLocations() {
        return testLocations;
    }
    getLocation(id) {
        const found = testLocations.find((l) => l.id === id);
        if (!found)
            throw new common_1.HttpException(`Sensor location ${id} not found.`, common_1.HttpStatus.NOT_FOUND);
        return found;
    }
    addLocation(location) {
        if (!location.id)
            throw new common_1.HttpException(`Sensor location id "${location.id}" not allowed.`, common_1.HttpStatus.BAD_REQUEST);
        const found = testLocations.find((l) => l.id === location.id);
        if (found)
            throw new common_1.HttpException(`Sensor location ${location.id} already exists.`, common_1.HttpStatus.BAD_REQUEST);
        testLocations.push(location);
    }
    getSensors() {
        return testLocations.map((l) => (Object.assign(Object.assign({}, l), { measurements: this._generateMeasurements(1, 1000) })));
    }
    getSensor(id) {
        const found = testLocations.find((l) => l.id === id);
        if (!found)
            throw new common_1.HttpException(`Sensor location ${id} not found.`, common_1.HttpStatus.NOT_FOUND);
        return Object.assign(Object.assign({}, found), { measurements: id.startsWith('abc')
                ? this._generateMeasurements(1000, 3)
                : [] });
    }
    addSensor(sensor) {
        if (!sensor.id)
            throw new common_1.HttpException(`Sensor id "${sensor.id}" not allowed.`, common_1.HttpStatus.BAD_REQUEST);
        const found = testLocations.find((l) => l.id === sensor.id);
        if (found)
            throw new common_1.HttpException(`Sensor ${sensor.id} already exists.`, common_1.HttpStatus.BAD_REQUEST);
        testLocations.push(sensor);
        return sensor;
    }
    deleteSensor(id) {
        if (!id)
            throw new common_1.HttpException(`Sensor id "${id}" not allowed.`, common_1.HttpStatus.BAD_REQUEST);
        const found = testLocations.find((l) => l.id === id);
        if (!found)
            throw new common_1.HttpException(`Sensor ${id}not found.`, common_1.HttpStatus.NOT_FOUND);
        testLocations = testLocations.filter((l) => l.id !== id);
    }
    updateSensor(sensor) {
        if (!sensor.id)
            throw new common_1.HttpException(`Sensor id "${sensor.id}" not allowed.`, common_1.HttpStatus.BAD_REQUEST);
        const found = testLocations.find((l) => l.id === sensor.id);
        if (!found)
            throw new common_1.HttpException(`Sensor ${sensor.id} not found.`, common_1.HttpStatus.NOT_FOUND);
        testLocations = [
            sensor,
            ...testLocations.filter((l) => l.id !== sensor.id),
        ];
        return sensor;
    }
    _generateMeasurements(count = 1000, minutes = 3) {
        const time = new Date();
        const measurements = [];
        for (let i = 0; i < count; i++) {
            measurements.push({
                time: this._subtractMinutes(time, minutes * i).getTime(),
                co2: Math.trunc(Math.random() * 3200 + 300),
                temperature: Math.trunc(Math.random() * 15 + 18),
                humidity: Math.trunc(Math.random() * 60 + 30),
            });
        }
        return measurements;
    }
    _subtractMinutes(endTime = new Date(), minutes = 5) {
        return new Date(new Date(endTime).setTime(endTime.getTime() - minutes * 60 * 1000));
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
let testLocations = [
    {
        id: 'abc-def-ghi-1',
        name: 'Raum 4711',
        description: 'Klasse 1a',
        comment: '',
    },
    {
        id: 'abc-def-ghi-2',
        name: 'Raum 4712',
        description: 'Klasse 1b',
        comment: '',
    },
    {
        id: 'abc-def-ghi-3',
        name: 'Raum 4713',
        description: 'Klasse 1c',
        comment: '',
    },
    {
        id: 'abc-def-ghi-4',
        name: 'Raum 4714',
        description: 'Klasse 2a',
        comment: '',
    },
    {
        id: 'abc-def-ghi-5',
        name: 'Raum 4715',
        description: 'Klasse 2b',
        comment: '',
    },
    {
        id: 'abc-def-ghi-6',
        name: 'Raum 4716',
        description: 'Klasse 2c',
        comment: '',
    },
];
//# sourceMappingURL=app.service.js.map