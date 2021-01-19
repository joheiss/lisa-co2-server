import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('locations')
  getLocations(): any[] {
    return this.appService.getLocations();
  }
  @Get('locations/:id')
  getLocation(@Param() param): any {
    return this.appService.getLocation(param.id);
  }

  @Post('locations')
  addLocation(@Body() location: any): any {
    return this.appService.addLocation(location);
  }

  @Get('sensors')
  getSensors(): any[] {
    return this.appService.getSensors();
  }
  @Get('sensors/:id')
  getSensor(@Param() param): any {
    return this.appService.getSensor(param.id);
  }

  @Post('sensors')
  addSensor(@Body() sensor: any): any {
    return this.appService.addSensor(sensor);
  }

  @Delete('sensors/:id')
  deleteSensor(@Param() param): any {
    return this.appService.deleteSensor(param.id);
  }

  @Put('sensors/:id')
  updateSensor(@Body() sensor: any): any {
    return this.appService.updateSensor(sensor);
  }
}
