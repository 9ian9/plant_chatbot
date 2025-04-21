const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

// POST /chat
app.post('/chat', (req, res) => {
    const userMessage = req.body.message;
    // Giả lập phản hồi bot
    const reply = `Bạn vừa nói: "${userMessage}". Tôi sẽ tìm thông tin thực vật phù hợp...`;
    res.json({ reply });
});

// POST /upload
app.post('/upload', upload.single('image'), (req, res) => {
    const filePath = req.file.path;

    // Giả lập phân tích ảnh
    const reply = `Đã nhận ảnh! Tôi đang phân tích hình ảnh thực vật từ file ${req.file.originalname}...`;
    res.json({ reply });
});

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server đang chạy tại http://localhost:${PORT}`));