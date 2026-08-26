import React, { useState } from 'react';
import './Contact.css';
export default function Contact() {
  // State to track if the form was successfully submitted
  const [submitted, setSubmitted] = useState(false);
  // State to track if the iframe loaded after a click
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  const handleIframeLoad = () => {
    if (isSubmitting) {
      setSubmitted(true);
    }
  };

  return (
    <main className="contact-page">
      {/* 1. Hidden Iframe to catch the Google redirect */}
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: 'none' }}
        onLoad={handleIframeLoad}
      ></iframe>

      {/* 2. Conditional Rendering: Show Success Message OR Form */}
      <section className="contact-card">
        <p className="resume-eyebrow">Get in touch</p>
        <h1>Contact Me</h1>

        {submitted ? (
          <div className="contact-success">
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully.</p>
          </div>
        ) : (
          <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSevJuJCSvTrLSXWBIEx17YGUKqdEvdbZBbrKHws7mivh2qyCw/formResponse"
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
          >
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="entry.266180534"
              placeholder="Subject"
              type="text"
              required
            />

            <label htmlFor="body">Details</label>
            <textarea
              id="body"
              name="entry.291798202"
              rows="8"
              placeholder="Add details here"
              required
            />

            <label htmlFor="contact">Your Contact Info</label>
            <textarea
              id="contact"
              name="entry.1055822833"
              rows="4"
              placeholder="Please add your contact information like phone number and email address here"
              required
            />

            <button type="submit">Submit</button>
          </form>
        )}
      </section>
    </main>
  );
}
