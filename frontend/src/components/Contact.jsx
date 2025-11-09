import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    // setStatus('loading');
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_API}/api/contact/send`,
        form
      );
      setStatus(res.data.message || "Sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Error sending message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="contact"
      data-aos="fade-up"
      data-aos-offset="200"
    >
      <div className="container">
        <h2>Contact</h2>
        <form onSubmit={submit} className="contact-form">
          <input
            required
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            required
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        {status && !loading && <p className="status">{status}</p>}
      </div>
    </section>
  );
}
