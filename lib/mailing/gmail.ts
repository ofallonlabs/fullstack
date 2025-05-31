import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
   auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
   } 
});

export async function sendEmail({
    to,
    subject,
    text = "HI THIS IS A TEST EMAIL FROM OMENTORS FULLSTACK"
}: {to:string, subject: string, text:string}){


    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        html:`<div>${text}</div>`
    });

}