import { Controller, Post, Body } from '@nestjs/common';
import { UserDtoSchema } from './user.dto';
import type { UserDto } from './user.dto';
import { ZodValidationPipe } from './zod-validation.pipe';

/**
 * ユーザー関連のエンドポイントを提供するコントローラー
 */
@Controller('user')
export class UserController {
  /**
   * ユーザー情報を受け取り、バリデーション後に内容を出力する
   * @param body リクエストボディ
   */
  @Post()
  createUser(@Body(new ZodValidationPipe(UserDtoSchema)) user: UserDto): {
    message: string;
  } {
    // バリデーション済みデータを受け取り内容をコンソール出力
    console.log('UserDto:', user);
    return { message: 'User created (console output only)' };
  }
}
