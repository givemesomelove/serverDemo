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
    console.log(`api测试地址: http://localhost:${port}/api/hello`)
})

