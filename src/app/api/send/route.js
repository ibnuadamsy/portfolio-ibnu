import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const {emailSubmitted, setEmailSubmitted} = await request.json();

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

        const handleSubmit = async (e) => {
            e.preventDefault();
            const data = {
              email: e.target.email.value,
              subject: e.target.subject.value,
              message: e.target.message.value,
            };
            const JSONdata = JSON.stringify(data);
            const endpoint = "/api/send";
        
            // Form the request for sending data to the server.
            const options = {
              // The method is POST because we are sending data.
              method: "POST",
              // Tell the server we're sending JSON.
              headers: {
                "Content-Type": "application/json",
              },
              // Body of the request is the JSON data we created above.
              body: JSONdata,
            };
        
            const response = await fetch(endpoint, options);
            
        
            if (response.status === 200) {
              console.log("Message sent.");
              setEmailSubmitted(true);
            }
          };
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="joko@gmail.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hi"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          )}
        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}
