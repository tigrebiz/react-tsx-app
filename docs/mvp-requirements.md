# Steady-AI MVP 要件定義

## プロジェクトの目的

AI を活用して、ソフトウェア開発のラフサイクル全体（要件定義、設計、実装、テスト）をサポートする Web アプリケーションの開発。

## 主要機能（MVP）

1. AI チャットインターフェース

   - ChatGPT ライクな UI
   - OpenAI API との連携
   - 会話履歴の保存（マークダウン形式）

2. ドキュメント管理

   - マークダウンエディタ
   - リアルタイムプレビュー
   - 自動保存機能
   - YAML 形式での構造化データ保存

3. プロジェクト管理
   - ェーズ別の管理（要件定義、設計、実装、テスト）
   - サイドバーによるナビゲーション
   - 基本的なプロジェクト情報の管理

## 技術スタック

### アプリケーションフレームワーク

- Next.js + TypeScript
  - API ルート機能
  - ファイルベースルーティング
  - サーバーサイドレンダリング

### フロントエンド

- Material-UI (@mui/material)
- Monaco Editor
- React Markdown
- Zustand（状態管理）

### バックエンド

- データベース:
  - PostgreSQL（Prisma ORM）
    - プロジェクト基本情報
  - MongoDB（Mongoose ODM）
    - 会話履歴
    - ドキュメント管理
- OpenAI API（初期実装）

### インフラ

- Docker + Docker Compose
- Nginx

## 開発フェーズ

1. 開発環境セットアップ

   - Docker 環境構築
   - Next.js プロジェクト初期化
   - データベースセットアップ

2. サイドバー実装

   - ナビゲーション構造
   - フェーズ切り替え
   - 基本的なルーティング

3. チャットインターフェース実装
   - 基本 UI
   - AI 連携
   - ドキュメント保存
   - マークダウン/YAML サポート

## 制約事項

- シングルユーザーモード
- ローカルストレージでの一時的なデータ保存
- 単一 AI プロバイダー（OpenAI）のみ対応

## 将来的な拡張機能

- マルチユーザー対応（Google/GitHub 認証）
- ドキュメントのバージョン管理
- 複数 AI プロバイダー対応
- リアルタイムコラボレーション
