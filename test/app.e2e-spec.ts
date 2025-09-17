// NestJSのテスト用ユーティリティをインポート
import { Test, TestingModule } from '@nestjs/testing';
// Nestアプリケーションの型をインポート
import { INestApplication } from '@nestjs/common';
// HTTPリクエストのテスト用ライブラリsupertestをインポート
import request from 'supertest';
import { App } from 'supertest/types';
// テスト対象のAppModuleをインポート
import { AppModule } from './../src/app.module';

/**
 * AppControllerのエンドツーエンド（e2e）テスト
 * 実際のHTTPリクエストを通じてアプリ全体の動作を検証します
 */
describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  /**
   * 各テスト前にNestアプリケーションを初期化
   * AppModuleを使ってテスト用アプリを生成します
   */
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  /**
   * ルートパス（/）へのGETリクエストが"Hello World!"を返すことを検証
   */
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
