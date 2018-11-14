# Vueとaxiosで簡単ニュースフィード

前提条件

下記がインストールされていること    
* Nodejs 10.13.0 LTS    
* npm 6.4.1    
* Vuejs v2.4.0    

動作手順

1.任意の場所にソースをクローン    
`git clone https://github.com/atsu8492/newsFeed.git`

2.環境情報の統一    
./newsFeed/に移動し下記コマンドを実行    
`npm install`

3.NewsAPi Keyを登録    
./newsFeed/src/main.js    
const ApiKey = "YOUR-API-KEY"にキーを入力    
   
4.アプリケーション起動    
`npm run dev`

5.ブラウザから下記URLへアクセス    
`http://localhost:8080/`
