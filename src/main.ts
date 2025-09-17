// NestJSアプリケーションのファクトリをインポート
import { NestFactory } from '@nestjs/core';
// ルートモジュールをインポート
import { AppModule } from './app.module';

/**
 * NestJSアプリケーションを起動する非同期関数。
 * AppModuleをもとにアプリケーションインスタンスを生成し、
 * 指定されたポート（PORT環境変数、なければ3000）でリッスン開始します。
 */
async function bootstrap() {
  // AppModuleを使ってNestJSアプリケーションを生成
  const app = await NestFactory.create(AppModule);
  // 指定ポートでHTTPサーバを起動
  await app.listen(process.env.PORT ?? 3000);
}
// 即時実行でアプリケーションを起動
void bootstrap();
