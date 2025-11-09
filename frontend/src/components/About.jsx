export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        {/* HEADING (full width) */}
        <h2 className="about-title" data-aos="fade-down" data-aos-offset="200">
          About Us
        </h2>

        {/* TWO COLUMN LAYOUT */}
        <div
          className="about-wrapper"
          data-aos="fade-right"
          data-aos-offset="300"
        >
          {/* LEFT — IMAGE */}
          <div
            className="about-img"
            // data-aos="fade-right"
            // data-aos-offset="300"
          >
            <img
              src="https://i.pinimg.com/736x/77/75/5e/77755e565ef7ddbff2546231cd8732bf.jpg"
              alt="About illustration"
              // width={"100px"}
              // height={"350px"}
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* RIGHT — TEXT */}
          <div
            className="about-text"
            // data-aos="fade-left"
            // data-aos-offset="300"
          >
            <p>
              We are a team of passionate designers, developers, and problem
              solvers dedicated to building digital experiences that feel
              effortless, modern, and memorable. Our approach blends creativity
              with precision — crafting visually appealing interfaces and
              high-performance applications that users genuinely enjoy
              interacting with. <br />
              <br />
              Over the years, we’ve worked with individuals, startups, and
              growing businesses to turn their ideas into intuitive products.
              Every project we take on goes through a thoughtful process of
              research, design, and development to ensure the final result is
              both beautiful and functional. <br />
              <br />
              From front-end interfaces to back-end systems, we focus on writing
              clean, scalable code while keeping UI/UX at the heart of every
              decision. Our mission is simple: help brands create digital
              experiences that are fast, reliable, and enjoyable — because great
              products don’t just work well, they feel right.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
