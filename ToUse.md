## コンテナで react-typescript プロジェクトを作る方法

cd プロジェクトのディレクトリ

docker run --rm --volume $(pwd):/app --workdir /app node:20-alpine npx create-react-app . --template typescript

## プロジェクトのクローン方法

git clone https://github.com/あなたのユーザー名/react-tsx-app.git

## 最低限の node_modules パッケージのローカルへのインストール

IDE の型チェックやコード補完のため OS に合わせた node_modules をローカルへインストール
npm install react react-dom typescript @types/react @types/react-dom

## コンテナの建て方

cd react-tsx-app

docker compose up --build

## コンテナの削除の仕方

docker compose down
