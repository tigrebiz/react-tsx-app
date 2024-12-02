/*
アプリケーションのエントリーポイント
グローバルな設定を行う場所
アプリ全体で共有する機能の初期化を行う場所
*/

/*
推奨される設定

グローバルプロバイダーの設定
アプリケーション全体の初期化
環境設定
エラーハンドリングの設定
パフォーマンス計測の設定
グローバルスタイルのインポート
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
