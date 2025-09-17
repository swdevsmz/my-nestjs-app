// NestJSのテスト用ユーティリティをインポート
import { Test, TestingModule } from '@nestjs/testing';
// テスト対象のコントローラーとサービスをインポート
import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * AppControllerの単体テスト
 */
describe('AppController', () => {
  let appController: AppController;

  /**
   * 各テスト前にNestJSのテストモジュールを作成し、
   * AppControllerのインスタンスを取得する
   */
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  /**
   * ルートパスのgetHello()が"Hello World!"を返すことをテスト
   */
  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
