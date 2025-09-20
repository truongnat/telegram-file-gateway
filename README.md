# telegram-file-gateway

API Gateway lưu trữ và chuyển tiếp file/video qua Telegram.

## Tính năng
- Nhận file/video từ client và gửi lên Telegram bot
- Cung cấp endpoint tải file/video đã upload
- Quản lý thông tin file/video
- Tích hợp xác thực cơ bản

## Công nghệ
- Node.js (Express)
- Docker
- Telegram Bot API

## Khởi động dự án
```bash
cp .env.example .env
docker-compose up --build
```

## API endpoints
- `POST /api/upload`: Upload file/video lên Telegram
- `GET /api/files/:id`: Lấy file/video đã upload
- `GET /api/files`: Danh sách file/video# telegram-file-gateway
