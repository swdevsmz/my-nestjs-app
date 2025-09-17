// Injectableデコレーターをインポート。依存性注入の対象となるクラスに付与します。
import { Injectable } from '@nestjs/common';

/**
 * このクラスはサービスとしてDIコンテナに登録されます。
 */
@Injectable()
export class AppService {
  /**
   * "Hello World!"という文字列を返します。
   * @returns {string} 挨拶メッセージ
   */
  getHello(): string {
    return 'Hello World!';
  }
}
