const nodemailer = require('nodemailer');

async function sendEmail(email, pdfFilePath) {
    // Configure nodemailer with your email service details
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'anhad@iitjammu.ac.in',
            pass: 'uuqq jtme lnfs unwp',
        }
    });

    // Email details
    const mailOptions = {
        from: 'anhad@iitjammu.ac.in',
        to: email,
        subject: 'Ticket Coonfirmation',
        text: 'Please find the attached PDF file with QR code, header, text, and object data.',
        // attachments: [{ path:pdfFilePath  }]
    };

    // Send email
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (err) {
        console.error('Error sending email:', err);
    }
}

module.exports={sendEmail};

sendEmail('2021ucs0094@iitjammu.ac.in','output.pdf');