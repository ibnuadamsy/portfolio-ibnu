"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import WhatsappIcon from "../../../public/Whatsapp-icon.png";
import EmailIcon from "../../../public/email-icon.png";
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser';


export const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  
  const form = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_644t0yx', 'template_iyfmm5d', form.current, {
        publicKey: 'fL9M4xScJkARf32x0',
      })
      .then(
        () => {
          console.log("Email Sent Successfully!");
          setEmailSubmitted(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          My inbox always open, if you have a question or just want to say Hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/ibnuadamsy">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/ibnuadamsyah/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://wa.me/6285155447250">
            <Image src={WhatsappIcon} alt="Whatsapp Icon" />
          </Link>
          <Link href="mailto:ibnuadamsyah19@gmail.com">
            <Image src={EmailIcon} alt="Email Icon" />
          </Link>
        </div>
      </div>
      <div>
      {emailSubmitted ? (
          <p className="delay-200 duration-100 transform hover:scale-125 transition ease-linear bg-purple-700 px-6 py-2 m-4 inline">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
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
      </div>
    </section>
  );
};

export default EmailSection;
