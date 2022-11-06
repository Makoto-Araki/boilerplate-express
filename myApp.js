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

/* Lesson06 ファイル(.env)
app.get('/json', (req, res) => {
  if (process.env['MESSAGE_STYLE'] === 'uppercase') {
    res.json({'message': 'HELLO JSON'});
  } else {
    res.json({'message': 'hello json'})
  }
})
*/

/* Lesson07 ミドルウェア */














 module.exports = app;
