import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getLocations(): any[] {
    return testLocations;
  }

  getLocation(id: string): any {
    const found = testLocations.find((l) => l.id === id);
    if (!found)
      throw new HttpException(
        `Sensor location ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    return found;
  }

  addLocation(location: any): any {
    if (!location.id)
      throw new HttpException(
        `Sensor location id "${location.id}" not allowed.`,
        HttpStatus.BAD_REQUEST,
      );
    const found = testLocations.find((l) => l.id === location.id);
    if (found)
      throw new HttpException(
        `Sensor location ${location.id} already exists.`,
        HttpStatus.BAD_REQUEST,
      );
    testLocations.push(location);
  }

  getSensors(): any[] {
    return testLocations.map((l) => ({
      ...l,
      measurements: this._generateMeasurements(1, 1000),
    }));
  }

  getSensor(id: string): any {
    const found = testLocations.find((l) => l.id === id);
    if (!found)
      throw new HttpException(
        `Sensor location ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    return {
      ...found,
      measurements: id.startsWith('abc')
        ? this._generateMeasurements(1000, 3)
        : [],
    };
  }

  addSensor(sensor: any): any {
    if (!sensor.id)
      throw new HttpException(
        `Sensor id "${sensor.id}" not allowed.`,
        HttpStatus.BAD_REQUEST,
      );
    const found = testLocations.find((l) => l.id === sensor.id);
    if (found)
      throw new HttpException(
        `Sensor ${sensor.id} already exists.`,
        HttpStatus.BAD_REQUEST,
      );
    testLocations.push(sensor);
    return sensor;
  }

  deleteSensor(id: string): any {
    if (!id)
      throw new HttpException(
        `Sensor id "${id}" not allowed.`,
        HttpStatus.BAD_REQUEST,
      );
    const found = testLocations.find((l) => l.id === id);
    if (!found)
      throw new HttpException(`Sensor ${id}not found.`, HttpStatus.NOT_FOUND);
    testLocations = testLocations.filter((l) => l.id !== id);
  }

  updateSensor(sensor: any): any {
    if (!sensor.id)
      throw new HttpException(
        `Sensor id "${sensor.id}" not allowed.`,
        HttpStatus.BAD_REQUEST,
      );
    const found = testLocations.find((l) => l.id === sensor.id);
    if (!found)
      throw new HttpException(
        `Sensor ${sensor.id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    testLocations = [
      sensor,
      ...testLocations.filter((l) => l.id !== sensor.id),
    ];
    return sensor;
  }

  private _generateMeasurements(count = 1000, minutes = 3) {
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

  private _subtractMinutes(endTime: Date = new Date(), minutes = 5) {
    return new Date(
      new Date(endTime).setTime(endTime.getTime() - minutes * 60 * 1000),
    );
  }
}

let testLocations = <any>[
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
