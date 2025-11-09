const services = [
  {
    title: "Web Development",
    desc: "Responsive websites built with care and responsibility.",
  },
  {
    title: "UI/UX Design",
    desc: "Clean interfaces and delightful interactions.",
  },
  {
    title: "SEO & Growth",
    desc: "Improve your visibility, traffic and growth potential.",
  },
  {
    title: "Brand Identity",
    desc: "Logo design, color systems, and visual branding that stand out.",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Secure, scalable online stores with smooth shopping experiences.",
  },
  {
    title: "Custom Web Applications",
    desc: "Scalable MERN applications tailored to complex business needs.",
  },
  {
    title: "Performance Optimization",
    desc: "Speed, Core Web Vitals, and loading time improvements.",
  },
  {
    title: "Content Strategy",
    desc: "Clear messaging and content architecture for your brand.",
  },
  {
    title: "Maintenance & Support",
    desc: "Regular updates, debugging, and long-term project support.",
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 data-aos="fade-left" data-aos-offset="200">
          Services
        </h2>
        <div className="grid">
          {services.map((s, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className="card">
                <h3>{s.title}</h3>
                <p className="services-subtext">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
