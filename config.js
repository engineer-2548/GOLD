// config.js - ไฟล์การตั้งค่า
const LIFF_ID = '2007662178-5jm4VBpa';
const API_URL = 'https://script.google.com/macros/s/AKfycbzWhc-vogPMMsMxseOWr_LvXcEfaxrdA_jrP_7lidM8ZMyg_wbeGvpc1whP0DZPbIhRmQ/exec';
const GOLD_PRICE_API = 'https://script.google.com/macros/s/AKfycbwgvstkxFOR9p6zOV2d8iEGagbpQ6h8C3BhPnDCoB56jvmbAwSG0A9a36r6oRxNkBXQ/exec';
const GRAMS_PER_BAHT = 15.244;
// const SLIP_FOLDER_ID = '1jOsUGHmNIJ6KxMaLm1O8ENoEnUc9Kzd_';
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

// Global Variables
let currentGoldPrices = {
    bar: { buyPrice: 0, sellPrice: 0 },
    ornament: { buyPrice: 0, sellPrice: 0 }
};
let BANK_ACCOUNTS = {};
