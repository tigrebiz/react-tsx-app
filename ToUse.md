## コンテナでreact-typescriptプロジェクトを作る方法

cd プロジェクトのディレクトリ

docker run --rm --volume $(pwd):/app --workdir /app node:20-alpine npx create-react-app . --template typescript

## プロジェクトのクローン方法

git clone https://github.com/あなたのユーザー名/react-tsx-app.git

### コンテナの建て方

cd react-tsx-app

docker compose up --build

### コンテナの削除の仕方

docker compose down
