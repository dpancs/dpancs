const QRCode = require('qrcode');

// Replace with your website URL
const url = 'https://www.deepintheai.com/rsvp';

// Generate QR code as a PNG file
QRCode.toFile('./qrcode.png', url, {
  color: {
    dark: '#000000',  // QR code color
    light: '#FFFFFF'  // Background color
  }
}, function (err) {
  if (err) throw err;
  console.log('QR code saved as qrcode.png');
});

// Optional: Generate as data URL (for web use)
QRCode.toDataURL(url, function (err, url) {
  if (err) throw err;
  console.log('Data URL:', url);
});

