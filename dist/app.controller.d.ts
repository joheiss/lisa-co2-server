import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getLocations(): any[];
    getLocation(param: any): any;
    addLocation(location: any): any;
    getSensors(): any[];
    getSensor(param: any): any;
    addSensor(sensor: any): any;
    deleteSensor(param: any): any;
    updateSensor(sensor: any): any;
}
