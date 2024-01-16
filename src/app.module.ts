// src/app.module.ts

import { Module } from '@nestjs/common';
import { ViewController } from './view/view.controller';
import { ViewService } from './view/view.service';

@Module({
  imports: [],
  controllers: [ViewController],
  providers: [ViewService],
})
export class AppModule {}

