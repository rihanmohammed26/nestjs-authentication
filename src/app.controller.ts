import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) { }

	@UseGuards(LocalAuthGuard)
	@Post('/login')
	login(@Req() req) {
		return req.user;
	}

	@Get('protected')
	getHello(): string {
		return this.appService.getHello();
	}
}
