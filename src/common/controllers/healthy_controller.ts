import { HttpSuccessCode } from '../dto/enums/success_enum';
import { ApiReponse } from '../dto/responses/api_responses';
import { version } from '../../../package.json';
import { Controller, Get } from '@nestjs/common';

const svc = process.env.APP_ID || 'Service';
const env = process.env.NODE_ENV || 'development';

export interface IHealthy {
    message: string;
    environment: string;
    version: string;
}

const healthy: IHealthy = {
    message: `${svc} OK 👽`,
    environment: env,
    version: version,
};

@Controller()
export class HealthyController {
    healthy: ApiReponse<IHealthy>;

    constructor() {
        this.healthy = new ApiReponse<IHealthy>(healthy, HttpSuccessCode.SUCCESSFUL);
    }

    @Get()
    get() {
        return healthy;
    }

    @Get('/readiness')
    readiness() {
        return healthy;
    }

    @Get('/health')
    health() {
        return healthy;
    }
}
