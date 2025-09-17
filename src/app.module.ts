import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';

/**
 * @ModuleはNestJSのデコレーターで、このクラスがモジュールであることを示します。
 * モジュール内で利用するコントローラーやプロバイダーなどをまとめて管理します。
 */
@Module({
  // 他のモジュールをインポートする場合はここに追加します
  imports: [],
  // このモジュールで利用するコントローラーを指定します
  controllers: [AppController, UserController],
  // このモジュールで利用するプロバイダー（サービスなど）を指定します
  providers: [AppService],
})
export class AppModule {
  // ここは通常空ですが、必要に応じてモジュール固有の処理を追加できます
}
