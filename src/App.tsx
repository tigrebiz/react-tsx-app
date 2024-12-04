/*
メインのアプリケーションコンポーネント
ルーティングの設定
グローバルなレイアウトの定義
他のコンポーネントの親となる
*/

import React from 'react';
import logo from './logo.svg';
import './App.css';

// 未使用の変数（ESLintが警告を出すはず）
const unusedVariable = 'test';

// any型の使用（TypeScriptの推奨に反する）
const someValue: any = 'test';

function App() {
  // 不要なconsole.log（開発環境では警告）
  console.log('rendering');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
