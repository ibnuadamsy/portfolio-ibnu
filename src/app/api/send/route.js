import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { subject, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'google',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'ibnuadamsyah19@gmail.com',
                pass: 'qnyhbvfjeqabinnk',
            }
        })

        const mailOption = {
            from: 'email',
            to: 'ibnuadamsyah19@gmail.com',
            subject: "New QA Job Opportunities",
            react: (
                <>
                  <h1>{subject}</h1>
                  <p>Thank you for contacting us!</p>
                  <p>New message submitted:</p>
                  <p>{message}</p>
                </>
              ),
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}
