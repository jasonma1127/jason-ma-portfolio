import { useState } from "react";
import Title from "../Components/Title";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      // Using Formspree - you need to register and replace with your form ID
      // Register at: https://formspree.io/
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="title-section">
        <Title title="contact" span="contact" />
      </div>
      <div className="content-section">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-section">
            <div className="contact-info">
              <div className="contact name">
                <h2>Name :</h2>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="請輸入您的姓名"
                />
              </div>
              <div className="contact email">
                <h2>Email :</h2>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="contact subject">
                <h2>Subject :</h2>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="主旨"
                />
              </div>
            </div>
            <div className="contact-message">
              <div className="contact message">
                <h2>Message :</h2>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="請輸入您的訊息..."
                  rows="8"
                />
              </div>
            </div>
          </div>

          {status === "success" && (
            <div className="status-message success">
              訊息已成功送出！我會盡快回覆您。
            </div>
          )}

          {status === "error" && (
            <div className="status-message error">
              發送失敗，請稍後再試或直接寄信至 jasonma1127@gmail.com
            </div>
          )}

          <div className="contact-btn">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "發送中..." : "Send Message"}
            </button>
          </div>
        </form>

        <div className="contact-info-section">
          <div className="info-item">
            <h3>Email</h3>
            <p>jasonma1127@gmail.com</p>
          </div>
          <div className="info-item">
            <h3>Location</h3>
            <p>Taiwan</p>
          </div>
          <div className="info-item">
            <h3>Social</h3>
            <div className="social-links">
              <a
                href="https://github.com/jasonma1127"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.facebook.com/jason.ma.1297"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://jasonmablog.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WordPress
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
