import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * このクラスはコントローラーであり、HTTPリクエストを受け付ける役割を持ちます。
 */
@Controller()
export class AppController {
  /**
   * AppServiceを依存性注入（DI）で受け取ります。
   * @param appService AppServiceのインスタンス
   */
  constructor(private readonly appService: AppService) {}

  /**
   * ルートパス（/）へのGETリクエストを処理します。
   * @returns {string} AppServiceのgetHello()の戻り値
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
