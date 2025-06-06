const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/hello', (req, res) => {
    res.json({
        message: '简单的get请求!',
        timestamp: new Date().toISOString(),
        status: 200,
    })
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`)
}).on('error', (err) => {
    if (err.code === 'EACCES') {
        console.error('需要管理员权限才能使用80端口');
    } else {
        console.error('服务器启动错误:', err);
    }
});

