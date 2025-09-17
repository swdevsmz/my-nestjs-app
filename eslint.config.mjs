// TypeScriptの型チェックを有効化
// @ts-check

// ESLintのコア設定をインポート
import eslint from '@eslint/js';
// Prettier推奨設定をESLintに適用するプラグイン
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
// Node.jsやJestなどのグローバル変数定義
import globals from 'globals';
// TypeScript用のESLint拡張
import tseslint from 'typescript-eslint';

// ESLintの設定をエクスポート
export default tseslint.config(
  // この設定ファイル自身はlint対象から除外
  {
    ignores: ['eslint.config.mjs'],
  },
  // JavaScriptの推奨ルール
  eslint.configs.recommended,
  // TypeScriptの型チェック付き推奨ルール
  ...tseslint.configs.recommendedTypeChecked,
  // Prettier推奨設定
  eslintPluginPrettierRecommended,
  // 言語オプションの詳細設定
  {
    languageOptions: {
      // Node.jsとJestのグローバル変数を有効化
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      // モジュール解決方法
      sourceType: 'commonjs',
      parserOptions: {
        // プロジェクトサービスを有効化
        projectService: true,
        // tsconfigのルートディレクトリを指定
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // 独自ルールの上書き
  {
    rules: {
      // any型の使用を許可
      '@typescript-eslint/no-explicit-any': 'off',
      // Promiseの未処理警告
      '@typescript-eslint/no-floating-promises': 'warn',
      // 安全でない引数の警告
      '@typescript-eslint/no-unsafe-argument': 'warn',
    },
  },
);
