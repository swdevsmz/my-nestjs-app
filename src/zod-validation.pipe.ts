import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { z, ZodSchema } from 'zod';

/**
 * 任意のZodスキーマでバリデーションを行うカスタムパイプ
 */
@Injectable()
export class ZodValidationPipe<T extends ZodSchema>
  implements PipeTransform<unknown, z.infer<T>>
{
  /**
   * @param schema バリデーションに使用するZodスキーマ
   */
  constructor(private readonly schema: T) {}

  /**
   * 入力値をZodスキーマでバリデーションし、失敗時はBadRequestExceptionをスローします。
   * @param value バリデーション対象の値
   * @returns バリデーション済みのデータ
   * @throws BadRequestException バリデーション失敗時
   */
  transform(value: unknown): z.infer<T> {
    const result = this.schema.safeParse(value);
    if (!result.success) {
      /** Zodのエラー内容をBadRequestExceptionで返す */
      throw new BadRequestException(result.error.issues);
    }
    /** @returns バリデーション済みのデータ */
    return result.data;
  }
}
