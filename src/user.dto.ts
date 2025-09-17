import { z } from 'zod';

/**
 * UserDto: ユーザー情報のデータ転送オブジェクト
 * emailとpasswordのバリデーションスキーマをzodで定義
 */
export const UserDtoSchema = z.object({
  email: z
    .string()
    .email({ message: '有効なメールアドレスを入力してください' }),
  password: z
    .string()
    .min(8, { message: 'パスワードは8文字以上で入力してください' }),
});

export type UserDto = z.infer<typeof UserDtoSchema>;
