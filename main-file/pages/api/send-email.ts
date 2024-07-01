import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('REQ - ',req)
    console.log('RES - ',res)
    if (req.method === 'POST') {
      const { email, name, message } = req.body;

      var smtpConfig = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    };
    var transporter = nodemailer.createTransport(smtpConfig);

      // let transporter = nodemailer.createTransport({
      //   host: 'localhost',
      //   port: 25,
      //   secure: false,
      //   auth: {
      //     user: process.env.EMAIL_USER,
      //     pass: process.env.EMAIL_PASS,
      //   },
      // });

      let mailOptions = {
        from: `"${name}" <info@amprotech.co.nz>`,
        to: 'info@amprotech.co.nz',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      // Send email
      await transporter.sendMail(mailOptions);


      res.status(200).json({ message: 'Email sent successfully' });
    } else {
      // Method not allowed
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
