export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer footer-wrapper">
        {/* Left: Brand + Copyright */}
        <div className="footer-left">
          <h3 className="footer-logo">MyBrand</h3>
          <p>© {new Date().getFullYear()} MyBrand. All rights reserved.</p>
        </div>

        {/* Middle: Quick Navigation */}
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right: Social Media */}
        <div className="footer-social">
          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="social-icon"
            aria-label="Facebook"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.4l-.4 3h-2v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>

          {/* Twitter / X */}
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="social-icon"
            aria-label="Twitter / X"
            style={{ marginTop: "2px" }}
          >
            <svg width="24" height="24" viewBox="0 0 30 30" fill="currentColor">
              <path d="M18.23 1.27h3.56l-7.78 8.9L24 22.73h-7.03l-5.51-7.21-6.31 7.21H1.59l8.32-9.51L0 1.27h7.19l5.01 6.6 6.03-6.6z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="social-icon"
            aria-label="Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 26 26" fill="currentColor">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="social-icon"
            aria-label="LinkedIn"
            style={{ marginTop: "-2px" }}
          >
            <svg width="24" height="24" viewBox="0 0 28 28" fill="currentColor">
              <path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6 2.49 2.49 0 0 1 4.98 3.5zM0 8.5h5v15H0zm7.5 0h4.7v2h.1c.7-1.2 2.3-2.5 4.8-2.5 5 0 5.9 3.3 5.9 7.5V24h-5v-6.8c0-1.6 0-3.7-2.3-3.7s-2.7 1.7-2.7 3.6V24h-5z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://www.github.com"
            target="_blank"
            className="social-icon"
            aria-label="GitHub"
          >
            <svg width="24" height="24" viewBox="0 0 30 30" fill="currentColor">
              <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1-.6.1-.5.1-.5 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.7 1.2 3.3.9.1-.8.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.2 11.2 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.6.2 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1 .8 2v3c0 .3.2.6.8.5A12 12 0 0 0 12 .3z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
