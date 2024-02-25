const puppeteer = require('puppeteer');
const fs = require('fs');
const QRCode = require('qrcode');


// data here means- url that qr code will redirect to
// filename means path to store qr code in form of png

async function generateQRCode(data, filename) {
    try {
        await QRCode.toFile(filename, data);
        console.log('QR code generated successfully:', filename);
    } catch (err) {
        console.error('Error generating QR code:', err);
    }
};

// url - url of html of ticket
// Path- where to store the pdf
const pdfgenerate=async (url,Path) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Navigate to the URL containing the HTML
  await page.goto(url);
  
  // Generate PDF
  await page.pdf({ path: Path, format: 'A4' });

  await browser.close();
};

//generateQRCode('www.facebook.com','qrcode.png')

module.exports={pdfgenerate,generateQRCode}


