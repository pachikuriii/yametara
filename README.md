# yametara

<img src="public/yametara-ogp.png" alt="yametara OGP">

https://www.yametara.com/

## 概要

それまで会社がやってくれていた社会保険や税金の手続きを、退職後『どこで』『なにを』『いつまでに』自分でしなければならないか分かりづらい問題を解決したい、会社を辞めた後、すぐに就職しない選択をはじめてする方向けの行政関係の手続き内容のシュミレータです。

ユーザーはいくつかの質問に答えるだけで退職後、行政関係の手続きをするために出向かなければならない場所、持ち物、手続きの期限を知ることができ、保険や税金ごとに自分で検索するのとは違って、必要な手続きを一括で把握できる事が特徴です。

## 技術スタック

### フロントエンド

- TypeScript(4.9.4)
- React(18.2.0)
- Next.js(13.1.1)
- Tailwind CSS(3.2.4)

### テスト

- Cypress(12.5.1)

### インフラ

- Vercel

### Linter/Formatter

- ESLint
- Prettier

## インストール手順

```
$ git clone https://github.com/pachikuriii/yametara.git
$ npm install
$ npm run build
$ npm run start
```

## テストとリント

### Linter/Formatter の実行

```
$ npm run lint
$ npm run format
```

### E2E テストの実行

```
$ npm run build
$ npm run start
$ npm run cypress:run
```
