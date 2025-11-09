export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand">YourBrand</div>

        {/* Hamburger Icon */}
        <div
          className="hamburger"
          onClick={() => {
            const menu = document.querySelector(".nav-links");
            menu.classList.toggle("nav-open");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <div className="nav-links">
          <a
            href="#hero"
            onClick={() => {
              const menu = document.querySelector(".nav-links");
              menu.classList.toggle("nav-open");
            }}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => {
              const menu = document.querySelector(".nav-links");
              menu.classList.toggle("nav-open");
            }}
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => {
              const menu = document.querySelector(".nav-links");
              menu.classList.toggle("nav-open");
            }}
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={() => {
              const menu = document.querySelector(".nav-links");
              menu.classList.toggle("nav-open");
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
