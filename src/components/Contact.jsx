import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xxxxxx",   // your service ID
        "template_xxxxxx",  // your template ID
        form.current,
        "publicKeyXXXXXX"   // your public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-28 px-6 bg-[#0a0f2a] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">
          Get in <span className="text-blue-400">Touch</span>
        </h2>
        <p className="text-white/70 mb-10">
          We’d love to hear from you. Fill out the form below.
        </p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl p-10 rounded-2xl border border-white/10 shadow-xl"
      >
        {/* TOP 3 INPUTS */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* NAME */}
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            className="p-4 rounded-lg bg-white/5 border border-white/20 text-white"
            required
          />

          {/* EMAIL */}
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            className="p-4 rounded-lg bg-white/5 border border-white/20 text-white"
            required
          />

          {/* PHONE NUMBER — NEW FIELD */}
          <input
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            className="p-4 rounded-lg bg-white/5 border border-white/20 text-white"
            required
          />
        </div>

        {/* MESSAGE BOX */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full mt-6 p-4 rounded-lg bg-white/5 border border-white/20 text-white"
          required
        ></textarea>

        {/* BUTTON */}
        <button
          type="submit"
          className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:shadow-purple-500/50 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
