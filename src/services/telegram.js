const axios = require('axios');

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

module.exports.uploadFile = async (fileUrl) => {
  // Gửi file lên Telegram
  const apiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`;
  const res = await axios.post(apiUrl, {
    chat_id: TELEGRAM_CHAT_ID,
    document: fileUrl
  });
  return res.data;
};