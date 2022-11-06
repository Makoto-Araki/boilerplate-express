let express = require('express');
let app = express();

/* Lesson01 コンソール出力
app.get('/', (req, res) => {
  console.log('Hello World');
})
*/

/* Lesson02 文字列を返す
app.get('/', (req, res) => {
  res.send('Hello Express');
})
*/

/* Lesson03 HTMLサーバー
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})
*/

/* Lesson04 静的ファイル
app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})
*/

/* Lesson05 APIサーバー
app.get('/json', (req, res) => {
  res.json({
    'message': 'Hello Json'
  })
})
*/




















 module.exports = app;
