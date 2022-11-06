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

/* Lesson07 ミドルウェア
const Func1 = (req, res, next) => {
  req.key1 = req.protocol;
  console.log('Func1');
  next();
}

const Func2 = (req, res, next) => {
  req.key2 = req.method;
  console.log('Func2');
  next();
}
  
const Func3 = (req, res, next) => {
  req.key3 = req.path;
  console.log('Func3');
  next();
}

const Func4 = (req, res, next) => {
  req.key4 = req.hostname;
  console.log('Func4');
  next();
}

const Func5 = (req, res, next) => {
  req.key5 = req.ip;
  console.log('Func5');
  next();
}

app.use(express.static(__dirname + '/'));
app.use(Func1);  // パス(/) + パス(/json) 両方でコール
app.use(Func2);  // 特定パス(/json)のみ実行は app.use('/json', Func2) と記述
app.use(Func3);
app.use(Func4);
app.use(Func5);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/json', (req, res) => {
  res.json({
    "key1": req.key1,
    "key2": req.key2,
    "key3": req.key3,
    "key4": req.key4,
    "key5": req.key5
  });
});
*/

/* Lesson08 ミドルウェアをルーティング内に記述、同時にチェーン構成
app.get('/json', (req, res, next) => {
  req.key1 = req.protocol;
  console.log('Func1');
  next();
}, (req, res, next) => {
  req.key2 = req.method;
  console.log('Func2');
  next();
}, (req, res, next) => {
  req.key3 = req.path;
  console.log('Func3');
  next();
}, (req, res, next) => {
  req.key4 = req.hostname;
  console.log('Func4');
  next();
}, (req, res, next) => {
  req.key5 = req.ip;
  console.log('Func5');
  next();
}, (req, res) => {
  res.json({
    "key1": req.key1,
    "key2": req.key2,
    "key3": req.key3,
    "key4": req.key4,
    "key5": req.key5,
  });
});
*/






 module.exports = app;
