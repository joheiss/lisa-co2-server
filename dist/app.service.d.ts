export declare class AppService {
    getLocations(): any[];
    getLocation(id: string): any;
    addLocation(location: any): any;
    getSensors(): any[];
    getSensor(id: string): any;
    addSensor(sensor: any): any;
    deleteSensor(id: string): any;
    updateSensor(sensor: any): any;
    private _generateMeasurements;
    private _subtractMinutes;
}
